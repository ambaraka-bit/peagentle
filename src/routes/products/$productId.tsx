import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find(
      (product) => product.id === +params.productId,
    )
    if (!product) {
      throw new Error('Product not found')
    }
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()

  return (
    <div className="min-h-screen bg-[#f2eddf] flex flex-col md:flex-row gap-8 p-5 md:p-16 text-[#173f31]">
      <div className="w-full md:w-[55%]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-2xl object-cover"
        />
      </div>

      <div className="w-full md:w-[45%] p-8">
        <Link to="/" className="inline-block mb-4">
          &larr; Kembali ke beranda
        </Link>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="mb-6">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            Rp{product.price.toLocaleString('id-ID')}
          </div>
          <a href="https://shopee.co.id/search?keyword=PeaGentle" target="_blank" rel="noreferrer" className="px-6 py-3 bg-[#e56835] text-white">
            Beli di Shopee
          </a>
        </div>
      </div>
    </div>
  )
}
