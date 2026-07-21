export interface Product {
  id: number
  name: string
  variant: string
  image: string
  description: string
  shortDescription: string
  price: number
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Lavender Calm',
    variant: 'Lavender',
    image: '/images/peagentle-packaging.png',
    description:
      'Aroma lavender yang menenangkan, dipadukan dengan serbuk kulit kacang yang lembut untuk ritual mandi yang lebih damai.',
    shortDescription: 'Tenang, halus, dan cocok untuk momen self-care yang santai.',
    price: 30000,
  },
  {
    id: 2,
    name: 'Vanilla Glow',
    variant: 'Vanila',
    image: '/images/peagentle-soap-2.png',
    description:
      'Nuansa vanila hangat dan tekstur exfoliating yang ringan untuk kulit yang terasa bersih dan nyaman.',
    shortDescription: 'Hangat, lembut, dan ideal untuk rutinitas pagi yang fresh.',
    price: 30000,
  },
  {
    id: 3,
    name: 'Mint Fresh',
    variant: 'Mint',
    image: '/images/peagentle-soap-1.png',
    description:
      'Sensasi segar mint yang ringan dan bersih, memberi pengalaman mandi yang energik tanpa mengiritasi.',
    shortDescription: 'Segar dan bersih untuk hari yang penuh energi.',
    price: 30000,
  },
]

export default products
