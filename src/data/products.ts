export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'PeaGentle Natural Bar Soap',
    image: '/images/peagentle-packaging.png',
    description:
      'Sabun batang natural dari kulit kacang, virgin olive oil, palm oil, dan essence oil. PeaGentle membersihkan dengan lembut sambil memberi nilai baru pada bahan yang sering dianggap sisa.',
    shortDescription: 'Sabun batang natural yang lembut untuk kulit dan lebih perhatian pada bumi.',
    price: 30000,
  },
]

export default products
