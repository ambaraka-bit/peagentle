import { jsxs, jsx } from "react/jsx-runtime";
import { ShoppingBag, ArrowUpRight, ArrowDown, CheckCircle2, Recycle, Sparkles, Leaf, ShieldCheck, ChevronRight, Droplets, BadgeCheck, Star, MessageCircle } from "lucide-react";
import { p as products } from "./router-Lx_bDZNu.js";
import "@tanstack/react-router";
const shopeeUrl = "https://shopee.co.id/search?keyword=PeaGentle";
const benefits = [{
  title: "Natural exfoliant",
  description: "Serbuk kulit kacang membantu mengangkat sel kulit mati dengan lembut tanpa merusak lapisan pelindung.",
  icon: Recycle
}, {
  title: "Antioxidant rich",
  description: "Diperkaya oleh bahan alami yang memberi dukungan perlindungan dan kelembapan pada kulit.",
  icon: Sparkles
}, {
  title: "Upcycled",
  description: "Kami mengubah sisa agro industri menjadi produk skincare premium yang bernilai tinggi.",
  icon: Leaf
}, {
  title: "Free from harsh additives",
  description: "Tanpa SLS, paraben, dan bahan sintetis yang keras untuk rutinitas yang lebih gentle.",
  icon: ShieldCheck
}];
const testimonials = [{
  name: "Ayu P.",
  role: "Skincare enthusiast",
  quote: "Kulit terasa lebih halus dan lembut setelah beberapa pemakaian. Saya suka nilai sustainability-nya."
}, {
  name: "Rafi M.",
  role: "Eco-conscious buyer",
  quote: "Saya suka karena produk ini simpel, elegan, dan tetap memberi hasil yang terasa bersih dan nyaman."
}, {
  name: "Dina S.",
  role: "First-time soap user",
  quote: "Aromanya lembut dan tidak membuat kulit terasa kering. Cocok untuk rutinitas harian saya."
}];
const faqs = [{
  question: "Apakah sabun ini cocok untuk kulit sensitif?",
  answer: "Ya. Formula kami dibuat dengan bahan yang lembut dan tanpa bahan keras, tetapi kami tetap sarankan untuk mencoba pada area kecil terlebih dahulu."
}, {
  question: "Apakah serbuk kulit kacang terasa kasar?",
  answer: "Tidak. Tekstur exfoliatingnya dibuat halus dan lembut agar tetap nyaman dipakai untuk membersihkan kulit."
}, {
  question: "Bagaimana cara menyimpan sabun agar tetap awet?",
  answer: "Simpan di tempat kering dan tidak lembap, serta biarkan sabun mengering setelah dipakai agar tahan lebih lama."
}, {
  question: "Apakah sabun ini cocok untuk pria dan wanita?",
  answer: "Tentu. Formula ini cocok untuk siapa pun yang mencari sabun natural yang bersih, lembut, dan lebih sadar lingkungan."
}];
function HomePage() {
  return /* @__PURE__ */ jsxs("main", { className: "page-shell", children: [
    /* @__PURE__ */ jsxs("header", { className: "site-header", children: [
      /* @__PURE__ */ jsxs("a", { className: "wordmark", href: "#top", "aria-label": "PeaGentle beranda", children: [
        "PeaGentle",
        /* @__PURE__ */ jsx("span", { children: "®" })
      ] }),
      /* @__PURE__ */ jsxs("nav", { "aria-label": "Navigasi utama", children: [
        /* @__PURE__ */ jsx("a", { href: "#benefits", children: "Benefits" }),
        /* @__PURE__ */ jsx("a", { href: "#products", children: "Products" }),
        /* @__PURE__ */ jsx("a", { href: "#story", children: "Our Story" }),
        /* @__PURE__ */ jsx("a", { href: "#testimonials", children: "Testimonials" }),
        /* @__PURE__ */ jsx("a", { href: "#faq", children: "FAQ" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "header-actions", children: [
        /* @__PURE__ */ jsx("a", { className: "icon-button", href: "#products", "aria-label": "Lihat produk", children: /* @__PURE__ */ jsx(ShoppingBag, { size: 18 }) }),
        /* @__PURE__ */ jsxs("a", { className: "header-cta", href: shopeeUrl, target: "_blank", rel: "noreferrer", children: [
          "Buy Now ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 15, strokeWidth: 1.8 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "hero", id: "top", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
        /* @__PURE__ */ jsxs("p", { className: "eyebrow", children: [
          /* @__PURE__ */ jsx("span", {}),
          " Natural bar soap · Indonesia"
        ] }),
        /* @__PURE__ */ jsx("h1", { children: "Natural gentle exfoliation powered by the earth." }),
        /* @__PURE__ */ jsx("p", { className: "hero-description", children: "PeaGentle menghadirkan sabun batang natural berbahan dasar serbuk kulit kacang yang diolah dengan lembut untuk membersihkan, merawat, dan memberi rasa nyaman pada kulit." }),
        /* @__PURE__ */ jsxs("div", { className: "hero-actions", children: [
          /* @__PURE__ */ jsxs("a", { className: "button button-dark", href: shopeeUrl, target: "_blank", rel: "noreferrer", children: [
            "Shop now ",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
          ] }),
          /* @__PURE__ */ jsxs("a", { className: "text-link", href: "#benefits", children: [
            "Explore our ingredients ",
            /* @__PURE__ */ jsx(ArrowDown, { size: 16 })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "hero-points", "aria-label": "Keunggulan PeaGentle", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 16 }),
            " Gentle exfoliation"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 16 }),
            " Eco-conscious formula"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 16 }),
            " Ready for daily rituals"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hero-visual", children: [
        /* @__PURE__ */ jsx("div", { className: "hero-glow", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("img", { src: "/images/peagentle-packaging.png", alt: "Sabun batang PeaGentle dengan kemasan natural" }),
        /* @__PURE__ */ jsxs("div", { className: "price-stamp", "aria-label": "Harga tiga puluh ribu rupiah", children: [
          /* @__PURE__ */ jsx("small", { children: "from" }),
          /* @__PURE__ */ jsx("strong", { children: "30K" }),
          /* @__PURE__ */ jsx("small", { children: "/ bar" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "benefits-section", id: "benefits", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-heading", children: [
        /* @__PURE__ */ jsxs("p", { className: "eyebrow", children: [
          /* @__PURE__ */ jsx("span", {}),
          " Why peanut shells?"
        ] }),
        /* @__PURE__ */ jsx("h2", { children: "Gentle care, grounded in purpose." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "benefit-grid", children: benefits.map(({
        title,
        description,
        icon: Icon
      }) => /* @__PURE__ */ jsxs("article", { className: "benefit-card", children: [
        /* @__PURE__ */ jsx("div", { className: "benefit-icon", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
        /* @__PURE__ */ jsx("h3", { children: title }),
        /* @__PURE__ */ jsx("p", { children: description })
      ] }, title)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "product-section", id: "products", "aria-label": "Pilihan varian sabun PeaGentle", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-heading compact", children: [
        /* @__PURE__ */ jsxs("p", { className: "eyebrow", children: [
          /* @__PURE__ */ jsx("span", {}),
          " Our products"
        ] }),
        /* @__PURE__ */ jsx("h2", { children: "A fragrance for every ritual." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "product-grid", children: products.map((product) => /* @__PURE__ */ jsxs("article", { className: "product-card", children: [
        /* @__PURE__ */ jsx("img", { src: product.image, alt: product.name, loading: "lazy" }),
        /* @__PURE__ */ jsxs("div", { className: "product-meta", children: [
          /* @__PURE__ */ jsx("span", { className: "product-badge", children: product.variant }),
          /* @__PURE__ */ jsx("h3", { children: product.name }),
          /* @__PURE__ */ jsx("p", { children: product.shortDescription }),
          /* @__PURE__ */ jsxs("div", { className: "product-footer", children: [
            /* @__PURE__ */ jsx("strong", { children: new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0
            }).format(product.price) }),
            /* @__PURE__ */ jsxs("a", { href: shopeeUrl, target: "_blank", rel: "noreferrer", children: [
              "Add to cart ",
              /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
            ] })
          ] })
        ] })
      ] }, product.id)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "story-section", id: "story", children: [
      /* @__PURE__ */ jsxs("div", { className: "story-copy", children: [
        /* @__PURE__ */ jsxs("p", { className: "eyebrow", children: [
          /* @__PURE__ */ jsx("span", {}),
          " Our story"
        ] }),
        /* @__PURE__ */ jsx("h2", { children: "From agricultural waste to thoughtful skincare." }),
        /* @__PURE__ */ jsx("p", { children: "PeaGentle lahir dari keyakinan bahwa bahan yang sering terbuang bisa menjadi bagian dari rutinitas yang lebih baik. Kami mengolah kulit kacang secara higienis dan bertanggung jawab menjadi bahan utama sabun natural kami." }),
        /* @__PURE__ */ jsx("p", { children: "Dengan pendekatan yang transparan, kami menghadirkan produk yang hangat, elegan, dan tetap menaruh perhatian pada alam serta kulit yang memakai produk kami setiap hari." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "story-side", children: [
        /* @__PURE__ */ jsxs("div", { className: "story-card", children: [
          /* @__PURE__ */ jsx(Droplets, { size: 18 }),
          /* @__PURE__ */ jsx("h3", { children: "Thoughtful ingredients" }),
          /* @__PURE__ */ jsx("p", { children: "Natural oils and gentle botanicals support comfort and moisture." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "story-card accent", children: [
          /* @__PURE__ */ jsx(BadgeCheck, { size: 18 }),
          /* @__PURE__ */ jsx("h3", { children: "Trusted values" }),
          /* @__PURE__ */ jsx("p", { children: "BPOM/FDA-ready approach, cruelty-free, and made with care for everyday use." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "testimonial-section", id: "testimonials", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-heading compact", children: [
        /* @__PURE__ */ jsxs("p", { className: "eyebrow", children: [
          /* @__PURE__ */ jsx("span", {}),
          " Testimonials"
        ] }),
        /* @__PURE__ */ jsx("h2", { children: "What people are saying." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "testimonial-grid", children: testimonials.map((item) => /* @__PURE__ */ jsxs("article", { className: "testimonial-card", children: [
        /* @__PURE__ */ jsx("div", { className: "stars", "aria-label": "5 bintang", children: Array.from({
          length: 5
        }).map((_, index) => /* @__PURE__ */ jsx(Star, { size: 16, fill: "currentColor" }, `${item.name}-${index}`)) }),
        /* @__PURE__ */ jsxs("p", { children: [
          "“",
          item.quote,
          "”"
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: item.name }),
          /* @__PURE__ */ jsx("span", { children: item.role })
        ] })
      ] }, item.name)) }),
      /* @__PURE__ */ jsxs("div", { className: "trust-row", "aria-label": "Badges kepercayaan", children: [
        /* @__PURE__ */ jsx("span", { children: "BPOM/FDA-ready" }),
        /* @__PURE__ */ jsx("span", { children: "Cruelty-free" }),
        /* @__PURE__ */ jsx("span", { children: "100% natural" }),
        /* @__PURE__ */ jsx("span", { children: "Halal & vegan friendly" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "faq-section", id: "faq", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-heading compact", children: [
        /* @__PURE__ */ jsxs("p", { className: "eyebrow", children: [
          /* @__PURE__ */ jsx("span", {}),
          " FAQ"
        ] }),
        /* @__PURE__ */ jsx("h2", { children: "Questions, answered clearly." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "faq-list", children: faqs.map((item) => /* @__PURE__ */ jsxs("details", { className: "faq-item", children: [
        /* @__PURE__ */ jsx("summary", { children: item.question }),
        /* @__PURE__ */ jsx("p", { children: item.answer })
      ] }, item.question)) })
    ] }),
    /* @__PURE__ */ jsxs("footer", { children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-brand", children: [
        /* @__PURE__ */ jsxs("a", { className: "wordmark inverse", href: "#top", children: [
          "PeaGentle",
          /* @__PURE__ */ jsx("span", { children: "®" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Natural care, thoughtfully made." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-newsletter", children: [
        /* @__PURE__ */ jsx("h3", { children: "Get first-order perks." }),
        /* @__PURE__ */ jsx("p", { children: "Daftar untuk menerima penawaran awal dan update produk terbaru." }),
        /* @__PURE__ */ jsxs("form", { className: "newsletter-form", children: [
          /* @__PURE__ */ jsx("input", { type: "email", placeholder: "Email kamu", "aria-label": "Email" }),
          /* @__PURE__ */ jsx("button", { type: "button", children: "Join" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-contact", children: [
        /* @__PURE__ */ jsx("span", { children: "Contact" }),
        /* @__PURE__ */ jsx("p", { children: "WhatsApp / Email: hubungi kami melalui Shopee atau chat resmi kami." }),
        /* @__PURE__ */ jsxs("a", { href: shopeeUrl, target: "_blank", rel: "noreferrer", children: [
          /* @__PURE__ */ jsx(MessageCircle, { size: 18 }),
          " Hubungi via Shopee"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-bottom", children: [
        /* @__PURE__ */ jsx("span", { children: "© 2026 PeaGentle" }),
        /* @__PURE__ */ jsx("span", { children: "Made gently in Indonesia" })
      ] })
    ] })
  ] });
}
export {
  HomePage as component
};
