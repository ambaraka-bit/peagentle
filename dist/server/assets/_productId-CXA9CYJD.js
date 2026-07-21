import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { R as Route } from "./router-Lx_bDZNu.js";
function RouteComponent() {
  const product = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#f2eddf] flex flex-col md:flex-row gap-8 p-5 md:p-16 text-[#173f31]", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-[55%]", children: /* @__PURE__ */ jsx("img", { src: product.image, alt: product.name, className: "w-full rounded-2xl object-cover" }) }),
    /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[45%] p-8", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-block mb-4", children: "← Kembali ke beranda" }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-2", children: product.name }),
      /* @__PURE__ */ jsx("p", { className: "mb-6", children: product.description }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold", children: [
          "Rp",
          product.price.toLocaleString("id-ID")
        ] }),
        /* @__PURE__ */ jsx("a", { href: "https://shopee.co.id/search?keyword=PeaGentle", target: "_blank", rel: "noreferrer", className: "px-6 py-3 bg-[#e56835] text-white", children: "Beli di Shopee" })
      ] })
    ] })
  ] });
}
export {
  RouteComponent as component
};
