import{j as o}from"./jsx-runtime-9c4ae004.js";import{r as f}from"./index-1b03fe98.js";import{C as n,N as p,E as X,M as Y,a as Z,I as ee,L as te,P as oe,R as re,A as se}from"./Icon-f01dccc9.js";import"./IntersectionQuery-4df33463.js";import{c as D,r as j}from"./crudHelpers-031fd461.js";import{h as b}from"./graphHelpers-fa49f917.js";import"./index-6fd5a17b.js";import"./_commonjs-dynamic-modules-302442b1.js";const fe={title:"Demos/Drag",component:n,subcomponents:{Node:p,Edge:X,MarkerArrow:Y,Arrow:Z,Icon:ee,Label:te,Port:oe,Remove:re,Add:se}},c=()=>o.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0},children:o.jsx(n,{nodes:[{id:"1",text:"1"},{id:"2",text:"2"}],edges:[{id:"1-2",from:"1",to:"2"}],node:o.jsx(p,{dragCursor:"grab",dragType:"node"})})}),u=()=>o.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0},children:o.jsx(n,{nodes:[{id:"1",text:"1",ports:i("1")},{id:"2",text:"2",ports:i("2")}],edges:[l("1","2")],node:o.jsx(p,{dragType:"port"})})}),x=()=>o.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0},children:o.jsx(n,{nodes:[{id:"1",text:"1",ports:i("1")},{id:"2",text:"2"}],edges:[{id:"1-2",from:"1",to:"2"}],node:o.jsx(p,{dragType:"multiportOnly"})})}),N=()=>o.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0},children:o.jsx(n,{nodes:[{id:"1",text:"1",ports:i("1")},{id:"2",text:"2"}],edges:[{id:"1-2",from:"1",to:"2"}],node:o.jsx(p,{dragType:"all"})})}),k=()=>{const[r,g]=f.useState([{id:"1",text:"1"},{id:"2",text:"2"},{id:"3",text:"3"},{id:"4",text:"4"},{id:"5",text:"5"},{id:"6",text:"6"}]),[s,m]=f.useState([{id:"1-2",from:"1",to:"2"},{id:"2-3",from:"2",to:"3"},{id:"2-4",from:"2",to:"4"},{id:"2-5",from:"2",to:"5"},{id:"5-6",from:"5",to:"6"}]);return o.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0},children:o.jsx(n,{nodes:r,edges:s,node:o.jsx(p,{dragType:"node"}),onNodeLinkCheck:(d,e,t)=>!(e.id===t.id||b(s,e,t)),onNodeLink:(d,e,t)=>{const a=s.filter(E=>E.to!==e.id);m([...a,D(t,e)])}})})},h=()=>{const[r,g]=f.useState([{id:"1",text:"1"},{id:"2",text:"2"},{id:"3",text:"3"},{id:"4",text:"4"},{id:"5",text:"5"},{id:"6",text:"6"}]),[s,m]=f.useState([{id:"1-2",from:"1",to:"2"},{id:"2-3",from:"2",to:"3"},{id:"2-4",from:"2",to:"4"},{id:"2-5",from:"2",to:"5"},{id:"5-6",from:"5",to:"6"}]);return o.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0},children:o.jsx(n,{nodes:r,edges:s,node:o.jsx(p,{dragType:"node"}),onNodeLinkCheck:(d,e,t)=>!(e.id===t.id||b(s,e,t)),onNodeLink:(d,e,t)=>{const a=j(r,s,e);m([...a.edges,D(t,e)])}})})},v=()=>{const[r,g]=f.useState([{id:"1",text:"1",ports:i("1")},{id:"2",text:"2",ports:i("2")},{id:"3",text:"3",ports:i("3")},{id:"4",text:"4",ports:i("4")},{id:"5",text:"5",ports:i("5")},{id:"6",text:"6",ports:i("6")}]),[s,m]=f.useState([l("1","2"),l("2","3"),l("2","4"),l("2","5"),l("5","6")]);return o.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0},children:o.jsx(n,{nodes:r,edges:s,node:o.jsx(p,{dragType:"all"}),onNodeLinkCheck:(d,e,t)=>!(e.id===t.id||b(s,e,t)),onNodeLink:(d,e,t)=>{if(d.dragType==="node"){const a=j(r,s,e);m([...a.edges,l(t.id,e.id)])}else d.dragType==="port"&&m([...s,l(e.id,t.id)])}})})},y=()=>{const[r,g]=f.useState([{id:"1",text:"1"},{id:"2"},{id:"2-1-1",text:"2 > 1.1",parent:"2"},{id:"2-1-2",text:"2 > 1.2",parent:"2"},{id:"2-1-3",text:"2 > 1.3",parent:"2"},{id:"2-1-4",text:"2 > 1.4",parent:"2"},{id:"2-2-1",parent:"2"},{id:"2-2-1-1",text:"2 > 2.1 > 1.1",parent:"2-2-1"},{id:"3",text:"3"}]),[s,m]=f.useState([{id:"1-2",from:"1",to:"2"},{id:"2-1-1>2-1-2",from:"2-1-1",to:"2-1-2",parent:"2"},{id:"2-1-1>2-1-3",from:"2-1-1",to:"2-1-3",parent:"2"},{id:"2-1-2>2-2-1",from:"2-1-2",to:"2-2-1",parent:"2"},{id:"2-1-3>2-1-4",from:"2-1-3",to:"2-1-4",parent:"2"},{id:"2-3",from:"2",to:"3"}]);return o.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0},children:o.jsx(n,{nodes:r,edges:s,node:d=>{const t=r.filter(a=>a.parent&&a.parent===d.id).length>3;return o.jsx(p,{...d,dragType:"node",draggable:!t})},onNodeLinkCheck:(d,e,t)=>!(e.id===t.id||e.id===t.parent||b(s,t,e)),onNodeLink:(d,e,t)=>{const a=j(r,s,e);if((e.parent||t.parent)&&e.parent!==t.parent){const E=r.map(P=>P.id===e.id?{...P,parent:t.parent}:{...P});e.parent=t.parent,g(E)}m([...a.edges,D(t,e)])}})})},i=r=>[{id:`${r}-from`,width:10,height:10,side:"SOUTH"},{id:`${r}-to`,width:10,height:10,side:"NORTH"}],l=(r,g)=>({id:`${r}-${g}`,from:r,to:g,fromPort:`${r}-from`,toPort:`${g}-to`});var S,F,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => <div style={{
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}}>
    <Canvas nodes={[{
    id: '1',
    text: '1'
  }, {
    id: '2',
    text: '2'
  }]} edges={[{
    id: '1-2',
    from: '1',
    to: '2'
  }]} node={<Node dragCursor="grab" dragType="node" />} />
  </div>`,...(L=(F=c.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var T,C,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => <div style={{
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}}>
    <Canvas nodes={[{
    id: '1',
    text: '1',
    ports: makeFakePorts('1')
  }, {
    id: '2',
    text: '2',
    ports: makeFakePorts('2')
  }]} edges={[makeFakeEdgeWithPorts('1', '2')]} node={<Node dragType="port" />} />
  </div>`,...(_=(C=u.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var O,w,R;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`() => <div style={{
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}}>
    <Canvas nodes={[{
    id: '1',
    text: '1',
    ports: makeFakePorts('1')
  }, {
    id: '2',
    text: '2'
  }]} edges={[{
    id: '1-2',
    from: '1',
    to: '2'
  }]} node={<Node dragType="multiportOnly" />} />
  </div>`,...(R=(w=x.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var A,W,U;N.parameters={...N.parameters,docs:{...(A=N.parameters)==null?void 0:A.docs,source:{originalSource:`() => <div style={{
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}}>
    <Canvas nodes={[{
    id: '1',
    text: '1',
    ports: makeFakePorts('1')
  }, {
    id: '2',
    text: '2'
  }]} edges={[{
    id: '1-2',
    from: '1',
    to: '2'
  }]} node={<Node dragType="all" />} />
  </div>`,...(U=(W=N.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var $,M,H;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [nodes, setNodes] = useState<NodeData[]>([{
    id: '1',
    text: '1'
  }, {
    id: '2',
    text: '2'
  }, {
    id: '3',
    text: '3'
  }, {
    id: '4',
    text: '4'
  }, {
    id: '5',
    text: '5'
  }, {
    id: '6',
    text: '6'
  }]);
  const [edges, setEdges] = useState<EdgeData[]>([{
    id: '1-2',
    from: '1',
    to: '2'
  }, {
    id: '2-3',
    from: '2',
    to: '3'
  }, {
    id: '2-4',
    from: '2',
    to: '4'
  }, {
    id: '2-5',
    from: '2',
    to: '5'
  }, {
    id: '5-6',
    from: '5',
    to: '6'
  }]);
  return <div style={{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }}>
      <Canvas nodes={nodes} edges={edges} node={<Node dragType="node" />} onNodeLinkCheck={(_event, from: NodeData, to: NodeData) => {
      if (from.id === to.id) {
        return false;
      }
      if (hasLink(edges, from, to)) {
        return false;
      }
      return true;
    }} onNodeLink={(_event, from, to) => {
      const newEdges = edges.filter(e => e.to !== from.id);
      setEdges([...newEdges, createEdgeFromNodes(to, from)]);
    }} />
    </div>;
}`,...(H=(M=k.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var I,q,z;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [nodes, setNodes] = useState<NodeData[]>([{
    id: '1',
    text: '1'
  }, {
    id: '2',
    text: '2'
  }, {
    id: '3',
    text: '3'
  }, {
    id: '4',
    text: '4'
  }, {
    id: '5',
    text: '5'
  }, {
    id: '6',
    text: '6'
  }]);
  const [edges, setEdges] = useState<EdgeData[]>([{
    id: '1-2',
    from: '1',
    to: '2'
  }, {
    id: '2-3',
    from: '2',
    to: '3'
  }, {
    id: '2-4',
    from: '2',
    to: '4'
  }, {
    id: '2-5',
    from: '2',
    to: '5'
  }, {
    id: '5-6',
    from: '5',
    to: '6'
  }]);
  return <div style={{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }}>
      <Canvas nodes={nodes} edges={edges} node={<Node dragType="node" />} onNodeLinkCheck={(_event, from: NodeData, to: NodeData) => {
      if (from.id === to.id) {
        return false;
      }
      if (hasLink(edges, from, to)) {
        return false;
      }
      return true;
    }} onNodeLink={(_event, from, to) => {
      const result = removeAndUpsertNodes(nodes, edges, from);
      setEdges([...result.edges, createEdgeFromNodes(to, from)]);
    }} />
    </div>;
}`,...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var B,G,J;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [nodes, setNodes] = useState<NodeData[]>([{
    id: '1',
    text: '1',
    ports: makeFakePorts('1')
  }, {
    id: '2',
    text: '2',
    ports: makeFakePorts('2')
  }, {
    id: '3',
    text: '3',
    ports: makeFakePorts('3')
  }, {
    id: '4',
    text: '4',
    ports: makeFakePorts('4')
  }, {
    id: '5',
    text: '5',
    ports: makeFakePorts('5')
  }, {
    id: '6',
    text: '6',
    ports: makeFakePorts('6')
  }]);
  const [edges, setEdges] = useState<EdgeData[]>([makeFakeEdgeWithPorts('1', '2'), makeFakeEdgeWithPorts('2', '3'), makeFakeEdgeWithPorts('2', '4'), makeFakeEdgeWithPorts('2', '5'), makeFakeEdgeWithPorts('5', '6')]);
  return <div style={{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }}>
      <Canvas nodes={nodes} edges={edges} node={<Node dragType="all" />} onNodeLinkCheck={(_event, from: NodeData, to: NodeData) => {
      if (from.id === to.id) {
        return false;
      }
      if (hasLink(edges, from, to)) {
        return false;
      }
      return true;
    }} onNodeLink={(event, from, to) => {
      if (event.dragType === 'node') {
        // TODO: Need to make handle ports
        const result = removeAndUpsertNodes(nodes, edges, from);
        setEdges([...result.edges, makeFakeEdgeWithPorts(to.id, from.id)]);
      } else if (event.dragType === 'port') {
        setEdges([...edges, makeFakeEdgeWithPorts(from.id, to.id)]);
      }
    }} />
    </div>;
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,V;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [nodes, setNodes] = useState<NodeData[]>([{
    id: '1',
    text: '1'
  }, {
    id: '2'
  }, {
    id: '2-1-1',
    text: '2 > 1.1',
    parent: '2'
  }, {
    id: '2-1-2',
    text: '2 > 1.2',
    parent: '2'
  }, {
    id: '2-1-3',
    text: '2 > 1.3',
    parent: '2'
  }, {
    id: '2-1-4',
    text: '2 > 1.4',
    parent: '2'
  }, {
    id: '2-2-1',
    parent: '2'
  }, {
    id: '2-2-1-1',
    text: '2 > 2.1 > 1.1',
    parent: '2-2-1'
  }, {
    id: '3',
    text: '3'
  }]);
  const [edges, setEdges] = useState<EdgeData[]>([{
    id: '1-2',
    from: '1',
    to: '2'
  }, {
    id: '2-1-1>2-1-2',
    from: '2-1-1',
    to: '2-1-2',
    parent: '2'
  }, {
    id: '2-1-1>2-1-3',
    from: '2-1-1',
    to: '2-1-3',
    parent: '2'
  }, {
    id: '2-1-2>2-2-1',
    from: '2-1-2',
    to: '2-2-1',
    parent: '2'
  }, {
    id: '2-1-3>2-1-4',
    from: '2-1-3',
    to: '2-1-4',
    parent: '2'
  }, {
    id: '2-3',
    from: '2',
    to: '3'
  }]);
  return <div style={{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }}>
      <Canvas nodes={nodes} edges={edges} node={(node: NodeProps) => {
      // Prevent parent nodes with large number of children from dragging, but allow children to drag
      const children = nodes.filter(n => n.parent && n.parent === node.id);
      const notDraggable = children.length > 3;
      return <Node {...node} dragType="node" draggable={!notDraggable} />;
    }} onNodeLinkCheck={(_event, from: NodeData, to: NodeData) => {
      if (from.id === to.id) {
        return false;
      }
      if (from.id === to.parent) {
        return false;
      }
      if (hasLink(edges, to, from)) {
        return false;
      }
      return true;
    }} onNodeLink={(_event, from, to) => {
      const result = removeAndUpsertNodes(nodes, edges, from);

      // Update parents
      if ((from.parent || to.parent) && from.parent !== to.parent) {
        const newNodes = nodes.map(n => n.id === from.id ? {
          ...n,
          parent: to.parent
        } : {
          ...n
        });
        from.parent = to.parent;
        setNodes(newNodes);
      }
      setEdges([...result.edges, createEdgeFromNodes(to, from)]);
    }} />
    </div>;
}`,...(V=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const ce=["NodeOnlyDrag","PortOnlyDrag","MultiPortOnlyDrag","AllDrag","NodeRearranging","NodeRearrangingUpsert","NodePortRearranging","NestedNodeRearranging"];export{N as AllDrag,x as MultiPortOnlyDrag,y as NestedNodeRearranging,c as NodeOnlyDrag,v as NodePortRearranging,k as NodeRearranging,h as NodeRearrangingUpsert,u as PortOnlyDrag,ce as __namedExportsOrder,fe as default};
//# sourceMappingURL=Drag.stories-e77ce5ab.js.map
