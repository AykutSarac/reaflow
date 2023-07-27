import{j as e}from"./jsx-runtime-9c4ae004.js";import"./chunk-S4VUQJ4A-372e7a77.js";import{M as r,C as i}from"./index-207e0bb9.js";import{Simple as a}from"./Basic.stories-e3b0b32d.js";import{u as o}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-adcccb91.js";import"../sb-preview/runtime.js";import"./react-18-5df836b6.js";import"./index-6fd5a17b.js";import"./chunk-H6ZRF7XV-146ce0bc.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-4d52b68d.js";import"./index-356e4a49.js";import"./Icon-f01dccc9.js";import"./IntersectionQuery-4df33463.js";import"./crudHelpers-031fd461.js";import"./graphHelpers-fa49f917.js";function t(s){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},o(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Getting Started/Basics"}),`
`,e.jsx(n.h1,{id:"basics",children:"Basics"}),`
`,e.jsx(n.h2,{id:"your-first-diagram",children:"Your First Diagram"}),`
`,e.jsxs(n.p,{children:["Let's build our first diagram by defining some ",e.jsx(n.code,{children:"nodes"})," and ",e.jsx(n.code,{children:"edges"}),`.
Nodes are the blocks and edges are the relationships between the blocks.`]}),`
`,e.jsxs(n.p,{children:["The data shapes require one property of ",e.jsx(n.code,{children:"id"})," but you can pass ",e.jsx(n.code,{children:"text"}),`
or `,e.jsx(n.code,{children:"icon"}),` to them to show some sort of indication what it represents.
The `,e.jsx(n.code,{children:"id"})," property can be any ",e.jsx(n.code,{children:"string"}),` but for demonstration purposes
we are going to use some basic strings.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const nodes = [
  {
    id: '1',
    text: '1'
  },
  {
    id: '2',
    text: '2'
  }
];

const edges = [
  {
    id: '1-2',
    from: '1',
    to: '2'
  }
];
`})}),`
`,e.jsxs(n.p,{children:["These shapes above will create two elements ",e.jsx(n.code,{children:"1"})," and ",e.jsx(n.code,{children:"2"}),` and create
a relationship between them. Once we have this defined, we can simply
pass these properties to the `,e.jsx(n.code,{children:"Canvas"})," and it will do the rest!"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React from 'react';
import { Canvas } from 'reaflow';

export const MyDiagram = () => (
  <Canvas
    nodes={nodes}
    edges={edges}
  />
);
`})}),`
`,e.jsx(n.p,{children:"This will render a graph like this:"}),`
`,e.jsx(i,{of:a})]})}function T(s={}){const{wrapper:n}=Object.assign({},o(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(t,s)})):t(s)}export{T as default};
//# sourceMappingURL=Basics-73da8c28.js.map
