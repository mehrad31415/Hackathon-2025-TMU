(()=>{let e="ai-blur-wrapper",t="ai-blur-overlay",a="ai-warning-overlay",r=(...e)=>console.debug("[AI-Blur]",...e);function o(e){e.classList.add("ai-safe")}(()=>{let o=document.createElement("style");o.textContent=`
    .${e}{display:inline-block;position:relative;}
    .${t}{
      position:absolute;inset:0;
      backdrop-filter:blur(30px);
      background:rgba(0,0,0,.3);
      pointer-events:none;
      z-index:1;
    }
    .${a}{
      position:absolute;
      top:8px;
      left:8px;
      background:rgba(255,255,255,0.9);
      color:#333;
      padding:8px 12px;
      border-radius:4px;
      font-size:11px;
      font-family:Arial,sans-serif;
      border:1px solid rgba(0,0,0,0.1);
      box-shadow:0 2px 4px rgba(0,0,0,0.1);
      pointer-events:none;
      z-index:2;
      line-height:1.2;
      margin-right:8px;
      word-wrap:break-word;
    }
    .${e}:hover .${a}{
      background:rgba(255,255,255,0.95);
    }`,(document.head||document.documentElement).appendChild(o),r("CSS injected")})();let n=new Set,i=e=>Array.from(document.images).filter(t=>t.src===e);function l(e){let t=("undefined"!=typeof OffscreenCanvas?new OffscreenCanvas(224,224):(()=>{let e=document.createElement("canvas");return e.width=224,e.height=224,e})()).getContext("2d");return t.drawImage(e,0,0,224,224),t.getImageData(0,0,224,224)}async function s(e){let t=new AbortController,a=setTimeout(()=>t.abort(),5e3);try{let a=await fetch(e,{mode:"cors",signal:t.signal});if(!a.ok)throw Error(`HTTP ${a.status}`);let r=await a.blob(),o=URL.createObjectURL(r),n=new Image;return n.src=o,await n.decode(),URL.revokeObjectURL(o),n}finally{clearTimeout(a)}}async function c(e){let t;if(n.has(e))return;n.add(e);let a=i(e)[0];if(a)try{t=l(a)}catch(t){r("tainted DOM canvas, fallback to fetch",e)}if(!t)try{let a=await s(e);t=l(a)}catch(t){r("fetch fallback failed",e,t.message);return}chrome.runtime.sendMessage({action:"CLASSIFY_IMAGE",rawImageData:Array.from(t.data),width:224,height:224,url:e}),r("→ CLASSIFY_IMAGE",e)}function d(e){e.complete&&(128>Math.max(e.naturalWidth,e.naturalHeight)||c(e.src))}document.querySelectorAll("img").forEach(d);let u=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&d(e.target)})},{root:null,threshold:0});document.querySelectorAll("img").forEach(e=>u.observe(e)),new MutationObserver(e=>{for(let t of e)t.addedNodes.forEach(e=>{"IMG"===e.tagName?(u.observe(e),d(e)):e.querySelectorAll&&e.querySelectorAll("img").forEach(e=>{u.observe(e),d(e)})}),"attributes"===t.type&&"IMG"===t.target.tagName&&("src"===t.attributeName||"srcset"===t.attributeName)&&d(t.target)}).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src","srcset"]}),chrome.runtime.onMessage.addListener(l=>{if("BLUR_IF_BLOCKLIST"===l.action){let n=i(l.url);l.shouldBlur?(n.forEach(r=>(function(r,o="sensitive content"){if(r.dataset.aiBlurProcessed)return;let n=document.createElement("span");n.className=e,r.parentNode.insertBefore(n,r),n.appendChild(r);let i=document.createElement("div");i.className=t,n.appendChild(i);let l=document.createElement("div");l.className=a,l.textContent=`Warning: image may contain ${o}`,n.appendChild(l),r.dataset.aiBlurProcessed="1",r.dataset.aiClassificationTag=o})(r,l.classificationTag||"sensitive content")),r("BLOCKED",n.length,"img(s)",l.url,"Tag:",l.classificationTag)):(n.forEach(o),r("SAFE",n.length,"img(s)",l.url))}else"REPROCESS_IMAGES"===l.action&&(r("Reprocessing all images on page"),n.clear(),document.querySelectorAll(`.${e}`).forEach(e=>{let t=e.querySelector("img");t&&(e.parentNode.insertBefore(t,e),e.remove(),delete t.dataset.aiBlurProcessed,delete t.dataset.aiClassificationTag)}),document.querySelectorAll("img.ai-safe").forEach(e=>{e.classList.remove("ai-safe")}),document.querySelectorAll("img").forEach(d))}),document.addEventListener("contextmenu",function(t){let a=t.target.closest(`.${e} img`)||"IMG"===t.target.tagName&&t.target.dataset.aiBlurProcessed;if(a){t.preventDefault();let o=document.createElement("div");o.style.cssText=`
      position: fixed;
      top: ${t.clientY}px;
      left: ${t.clientX}px;
      background: white;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      z-index: 10000;
      font-family: Arial, sans-serif;
      font-size: 12px;
      min-width: 150px;
    `;let n=document.createElement("div");n.style.cssText=`
      padding: 8px 12px;
      cursor: pointer;
      border-bottom: 1px solid #eee;
      color: #000;
      font-weight: 500;
    `,n.textContent="Unblur this image",n.onmouseover=()=>n.style.backgroundColor="#f0f0f0",n.onmouseout=()=>n.style.backgroundColor="white",n.onclick=()=>{(function(t){let a=t.closest(`.${e}`);a&&(a.parentNode.insertBefore(t,a),a.remove(),delete t.dataset.aiBlurProcessed,delete t.dataset.aiClassificationTag,t.classList.add("ai-safe"),r("Manually unblurred image:",t.src))})(a),document.body.removeChild(o)},o.appendChild(n),document.body.appendChild(o);let i=()=>{document.body.contains(o)&&document.body.removeChild(o),document.removeEventListener("click",i)};setTimeout(()=>document.addEventListener("click",i),0)}})})();
//# sourceMappingURL=content.js.map
