function c(o,n,i){return o.some(e=>e.from===n.id&&e.to===i.id)}function f(o,n,i){const e=n.reduce((r,s)=>(s.to===i&&r.push(s.from),r),[]),t=o.find(r=>r.id===i);return t!=null&&t.parent&&e.push(t.parent),o.filter(r=>e.includes(r.id))}function a(o,n,i,e){let t=!1;const r=s=>{const d=f(o,n,s);for(const u of d)if(u.id!==e.id)r(u.id);else{t=!0;break}};return r(i.id),t}export{a as d,c as h};
//# sourceMappingURL=graphHelpers-fa49f917.js.map
