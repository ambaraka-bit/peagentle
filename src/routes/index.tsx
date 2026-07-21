import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  Droplets,
  Leaf,
  MessageCircle,
  Recycle,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
} from 'lucide-react'
import products from '../data/products'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const shopeeUrl = 'https://shopee.co.id/search?keyword=PeaGentle'

const benefits = [
  {
    title: 'Natural exfoliant',
    description: 'Serbuk kulit kacang membantu mengangkat sel kulit mati dengan lembut tanpa merusak lapisan pelindung.',
    icon: Recycle,
  },
  {
    title: 'Antioxidant rich',
    description: 'Diperkaya oleh bahan alami yang memberi dukungan perlindungan dan kelembapan pada kulit.',
    icon: Sparkles,
  },
  {
    title: 'Upcycled',
    description: 'Kami mengubah sisa agro industri menjadi produk skincare premium yang bernilai tinggi.',
    icon: Leaf,
  },
  {
    title: 'Free from harsh additives',
    description: 'Tanpa SLS, paraben, dan bahan sintetis yang keras untuk rutinitas yang lebih gentle.',
    icon: ShieldCheck,
  },
]

const testimonials = [
  {
    name: 'Ayu P.',
    role: 'Skincare enthusiast',
    quote: 'Kulit terasa lebih halus dan lembut setelah beberapa pemakaian. Saya suka nilai sustainability-nya.',
  },
  {
    name: 'Rafi M.',
    role: 'Eco-conscious buyer',
    quote: 'Saya suka karena produk ini simpel, elegan, dan tetap memberi hasil yang terasa bersih dan nyaman.',
  },
  {
    name: 'Dina S.',
    role: 'First-time soap user',
    quote: 'Aromanya lembut dan tidak membuat kulit terasa kering. Cocok untuk rutinitas harian saya.',
  },
]

const faqs = [
  {
    question: 'Apakah sabun ini cocok untuk kulit sensitif?',
    answer: 'Ya. Formula kami dibuat dengan bahan yang lembut dan tanpa bahan keras, tetapi kami tetap sarankan untuk mencoba pada area kecil terlebih dahulu.',
  },
  {
    question: 'Apakah serbuk kulit kacang terasa kasar?',
    answer: 'Tidak. Tekstur exfoliatingnya dibuat halus dan lembut agar tetap nyaman dipakai untuk membersihkan kulit.',
  },
  {
    question: 'Bagaimana cara menyimpan sabun agar tetap awet?',
    answer: 'Simpan di tempat kering dan tidak lembap, serta biarkan sabun mengering setelah dipakai agar tahan lebih lama.',
  },
  {
    question: 'Apakah sabun ini cocok untuk pria dan wanita?',
    answer: 'Tentu. Formula ini cocok untuk siapa pun yang mencari sabun natural yang bersih, lembut, dan lebih sadar lingkungan.',
  },
]

function HomePage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="PeaGentle beranda">
          PeaGentle<span>®</span>
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#benefits">Benefits</a>
          <a href="#products">Products</a>
          <a href="#story">Our Story</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <a className="icon-button" href="#products" aria-label="Lihat produk">
            <ShoppingBag size={18} />
          </a>
          <a className="header-cta" href={shopeeUrl} target="_blank" rel="noreferrer">
            Buy Now <ArrowUpRight size={15} strokeWidth={1.8} />
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Natural bar soap · Indonesia</p>
          <h1>Natural gentle exfoliation powered by the earth.</h1>
          <p className="hero-description">
            PeaGentle menghadirkan sabun batang natural berbahan dasar serbuk kulit kacang yang diolah dengan lembut untuk membersihkan, merawat, dan memberi rasa nyaman pada kulit.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={shopeeUrl} target="_blank" rel="noreferrer">
              Shop now <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#benefits">
              Explore our ingredients <ArrowDown size={16} />
            </a>
          </div>
          <ul className="hero-points" aria-label="Keunggulan PeaGentle">
            <li><CheckCircle2 size={16} /> Gentle exfoliation</li>
            <li><CheckCircle2 size={16} /> Eco-conscious formula</li>
            <li><CheckCircle2 size={16} /> Ready for daily rituals</li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" aria-hidden="true" />
          <img src="/images/peagentle-packaging.png" alt="Sabun batang PeaGentle dengan kemasan natural" />
          <div className="price-stamp" aria-label="Harga tiga puluh ribu rupiah">
            <small>from</small>
            <strong>30K</strong>
            <small>/ bar</small>
          </div>
        </div>
      </section>

      <section className="benefits-section" id="benefits">
        <div className="section-heading">
          <p className="eyebrow"><span /> Why peanut shells?</p>
          <h2>Gentle care, grounded in purpose.</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article className="benefit-card" key={title}>
              <div className="benefit-icon"><Icon size={20} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section" id="products" aria-label="Pilihan varian sabun PeaGentle">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> Our products</p>
          <h2>A fragrance for every ritual.</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} loading="lazy" />
              <div className="product-meta">
                <span className="product-badge">{product.variant}</span>
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <div className="product-footer">
                  <strong>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(product.price)}</strong>
                  <a href={shopeeUrl} target="_blank" rel="noreferrer">
                    Add to cart <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-copy">
          <p className="eyebrow"><span /> Our story</p>
          <h2>From agricultural waste to thoughtful skincare.</h2>
          <p>
            PeaGentle lahir dari keyakinan bahwa bahan yang sering terbuang bisa menjadi bagian dari rutinitas yang lebih baik. Kami mengolah kulit kacang secara higienis dan bertanggung jawab menjadi bahan utama sabun natural kami.
          </p>
          <p>
            Dengan pendekatan yang transparan, kami menghadirkan produk yang hangat, elegan, dan tetap menaruh perhatian pada alam serta kulit yang memakai produk kami setiap hari.
          </p>
        </div>
        <div className="story-side">
          <div className="story-card">
            <Droplets size={18} />
            <h3>Thoughtful ingredients</h3>
            <p>Natural oils and gentle botanicals support comfort and moisture.</p>
          </div>
          <div className="story-card accent">
            <BadgeCheck size={18} />
            <h3>Trusted values</h3>
            <p>BPOM/FDA-ready approach, cruelty-free, and made with care for everyday use.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section" id="testimonials">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> Testimonials</p>
          <h2>What people are saying.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="stars" aria-label="5 bintang">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={`${item.name}-${index}`} size={16} fill="currentColor" />
                ))}
              </div>
              <p>“{item.quote}”</p>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="trust-row" aria-label="Badges kepercayaan">
          <span>BPOM/FDA-ready</span>
          <span>Cruelty-free</span>
          <span>100% natural</span>
          <span>Halal & vegan friendly</span>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> FAQ</p>
          <h2>Questions, answered clearly.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <a className="wordmark inverse" href="#top">PeaGentle<span>®</span></a>
          <p>Natural care, thoughtfully made.</p>
        </div>
        <div className="footer-newsletter">
          <h3>Get first-order perks.</h3>
          <p>Daftar untuk menerima penawaran awal dan update produk terbaru.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email kamu" aria-label="Email" />
            <button type="button">Join</button>
          </form>
        </div>
        <div className="footer-contact">
          <span>Contact</span>
          <p>WhatsApp / Email: hubungi kami melalui Shopee atau chat resmi kami.</p>
          <a href={shopeeUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Hubungi via Shopee
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 PeaGentle</span>
          <span>Made gently in Indonesia</span>
        </div>
      </footer>
    </main>
  )
}
