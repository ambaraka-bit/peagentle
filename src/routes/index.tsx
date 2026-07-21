import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowUpRight,
  Droplets,
  Leaf,
  MessageCircle,
  PackageCheck,
  Recycle,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const shopeeUrl = 'https://shopee.co.id/search?keyword=PeaGentle'

const ingredients = [
  {
    number: '01',
    name: 'Kulit kacang',
    detail: 'Bahan bernilai yang kami beri kehidupan kedua.',
    icon: Recycle,
  },
  {
    number: '02',
    name: 'Virgin olive oil',
    detail: 'Membantu menjaga kelembutan dan rasa nyaman pada kulit.',
    icon: Droplets,
  },
  {
    number: '03',
    name: 'Palm oil',
    detail: 'Memberi batang sabun yang kokoh dengan busa yang lembut.',
    icon: Leaf,
  },
  {
    number: '04',
    name: 'Essence oil',
    detail: 'Aroma pilihan yang membuat ritual mandi terasa menenangkan.',
    icon: Sparkles,
  },
]

const process = [
  ['Pilih', 'Bahan-bahan dipilih dan dipersiapkan dengan teliti.'],
  ['Racik', 'Minyak nabati dan bahan utama diracik hingga menyatu.'],
  ['Cetak', 'Adonan dituangkan dan dibentuk menjadi batang yang khas.'],
  ['Matangkan', 'Sabun diistirahatkan agar siap digunakan dengan nyaman.'],
]

function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="PeaGentle beranda">
          PeaGentle<span>®</span>
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#cerita">Cerita</a>
          <a href="#proses">Proses</a>
          <a href="#beli">Beli</a>
        </nav>
        <a className="header-cta" href={shopeeUrl} target="_blank" rel="noreferrer">
          Shopee <ArrowUpRight size={15} strokeWidth={1.8} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal reveal-1">
          <p className="eyebrow"><span /> Natural bar soap · Indonesia</p>
          <h1>Lembut untuk kulit.<br /><em>Baik</em> untuk bumi.</h1>
          <p className="hero-description">
            Sabun batang natural dari kulit kacang dan minyak pilihan—dirancang
            untuk membersihkan dengan lembut, tanpa melupakan bumi tempat kita tumbuh.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={shopeeUrl} target="_blank" rel="noreferrer">
              Beli Rp30.000 <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#cerita">Kenali PeaGentle <ArrowDown size={16} /></a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-2">
          <div className="sun-shape" aria-hidden="true" />
          <span className="vertical-note">from shell to self-care</span>
          <img src="/images/peagentle-packaging.png" alt="PeaGentle natural bar soap dan kemasannya" />
          <div className="price-stamp" aria-label="Harga tiga puluh ribu rupiah">
            <small>harga</small>
            <strong>30K</strong>
            <small>/ batang</small>
          </div>
        </div>
      </section>

      <section className="manifesto" id="cerita">
        <div className="section-number">01 — KENAPA PEAGENTLE</div>
        <div className="manifesto-grid">
          <h2>Bukan sekadar<br />sabun biasa.</h2>
          <div className="manifesto-copy">
            <p className="lead">
              Kami melihat <em>potensi</em> pada sesuatu yang sering dianggap sisa.
            </p>
            <p>
              Kulit kacang menjadi karakter utama PeaGentle. Dipadukan dengan virgin
              olive oil, palm oil, dan essence oil, setiap batang menghadirkan
              pengalaman membersihkan yang natural, lembut, dan penuh perhatian.
            </p>
          </div>
        </div>

        <div className="ingredient-list">
          {ingredients.map(({ number, name, detail, icon: Icon }) => (
            <article className="ingredient-row" key={number}>
              <span className="ingredient-number">{number}</span>
              <Icon aria-hidden="true" strokeWidth={1.35} />
              <h3>{name}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-gallery" aria-label="Galeri produk PeaGentle">
        <div className="gallery-main">
          <img src="/images/peagentle-soap-2.png" alt="Batang sabun PeaGentle dengan tekstur alaminya" loading="lazy" />
          <span className="image-label">Gentle, grounded, good.</span>
        </div>
        <div className="gallery-side">
          <p>Setiap batang punya tampilan unik—jejak kecil dari bahan natural di dalamnya.</p>
          <img src="/images/peagentle-soap-1.png" alt="Detail sabun PeaGentle" loading="lazy" />
        </div>
      </section>

      <section className="process-section" id="proses">
        <div className="section-number light">02 — DIBUAT DENGAN PERHATIAN</div>
        <div className="process-intro">
          <h2>Dari bahan sederhana,<br /><em>lahir kelembutan.</em></h2>
          <p>Proses yang penuh perhatian menjaga setiap bahan tetap berarti hingga menjadi sabun yang siap menemani hari.</p>
        </div>
        <div className="process-grid">
          {process.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="process-image">
          <img src="/images/peagentle-soap-3.png" alt="PeaGentle setelah proses pembuatan" loading="lazy" />
          <div className="process-caption"><PackageCheck size={22} /><span>Diracik dengan teliti<br />Dikemas dengan ringan</span></div>
        </div>
      </section>

      <section className="purchase" id="beli">
        <div className="purchase-copy">
          <p className="eyebrow"><span /> Waktunya beralih ke yang lebih gentle</p>
          <h2>Satu batang.<br />Banyak kebaikan.</h2>
          <p>PeaGentle Natural Bar Soap</p>
          <div className="purchase-price"><strong>Rp30.000</strong><span>/ batang</span></div>
          <a className="button button-orange" href={shopeeUrl} target="_blank" rel="noreferrer">
            Beli di Shopee <ArrowUpRight size={18} />
          </a>
          <small>Klik tombol untuk mencari PeaGentle di Shopee.</small>
        </div>
        <div className="purchase-image">
          <img src="/images/peagentle-packaging.png" alt="Kemasan PeaGentle natural bar soap" loading="lazy" />
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <a className="wordmark inverse" href="#top">PeaGentle<span>®</span></a>
          <p>Natural care, thoughtfully made.</p>
        </div>
        <div className="footer-contact">
          <span>CONTACT PERSON</span>
          <h3>Admin PeaGentle</h3>
          <p>Untuk pertanyaan produk dan pemesanan, hubungi kami melalui chat toko Shopee.</p>
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
