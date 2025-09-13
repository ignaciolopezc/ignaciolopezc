import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cq2svzJQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_IcJXki7M.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", " <script>\n    window.location.href = '/';\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative bg-indigo-600/5"> <div class="container-fluid relative"> <div class="grid grid-cols-1"> <div class="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4"> <div class="title-heading text-center my-auto"> <h1 class="mt-3 mb-6 md:text-5xl text-3xl font-bold">Pagina no encontrada?</h1> <p class="text-slate-400">Ups!, lo siento!. <br> al parecer la pagina que buscas no se encuentra.</p> <div class="mt-4"> <a href="/" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Volver al inicio</a> </div> </div> </div> </div> </div> </section> ` }));
}, "C:/Users/ilopez/Desktop/Ignaciolopezc/src/pages/404.astro", void 0);

const $$file = "C:/Users/ilopez/Desktop/Ignaciolopezc/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
