import { createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
const Route$2 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "PeaGentle — Natural Bar Soap"
      },
      {
        name: "description",
        content: "PeaGentle adalah sabun batang natural dari kulit kacang, virgin olive oil, palm oil, dan essence oil."
      },
      {
        name: "theme-color",
        content: "#173f31"
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "id", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$1 = () => import("./index-Cq-vSWEg.js");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const products = [
  {
    id: 1,
    name: "Lavender Calm",
    variant: "Lavender",
    image: "/images/peagentle-packaging.png",
    description: "Aroma lavender yang menenangkan, dipadukan dengan serbuk kulit kacang yang lembut untuk ritual mandi yang lebih damai.",
    shortDescription: "Tenang, halus, dan cocok untuk momen self-care yang santai.",
    price: 3e4
  },
  {
    id: 2,
    name: "Vanilla Glow",
    variant: "Vanila",
    image: "/images/peagentle-soap-2.png",
    description: "Nuansa vanila hangat dan tekstur exfoliating yang ringan untuk kulit yang terasa bersih dan nyaman.",
    shortDescription: "Hangat, lembut, dan ideal untuk rutinitas pagi yang fresh.",
    price: 32e3
  },
  {
    id: 3,
    name: "Mint Fresh",
    variant: "Mint",
    image: "/images/peagentle-soap-1.png",
    description: "Sensasi segar mint yang ringan dan bersih, memberi pengalaman mandi yang energik tanpa mengiritasi.",
    shortDescription: "Segar dan bersih untuk hari yang penuh energi.",
    price: 31e3
  }
];
const $$splitComponentImporter = () => import("./_productId-CXA9CYJD.js");
const Route = createFileRoute("/products/$productId")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async ({
    params
  }) => {
    const product = products.find((product2) => product2.id === +params.productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const ProductsProductIdRoute = Route.update({
  id: "/products/$productId",
  path: "/products/$productId",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  ProductsProductIdRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  products as p,
  router as r
};
