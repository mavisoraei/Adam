(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,592265,e=>{"use strict";e.i(247167);var t=e.i(843476),o=e.i(271645);let n={"instrument-serif":'"Instrument Serif", Georgia, "Times New Roman", serif',newsreader:'"Newsreader", Georgia, "Times New Roman", serif',geist:"Geist, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"};e.s(["MengToSketchbookLandingPage",0,function(e){let{className:i="",style:a}=e,[r,s]=(0,o.useState)(!1),l=(0,o.useRef)(null),{headingFont:d,bodyFont:c,headingWeight:p,bodyWeight:f,primaryColor:g,headingSize:m,bodySize:$,headingLetterSpacing:u}=e,h=(0,o.useCallback)(e=>{var t;let o,i,a,r,s,l,h,y,b,w,k;return function(e,t){let o=e?.contentDocument;if(!o?.head)return;let n=o.head,{css:i,fontHref:a}=t,r=o.getElementById("threeui-page-typography")??o.createElement("style");r.id="threeui-page-typography",r.textContent!==i&&(r.textContent=i),n.appendChild(r);let s=o.getElementById("threeui-page-typography-fonts");if(a){let e=s??o.createElement("link");e.id="threeui-page-typography-fonts",e.rel="stylesheet",e.getAttribute("href")!==a&&(e.href=a),s||n.append(e)}else s?.remove()}(e,{css:(o=(t={headingFont:d,bodyFont:c,headingWeight:p,bodyWeight:f,primaryColor:g,headingSize:m,bodySize:$,headingLetterSpacing:u}).headingFont&&n[t.headingFont]?t.headingFont:"instrument-serif",i=t.bodyFont&&n[t.bodyFont]?t.bodyFont:"newsreader",a=t.headingWeight??"400",r=t.bodyWeight??"400",s=t.primaryColor&&/^#([\da-f]{3}|[\da-f]{6})$/i.test(t.primaryColor)?t.primaryColor:"#2b2721",l=t.headingSize??30,h=t.bodySize??20,y=t.headingLetterSpacing??.01,b=(e,t)=>{let o=4===e.length?e.slice(1).replace(/./g,e=>e+e):e.slice(1),[n,i,a]=[0,2,4].map(e=>Number.parseInt(o.slice(e,e+2),16));return`rgba(${n}, ${i}, ${a}, ${t})`},w=e=>Number(e.toFixed(3)),k=e=>`${w(e)}px`,`
:root {
  --ink: ${s};
  --ink-soft: ${b(s,.58)};
  --ink-faint: ${b(s,.36)};
  --hairline: ${b(s,.14)};
  --display: ${n[o]};
  --font: ${n[i]};
}
body { font-family: ${n[i]}; font-weight: ${r}; }
.top .name, .plate .t { font-family: ${n[o]}; font-weight: ${a}; }
.top .name {
  font-size: clamp(${k(24*l/30)}, calc(${w(l/30)} * 2.4vw), ${k(l)});
  letter-spacing: ${y}em;
}
.plate .t {
  font-size: clamp(${k(19*l/30)}, calc(${w(l/30)} * 2.1vw), ${k(26*l/30)});
  letter-spacing: ${w(y-.01)}em;
}
.top .menu { font-size: ${k(15*h/20)}; font-weight: ${"400"===r?"300":r}; }
.sb-cats { font-size: ${k(11*h/20)}; }
.sb-caption { font-size: ${k(13*h/20)}; }
.section-label, .zoom-read { font-size: ${k(11*h/20)}; }
.bio {
  font-size: clamp(${k(17*h/20)}, calc(${w(h/20)} * 1.7vw), ${k(h)});
  font-weight: ${"400"===r?"300":r};
}
.plate .n { font-size: ${k(12*h/20)}; }
.plate .p { font-size: ${k(12.5*h/20)}; }
.foot { font-size: ${k(11.5*h/20)}; }
::selection { background: ${b(s,.85)}; }
.bio-link { text-decoration-color: ${b(s,.28)}; }
@media (max-width: 640px) {
  .top .name { font-size: ${k(20*l/30)}; }
  .top .menu { font-size: ${k(12*h/20)}; }
  .sb-cats { font-size: ${k(9.5*h/20)}; }
}
`),fontHref:void 0})},[d,c,p,f,g,m,$,u]);return(0,o.useEffect)(()=>{h(l.current);let e=l.current,t=e?.contentDocument;if(!t)return;let o=()=>s(!0);if("complete"!==t.readyState&&"interactive"!==t.readyState)return t.addEventListener("DOMContentLoaded",o),()=>t.removeEventListener("DOMContentLoaded",o);o()},[h]),(0,t.jsx)("div",{className:`sketchbook-landing-page${i?` ${i}`:""}`,"data-state":r?"ready":"loading",style:{position:"relative",overflow:"hidden",background:"#ece7dc",...a},children:(0,t.jsx)("iframe",{ref:l,title:"Adam Fay — Portfolio",src:"/Adam/landing-pages/meng-to-sketchbook.html",sandbox:"allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts",loading:"eager",onLoad:e=>{h(e.currentTarget),s(!0)},style:{position:"absolute",inset:0,display:"block",width:"100%",height:"100%",border:0,background:"#ece7dc",opacity:+!!r,transition:"opacity 180ms ease-out"}})})}])}]);