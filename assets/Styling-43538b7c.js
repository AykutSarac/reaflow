import{j as e}from"./jsx-runtime-9c4ae004.js";import"./chunk-S4VUQJ4A-372e7a77.js";import{M as s,C as i}from"./index-207e0bb9.js";import{Styling as a}from"./Basic.stories-e3b0b32d.js";import{u as r}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-adcccb91.js";import"../sb-preview/runtime.js";import"./react-18-5df836b6.js";import"./index-6fd5a17b.js";import"./chunk-H6ZRF7XV-146ce0bc.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-4d52b68d.js";import"./index-356e4a49.js";import"./Icon-f01dccc9.js";import"./IntersectionQuery-4df33463.js";import"./crudHelpers-031fd461.js";import"./graphHelpers-fa49f917.js";function n(t){const o=Object.assign({h1:"h1",hr:"hr",p:"p",code:"code",pre:"pre"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Advanced/Styling"}),`
`,e.jsx(o.h1,{id:"custom-styling",children:"Custom Styling"}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.p,{children:`The Nodes, Edges, Arrows and Ports can all be overriden to pass custom attributes
to them to allow for custom styling. Below is an example of some of the possibilities
you can achieve.`}),`
`,e.jsx("br",{}),`
`,e.jsx(i,{of:a}),`
`,e.jsx("br",{}),`
`,e.jsxs(o.p,{children:["In the above example, we override the ",e.jsx(o.code,{children:"node"}),", ",e.jsx(o.code,{children:"edge"})," and ",e.jsx(o.code,{children:"arrow"}),` properties
in the `,e.jsx(o.code,{children:"Canvas"})," component as shown below (abbreviated for demonstration purposes):"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import { Canvas, Node, Edge, Port, MarkerArrow } from 'reaflow';

export const CustomCanvas: FC = () => (
  <Canvas
    nodes={[]}
    edges={[]}
    node={
      <Node
        style={{ stroke: '#1a192b', fill: 'white', strokeWidth: 1 }}
        label={<Label style={{ fill: 'black' }} />}
        port={<Port style={{ fill: 'blue', stroke: 'white' }} rx={10} ry={10} />}
      />
    }
    arrow={<MarkerArrow style={{ fill: '#b1b1b7' }} />}
    edge={<Edge className="edge" />}
  />
);
`})}),`
`,e.jsx(o.p,{children:`This allows us to set custom properties on these components or even
override them all together with our own component. This allows for
total control over the child components without loosing all the "magic"
under the hood that controls them.`})]})}function A(t={}){const{wrapper:o}=Object.assign({},r(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(n,t)})):n(t)}export{A as default};
//# sourceMappingURL=Styling-43538b7c.js.map
