import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_DhChbu1l.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CUIOaprO.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ilopez/Desktop/Ignaciolopezc/","cacheDir":"file:///C:/Users/ilopez/Desktop/Ignaciolopezc/node_modules/.astro/","outDir":"file:///C:/Users/ilopez/Desktop/Ignaciolopezc/dist/","srcDir":"file:///C:/Users/ilopez/Desktop/Ignaciolopezc/src/","publicDir":"file:///C:/Users/ilopez/Desktop/Ignaciolopezc/public/","buildClientDir":"file:///C:/Users/ilopez/Desktop/Ignaciolopezc/dist/client/","buildServerDir":"file:///C:/Users/ilopez/Desktop/Ignaciolopezc/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.lV3Klxyo.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.lV3Klxyo.css"},{"type":"inline","content":"[data-astro-cid-al2ca2vr][data-accordion-target]{cursor:pointer;transition:all .3s ease}[data-astro-cid-al2ca2vr][data-accordion-icon]{transition:transform .3s ease}#accordion-collapse[data-astro-cid-al2ca2vr]>div[data-astro-cid-al2ca2vr]{transition:all .3s ease-in-out}.hidden[data-astro-cid-al2ca2vr]{max-height:0;opacity:0;overflow:hidden}[data-astro-cid-al2ca2vr][aria-expanded=true]{background-color:#6366f10d}.dark[data-astro-cid-al2ca2vr] [data-astro-cid-al2ca2vr][aria-expanded=true]{background-color:#ffffff0d}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ilopez/Desktop/Ignaciolopezc/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/ilopez/Desktop/Ignaciolopezc/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DCEWzy2T.mjs","C:/Users/ilopez/Desktop/Ignaciolopezc/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D-D25vD-.mjs","C:/Users/ilopez/Desktop/Ignaciolopezc/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.CZyYi26t.js","C:/Users/ilopez/Desktop/Ignaciolopezc/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.DZnDNxNb.js","C:/Users/ilopez/Desktop/Ignaciolopezc/src/components/ui/ModalSuccess.astro?astro&type=script&index=0&lang.ts":"_astro/ModalSuccess.astro_astro_type_script_index_0_lang.Ik1HJU_V.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/ilopez/Desktop/Ignaciolopezc/src/components/Contact.astro?astro&type=script&index=0&lang.ts","const o=e=>new Promise(s=>setTimeout(s,e)),a=document.getElementById(\"formData\"),n=document.getElementById(\"message\");a.addEventListener(\"submit\",async e=>{e.preventDefault();const s=new FormData(a);try{const t=await(await fetch(\"api/contact\",{method:\"POST\",body:s})).json();console.log(t),t.success?(showSuccessModal(),await o(1e3),a.reset()):n.innerHTML=`<div class='alert alert-warning error_message'>${t.message}</div>`}catch(r){n&&(n.innerHTML=`<div class='alert alert-warning error_message'>${r.message}</div>`)}});"],["C:/Users/ilopez/Desktop/Ignaciolopezc/src/components/ui/ModalSuccess.astro?astro&type=script&index=0&lang.ts","function c(){const e=document.getElementById(\"success-modal\");if(e){e.classList.remove(\"opacity-0\",\"invisible\"),e.classList.add(\"opacity-100\",\"visible\");const s=e.querySelector('div[role=\"dialog\"]');s&&(s.classList.remove(\"scale-95\",\"translate-y-4\"),s.classList.add(\"scale-100\",\"translate-y-0\"))}}function t(){const e=document.getElementById(\"success-modal\");if(e){e.classList.remove(\"opacity-100\",\"visible\"),e.classList.add(\"opacity-0\",\"invisible\");const s=e.querySelector('div[role=\"dialog\"]');s&&(s.classList.remove(\"scale-100\",\"translate-y-0\"),s.classList.add(\"scale-95\",\"translate-y-4\")),setTimeout(()=>{t()},3e3)}}document.addEventListener(\"click\",e=>{const s=document.getElementById(\"success-modal\");e.target===s&&t()});document.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&t()});window.showSuccessModal=c;window.closeModal=t;"]],"assets":["/_astro/ibm.B-A6w-W8.jpg","/_astro/tecnofast.krF39ZQI.jpg","/_astro/tbusiness.BzZfhro2.jpg","/_astro/factorti.7ddpUs5L.jpg","/_astro/axity.LAzHCKQB.jpg","/_astro/pwc.BiiiP3CQ.jpg","/_astro/bgseo.vygcX-zD.png","/_astro/back.Q00PQxiA.png","/_astro/AA360.rPGS87mO.png","/_astro/uipath.C8hasyd4.png","/_astro/astro.U1KnP1Ka.svg","/_astro/html5.BZUc9ds1.svg","/_astro/css3.CA_VNmxR.svg","/_astro/javascript.IQVJnePY.svg","/_astro/github-light.DxM3KHaI.svg","/_astro/git.BK8RRwUh.svg","/_astro/reactjs.Dkl96BXr.svg","/_astro/tailwindcss.w05kX1Tl.svg","/_astro/copilot.DpTFA7qH.svg","/_astro/github-copilot.BcayJjNK.svg","/_astro/nodejs.DgevqCol.svg","/_astro/openai.DfDjUzot.svg","/_astro/markdown.DF6EYNob.svg","/_astro/npm.DYTxCN0u.svg","/_astro/python.CjJ4kpbw.svg","/_astro/vitejs.DriRgtgF.svg","/_astro/pp.MitsKXDi.svg","/_astro/vscode.9FtGAFsw.svg","/_astro/firefox.DH26eSR_.svg","/_astro/postman.cRBEFEvF.svg","/_astro/jira.BkXbRDeJ.svg","/_astro/notion.B39XULME.svg","/_astro/linkedin.CZnoWMrk.svg","/_astro/sqlserver.DFXP4yqQ.svg","/_astro/postgresql.BQeS-ozo.svg","/_astro/mongodb.D1ckXxj_.svg","/_astro/mysql.dbU_cqZg.svg","/_astro/index.lV3Klxyo.css","/CV Ignacio Lopez Campos ES.pdf","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.DZnDNxNb.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"DcoXIhFXaihhFRH7AgCoMyWxSo2iam21paOj73COV5U="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
