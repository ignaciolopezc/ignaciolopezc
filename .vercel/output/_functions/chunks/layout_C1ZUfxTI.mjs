import { c as createComponent, b as createAstro, d as addAttribute, e as renderScript, r as renderTemplate, m as maybeRenderHead, a as renderComponent, n as renderSlot, o as renderHead } from './astro/server_DhChbu1l.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/ilopez/Desktop/Ignaciolopezc/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ilopez/Desktop/Ignaciolopezc/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Start Navbar -->", `<nav id="topnav" class="defaultscroll is-sticky bg-slate-900"> <div class="container relative"> <div class="menu-extras"> <div class="menu-item"> <!-- <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()"> --> <a class="navbar-toggle" id="isToggle" data-toggle-nav> <div class="lines"> <span></span> <span></span> <span></span> </div> </a> </div> </div> <!--Login button Start--> <ul class="buy-button list-none mb-0"> <!-- <li class="inline mb-0">               
                <a id="mode" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-800 border-indigo-600 border hover:border-indigo-800  text-white">
                    <i id="theme-icon" class="uil uil-sun text-md align-middle"></i>
                </a>
            </li> --> <li class="inline ps-1 mb-0"> <a id="CV" data-tooltip="Curriculum Vitae" href="CV Ignacio Lopez Campos ES.pdf" target="_blank" class="px-5 py-1 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-800 border-indigo-600 border hover:border-indigo-800 text-white rounded-2xl"><i class="uil uil-file-blank"></i> CV </a> </li> </ul> <!--Login button End--> <div id="navigation"> <ul class="navigation-menu"> <li><a href="#hero" class="">Home</a></li> <li><a href="#experience" class="sub-menu-item">Expeciencia</a></li> <li><a href="#tech" class="sub-menu-item">Tecnologias</a></li> <li><a href="#education" class="sub-menu-item">Educaci\xF3n</a></li> <!-- <li><a href="#project" class="sub-menu-item">Proyectos</a></li> --> <li><a href="#faq" class="sub-menu-item">FAQ's</a></li> <!-- <li><a href="#contact" class="sub-menu-item">Contacto</a></li> --> </ul> </div> </div> </nav> <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Toggle menu
        const toggleButton = document.querySelector('[data-toggle-nav]');
        
        if (toggleButton) {
            toggleButton.addEventListener('click', function() {
                const toggle = document.getElementById('isToggle');
                const isOpen = document.getElementById('navigation');
                
                toggle.classList.toggle('open');
                if (isOpen.style.display === "block") {
                    isOpen.style.display = "none";
                } else {
                    isOpen.style.display = "block";
                }
            });
        }
    });
<\/script> <script>
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggleBtn = document.getElementById('mode');
        const themeIcon = document.getElementById('theme-icon');
        
        // Funci\xF3n para actualizar el icono
        const updateIcon = (isDark) => {
            themeIcon.classList.remove('uil-sun', 'uil-moon');
            themeIcon.classList.add(isDark ? 'uil-moon' : 'uil-sun');
        };
        
        // Establecer icono inicial
        const isDarkMode = localStorage.theme === 'dark' || 
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        updateIcon(isDarkMode);

        // Theme toggle handler
        themeToggleBtn.addEventListener('click', function() {
            const element = document.documentElement;
            element.classList.toggle("dark");
            
            const isDark = element.classList.contains("dark");
            localStorage.theme = isDark ? 'dark' : 'light';
            
            updateIcon(isDark);
        });
    });
<\/script>`])), maybeRenderHead());
}, "C:/Users/ilopez/Desktop/Ignaciolopezc/src/components/ui/Header.astro", void 0);

const $$Social = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="items-center justify-center space-x-2 md:space-x-2 lg:space-x-4 flex flex-wrap"> <div class="my-2"> <a href="https://github.com/ignaciolopezc/ignaciolopezc" title="Github" target="_blank" class="inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white"> <i class="uil uil-github text-xl align-middle ms-5 me-3"></i><span class="me-5">Ignaciolopezc</span> </a> </div> <div class="my-2"> <a href="https://www.linkedin.com/in/ignaciolopezcampos/" title="Linkedin" target="_blank" class="inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white"> <i class="uil uil-linkedin text-xl align-middle ms-5 me-3"></i><span class="me-5">in/ignaciolopezcampos</span> </a> </div> <div class="my-2"> <a href="mailto:ignaciolopezc@gmail.com" title="Email" class="inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white"> <i class="uil uil-envelope text-xl align-middle ms-5 me-3"></i><span class="me-5">Ignaciolopezc@gmail.com</span> </a> </div> <div class="my-2"> <a href="CV Ignacio Lopez Campos ES.pdf" title="Curriculum Vitae" target="_blank" class="inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white"> <i class="uil uil-file text-xl align-middle ms-5 me-3"></i><span class="me-5">Curriculum Vite</span> </a> </div> <!-- <ul class="list-none">
        <li class="inline me-1">
            <a href="https://github.com/ignaciolopezc/ignaciolopezc" title="Github" data-tooltip="Github" target="_blank" class="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white">
                <i class="uil uil-github text-xl align-middle"></i>
            </a>
        </li>
        <li class="inline me-1">
            <a href="https://www.linkedin.com/in/ignaciolopezcampos/" title="Linkedin" data-tooltip="Linkedin" target="_blank" class="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white">
                <i class="uil uil-linkedin text-xl align-middle"></i>
            </a>
        </li>
        <li class="inline me-1">
            <a href="mailto:ignaciolopezc@gmail.com" title="Email" data-tooltip="Email" class="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white">
                <i class="uil uil-envelope text-xl align-middle"></i>
            </a>
        </li>
        <li class="inline me-1">
            <a href="CV Ignacio Lopez Campos ES.pdf" title="Curriculum Vitae" data-tooltip="Curriculum Vitae" target="_blank" class="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white">
                <i class="uil uil-file text-xl align-middle"></i>
            </a>
        </li>
        <li class="inline me-1">
            <a href="#hero" data-tooltip="Home" class="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white">
                <i class="uil uil-globe text-xl align-middle" title="Website"></i>
            </a>
        </li>
    </ul> --> </div>`;
}, "C:/Users/ilopez/Desktop/Ignaciolopezc/src/components/ui/Social.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer bg-dark-footer relative text-gray-200 dark:text-gray-200"> <div class="container relative"> <div class="grid grid-cols-12"> <div class="col-span-12"> <div class="py-[60px] px-0"> <div class="grid grid-cols-1"> <div class="text-center"> ${renderComponent($$result, "Social", $$Social, {})} </div> </div> </div> </div> </div> </div> <div class="py-[30px] px-0 border-t border-slate-800"> <div class="container relative text-center"> <div class="grid md:grid-cols-1"> <p class="mb-0">© ${(/* @__PURE__ */ new Date()).getFullYear()} Ignacio López Campos.</p> </div> </div> </div> </footer>`;
}, "C:/Users/ilopez/Desktop/Ignaciolopezc/src/components/ui/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="light scroll-smooth" dir="ltr"> <head><meta charset="UTF-8"><title>Ignacio L\xF3pez Campos</title><meta name="generator"', '><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="description" content="Ignacio L\xF3pez Campos Consultor de procesos RPA Automatizacion Desarrollo"><meta name="keywords" content="Automation Automatizacion RPA Ignacio L\xF3pez Campos"><meta name="author" content="Ignacio L\xF3pez Campos"><meta name="website" content="https://ignaciolopezc.cl"><meta name="email" content="contacto@ignaciolopezc.cl"><meta name="version" content="1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><link rel="shortcut icon" href="/favicon.svg"><link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.6/css/unicons.css"><!-- <link rel="stylesheet" href="src/assets/css/tailwind.css"> --><!-- <link href="src/styles/global.css" rel="stylesheet"> -->', "", '</head> <body class="font-nunito text-base text-black dark:text-white dark:bg-slate-900"> ', " <main> ", " </main> ", ` <a href="#" id="back-to-top" class="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 size-9 text-center bg-indigo-600 text-white leading-9 transform-none"> <i class="uil uil-arrow-up"></i> </a> <script>
        document.addEventListener('DOMContentLoaded', function() {
            const backToTop = document.getElementById('back-to-top');
            
            window.onscroll = function() {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    backToTop.classList.remove('hidden');
                } else {
                    backToTop.classList.add('hidden');
                }
            };

            backToTop.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
    <\/script> </body> </html>`])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/ilopez/Desktop/Ignaciolopezc/src/layouts/layout.astro", void 0);

export { $$Layout as $, $$Social as a };
