_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{Aiso:function(e,i,t){e.exports=t("dQHF")},NsKY:function(e,i,t){e.exports={service:"Service_service__C-T1j",service_wrapper:"Service_service_wrapper__39P8k",service_wrapper_mobile:"Service_service_wrapper_mobile__3m17S",service_wrapper_bulletpoints:"Service_service_wrapper_bulletpoints__16Bl9",service_backBtn:"Service_service_backBtn__3ANxr",service_backBtn_mobile:"Service_service_backBtn_mobile__2nonv",service_background:"Service_service_background__2N8Jt",service_description:"Service_service_description__1iFh8"}},VDgY:function(e,i,t){"use strict";t.r(i),t.d(i,"__N_SSG",(function(){return f}));var n=t("nKUr"),r=t("8Kt/"),o=t.n(r),s=t("k7Sn"),a=t("NsKY"),c=t.n(a),l=t("nOHt"),d=t("b6Qr"),u=(t("Aiso"),t("mFsd")),v=t.n(u),p=t("ZMKu");var f=!0;i.default=Object(s.withTranslation)("common")((function(e){var i=e.t,t=e.particles_config,r=e.services_data,s=e.icons,a=Object(l.useRouter)(),u=a.query.service,f=r.data[u];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(o.a,{children:[Object(n.jsx)("title",{children:"Tximenea Films | "+f.title.charAt(0)+f.title.toLowerCase().slice(1)}),Object(n.jsx)("description",{name:"description",content:f.description})]}),Object(n.jsxs)(p.b.section,{className:c.a.service,initial:{x:1e3,opacity:0,overflow:"hidden"},animate:{x:0,opacity:1,overflowY:"scroll"},transition:{x:{type:"spring",stiffness:150,damping:20},opacity:{duration:1},overflowY:{delay:1}},children:[Object(n.jsxs)("div",{className:d.isBrowser?c.a.service_wrapper:c.a.service_wrapper_mobile,children:[d.isBrowser?Object(n.jsxs)("div",{className:c.a.service_backBtn,onClick:function(e){e.preventDefault(),a.back()},children:["\u2190 ",i("services.go_back")]}):Object(n.jsx)("div",{className:"service_backBtn_mobile",onClick:function(e){e.preventDefault(),a.back()}}),Object(n.jsx)("img",{src:s[f.icon],alt:f.title,className:c.a.icon_mobile,width:200,height:200}),Object(n.jsx)("h1",{children:i("services.data."+u+".title")}),Object(n.jsx)("p",{children:i("services.data."+u+".description")}),Object(n.jsx)("div",{className:c.a.service_wrapper_bulletpoints,children:Object(n.jsx)("ul",{children:f.bulletpoints.map((function(e,t){return Object(n.jsx)("li",{children:i("services.data."+[u]+".bulletpoints."+e)},t)}))})})]}),d.isBrowser?Object(n.jsx)(v.a,{params:t,className:c.a.service_background}):""]})]})}))},dQHF:function(e,i,t){"use strict";var n=t("RIqP"),r=t("284h"),o=t("TqRt");i.__esModule=!0,i.default=function(e){var i=e.src,t=e.sizes,n=e.unoptimized,r=void 0!==n&&n,o=e.priority,c=void 0!==o&&o,u=e.loading,v=e.className,p=e.quality,f=e.width,b=e.height,_=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height"]),m=(0,l.useRef)(null),w=_,y=t?"responsive":"intrinsic",z=!1;"unsized"in w?(z=Boolean(w.unsized),delete w.unsized):"layout"in w&&(w.layout&&(y=w.layout),delete w.layout);0;var k="lazy"===u;c||"undefined"!==typeof u||(k=!0);window.IntersectionObserver||(k=!1);(0,l.useEffect)((function(){var e=m.current;if(e&&k){var i=function(){var e=window.IntersectionObserver;if(s)return s;if(!e)return;return s=new e((function(e){e.forEach((function(e){if(e.isIntersecting){var i=e.target;h(i),s.unobserve(i)}}))}),{rootMargin:"200px"})}();if(i)return i.observe(e),function(){i.unobserve(e)};h(e)}}),[m,k]);var S,N,O,q=j(f),E=j(b),B=j(p),I={visibility:k?"hidden":"visible",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%"};if("undefined"!==typeof q&&"undefined"!==typeof E&&"fill"!==y){var T=E/q,F=isNaN(T)?"100%":"".concat(100*T,"%");"responsive"===y?(S={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},N={display:"block",boxSizing:"border-box",paddingTop:F}):"intrinsic"===y?(S={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},N={boxSizing:"border-box",display:"block",maxWidth:"100%"},O='<svg width="'.concat(q,'" height="').concat(E,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===y&&(S={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:q,height:E})}else"undefined"===typeof q&&"undefined"===typeof E&&"fill"===y&&(S={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var K,Y=g(i,r,y,q,B),C=x({src:i,unoptimized:r,layout:y,width:q,quality:B});k?(K={"data-src":Y},C&&(K["data-srcset"]=C),v=v?v+" __lazy":"__lazy"):(K={src:Y},C&&(K.srcSet=C));var H=c&&!1;z&&(S=void 0,N=void 0,I=void 0);return l.default.createElement("div",{style:S},H?function(e){var i=e.src,t=e.unoptimized,n=void 0!==t&&t,r=e.layout,o=e.width,s=e.sizes,a=e.quality;return l.default.createElement(d.default,null,l.default.createElement("link",{rel:"preload",as:"image",href:g(i,n,r,o,a),imagesrcset:x({src:i,unoptimized:n,layout:r,width:o,quality:a}),imagesizes:s}))}({src:i,layout:y,unoptimized:r,width:q,sizes:t,quality:B}):null,N?l.default.createElement("div",{style:N},O?l.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;charset=utf-8,".concat(O)}):null):null,l.default.createElement("img",Object.assign({},w,K,{decoding:"async",className:v,sizes:t,ref:m,style:I})))};var s,a=o(t("8OQS")),c=o(t("pVnL")),l=r(t("q1tI")),d=o(t("8Kt/")),u=new Map([["imgix",function(e){var i=e.root,t=e.src,n=e.width,r=e.quality,o=["auto=format","fit=max","w="+n],s="";r&&o.push("q="+r);o.length&&(s="?"+o.join("&"));return"".concat(i).concat(z(t)).concat(s)}],["cloudinary",function(e){var i=e.root,t=e.src,n=e.width,r=e.quality,o=["f_auto","c_limit","w_"+n],s="";r&&o.push("q_"+r);o.length&&(s=o.join(",")+"/");return"".concat(i).concat(s).concat(z(t))}],["akamai",function(e){var i=e.root,t=e.src,n=e.width;return"".concat(i).concat(z(t),"?imwidth=").concat(n)}],["default",k]]),v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"},p=v.deviceSizes,f=v.imageSizes,b=v.loader,_=v.path,m=[].concat(n(p),n(f));function h(e){e.dataset.src&&(e.src=e.dataset.src),e.dataset.srcset&&(e.srcset=e.dataset.srcset),e.style.visibility="visible",e.classList.remove("__lazy")}function w(e,i){return"number"!==typeof e||"fill"===i||"responsive"===i?{sizes:p,kind:"w"}:{sizes:n(new Set([e,2*e,3*e].map((function(e){return m.find((function(i){return i>=e}))||m[m.length-1]})))),kind:"x"}}function g(e,i,t,n,r){if(i)return e;var o=w(n,t).sizes;return y({src:e,width:o[o.length-1],quality:r})}function y(e){return(u.get(b)||k)((0,c.default)({root:_},e))}function x(e){var i=e.src,t=e.unoptimized,n=e.layout,r=e.width,o=e.quality;if(!t){var s=w(r,n),a=s.sizes,c=s.kind;return a.map((function(e,t){return"".concat(y({src:i,width:e,quality:o})," ").concat("w"===c?e:t+1).concat(c)})).join(", ")}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){return"/"===e[0]?e.slice(1):e}function k(e){var i=e.root,t=e.src,n=e.width,r=e.quality;return"".concat(i,"?url=").concat(encodeURIComponent(t),"&w=").concat(n,"&q=").concat(r||75)}p.sort((function(e,i){return e-i})),m.sort((function(e,i){return e-i}))},vbfU:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/[service]",function(){return t("VDgY")}])}},[["vbfU",0,1,2,3,4,5,6]]]);