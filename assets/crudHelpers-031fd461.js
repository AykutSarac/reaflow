function E(n,i,t,r){const f=i.findIndex(o=>o.id===t.id),s={...t,id:`${t.from}-${r.id}`,to:r.id},d={...t,id:`${r.id}-${t.to}`,from:r.id};return t.fromPort&&t.toPort&&(s.fromPort=t.fromPort,s.toPort=`${r.id}-to`,d.fromPort=`${r.id}-from`,d.toPort=t.toPort),i.splice(f,1,s,d),{nodes:[...n,r],edges:[...i]}}function P(n,i,t,r){Array.isArray(t)||(t=[t]);const f=t.map(o=>o.id),s=n.filter(o=>!f.includes(o.id)),d=i.filter(o=>!f.includes(o.from)&&!f.includes(o.to));for(const o of f){const m=i.filter(u=>u.to===o),$=i.filter(u=>u.from===o);for(const u of m)for(const e of $){const c=n.find(a=>a.id===u.from),p=n.find(a=>a.id===e.to);if(c&&p){const a=r==null?void 0:r(s,d,c,p);(a===void 0||a)&&d.push({id:`${c.id}-${p.id}`,from:c.id,to:p.id,parent:c==null?void 0:c.parent})}}}return{edges:d,nodes:s}}function g(n,i,t){Array.isArray(t)||(t=[t]);const r=[],f=[];for(const s of n)t.some(o=>o===s.id)||r.push(s);for(const s of i)t.some(o=>o===s.from||o===s.to)||f.push(s);return{nodes:r,edges:f}}function l(n,i){return{id:`${n.id}-${i.id}`,from:n.id,to:i.id,parent:i.parent}}function A(n,i,t,r){return{nodes:[...n,t],edges:[...i,...r?[l(r,t)]:[]]}}export{A as a,g as b,l as c,P as r,E as u};
//# sourceMappingURL=crudHelpers-031fd461.js.map
