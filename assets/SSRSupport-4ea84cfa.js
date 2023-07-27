import{j as n}from"./jsx-runtime-9c4ae004.js";import"./blocks-2646952b.js";import{u as s}from"./index-2ef8b458.js";import{M as r}from"./index-207e0bb9.js";import"./index-1b03fe98.js";import"./iframe-adcccb91.js";import"../sb-preview/runtime.js";import"./chunk-H6ZRF7XV-146ce0bc.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-6fd5a17b.js";import"./index-4d52b68d.js";import"./index-356e4a49.js";function o(t){const e=Object.assign({h1:"h1",p:"p",code:"code",em:"em",pre:"pre"},s(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Docs/Advanced/SSR Support"}),`
`,n.jsx(e.h1,{id:"ssr-support",children:"SSR Support"}),`
`,n.jsxs(e.p,{children:["The Next.js framework supports SSR, but the ",n.jsx(e.code,{children:"Canvas"}),` component shouldn't be rendered on the server.
`,n.jsxs(e.em,{children:["It won't crash the app, but it'd print a lot of noisy warnings (",n.jsx(e.code,{children:"useEffect"}),", etc.) on the server, though."]})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"pages/index.tsx"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';
import { Canvas } from 'reaflow';

const Page = () => (
  <div style={{position: 'relative', width: '100vw', height: '100vh'}}>
    <div style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, 'backgroundColor': '#F5F5F5'}}>
      {
        // Don't render the Canvas on the server
        typeof window !== 'undefined' && (
          <Canvas
            maxWidth={800} // Use small canvas dimensions to make sure the nodes appear on screen immediately
            maxHeight={600}
            nodes={[
              {
                id: '1',
                text: '1'
              },
              {
                id: '2',
                text: '2'
              }
            ]}
            edges={[
              {
                id: '1-2',
                from: '1',
                to: '2'
              }
            ]}
          />
        )
      }
    </div>
  </div>
);

export default Page;
`})})]})}function v(t={}){const{wrapper:e}=Object.assign({},s(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(o,t)})):o(t)}export{v as default};
//# sourceMappingURL=SSRSupport-4ea84cfa.js.map
