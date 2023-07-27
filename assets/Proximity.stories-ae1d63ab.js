import{j as i}from"./jsx-runtime-9c4ae004.js";import{r as s}from"./index-1b03fe98.js";import{g as Y,d as R,C as P,N as I,E as G,M as H,a as J,I as K,L as U,P as V,R as Z,A as ee,m as y,e as W,c as _}from"./Icon-f01dccc9.js";import{I as te}from"./IntersectionQuery-4df33463.js";import{a as q}from"./crudHelpers-031fd461.js";import{u as O}from"./use-drag-controls-d72ca1c6.js";import"./index-6fd5a17b.js";import"./_commonjs-dynamic-modules-302442b1.js";const Q=(r,t)=>{var l;const a=[];if(r!=null&&r.length)for(const n of r){let d=n.x,u=n.y;t&&(d=t.x+d,u=t.y+u);const g=[new R(d,u),new R(d+n.width,u+n.height)];a.push({points:g,node:n}),(l=n.children)!=null&&l.length&&a.push(...Q(n.children,n))}return a},oe=(r,t)=>{const[a,l]=t.points;let n=0,d=0;return r.x<a.x?n=a.x-r.x:r.x>l.x&&(n=l.x-r.x),r.y<a.y?d=a.y-r.y:r.y>l.y&&(d=l.y-r.y),Math.floor(Math.sqrt(n*n+d*d))},ne=(r,t,a,l)=>{const n=[],d=new R(r.x,r.y).transform(t);for(const c of a){const h=te.pointInRectangle(d,c.points[0],c.points[1]),f=oe(d,c);n.push({node:c.node,minDist:f,intersects:h})}let u=l,g=null,m=null;for(const c of n)c.minDist<u&&!c.intersects&&(m=c.node.id,u=c.minDist),c.intersects&&(g=c.node.id);return g&&(!m||m===g)&&(m=g,u=0),{intersectedNodeId:g,foundNodeId:m,foundDist:u}},X=({canvasRef:r,disabled:t,minDistance:a=40,...l})=>{const n=s.useRef(null),d=s.useRef(null),u=s.useRef(null),g=s.useRef(0),m=s.useRef(l);s.useEffect(()=>{m.current=l},[l]);const[c,h]=s.useState(null),[f,D]=s.useState(null),[b,v]=s.useState(null),x=s.useCallback(()=>{if(t)return;const e=r.current;D(Y({containerRef:e.containerRef,zoom:e.zoom,layoutXY:e.xy})),v(Q(e.layout.children))},[t]),N=s.useCallback(e=>{if(!f||t)return;const{onMatchChange:o,onIntersects:p,onDistanceChange:A}=m.current,{intersectedNodeId:C,foundNodeId:w,foundDist:j}=ne(e,f,b,a),M=j!==a?j:null;w!==d.current&&(o==null||o(w,j)),C!==n.current&&(p==null||p(C)),A&&M!==u.current&&(cancelAnimationFrame(g.current),g.current=requestAnimationFrame(()=>{A(M)})),n.current=C,d.current=w,u.current=M,h(w)},[f,t,a,b]);s.useEffect(()=>()=>cancelAnimationFrame(g.current));const k=s.useCallback(()=>{t||(h(null),D(null),v(null))},[t]);return{match:c,onDragStart:x,onDrag:N,onDragEnd:k}},ue={title:"Demos/Proximity",component:P,subcomponents:{Node:I,Edge:G,MarkerArrow:H,Arrow:J,Icon:K,Label:U,Port:V,Remove:Z,Add:ee}},S=()=>{const r=O(),[t,a]=s.useState(null),[l,n]=s.useState(null),[d,u]=s.useState(!1),[g,m]=s.useState([{id:"1-2",from:"1",to:"2"}]),[c,h]=s.useState([{id:"1",text:"1"},{id:"2",text:"2"}]),f=s.useRef(null),{onDragStart:D,onDrag:b,onDragEnd:v}=X({canvasRef:f,onIntersects:e=>{console.info("Node Intersected",e)},onDistanceChange:e=>{console.info("Distance Changed",e)},onMatchChange:e=>{console.info("Match Changed!",e);let o=null;e&&(o=c.find(p=>p.id===e)),a(o),u(o!==null)}}),x=(e,o)=>{console.info("Start of Dragging",e,o),D(e),n(o),r.start(e,{snapToCursor:!0})},N=e=>{b(e)},k=e=>{if(v(e),d){const o=`${l}-${Math.floor(Math.random()*100)+1}`,p=q(c,g,{id:o,text:o},t);h(p.nodes),m(p.edges)}u(!1),n(null),a(null)};return i.jsxs("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0},children:[i.jsx("style",{children:`
          .left {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 150px;
            background: #272626;
            color: white;
            padding: 20px;
            display: flex;
          }
          .right {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 150px;
            right: 0;
          }
          .block {
            height: 50px;
            width: 50px;
            cursor: grab;
            background: black;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            flex: 1;
          }
          .closest {
            stroke: yellow !important;
          }
          .dragger {
            z-index: 999;
            pointer-events: none;
            user-select: none;
            cursor: grabbing;
            height: 70px;
            width: 150px;
          }
          .dragInner {
            pointer-events: none;
            margin-left: 80px;
            border-radius: 5px;
            background: black;
            border: solid 1px #00c5be;
            height: 40px;
            width: 40px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}),i.jsxs("div",{className:"left",children:[i.jsx(y.div,{className:"block",onMouseDown:e=>x(e,"1"),children:"Block 1"}),i.jsx(y.div,{className:"block",onMouseDown:e=>x(e,"2"),children:"Block 2"})]}),i.jsx("div",{className:"right",children:i.jsx(P,{ref:f,nodes:c,edges:g,node:e=>i.jsx(I,{...e,style:{strokeWidth:(t==null?void 0:t.id)===e.id&&d?5:1},className:W({closest:(t==null?void 0:t.id)===e.id}),onEnter:(o,p)=>a(p),onLeave:(o,p)=>a(null)}),onLayoutChange:e=>console.info("Layout",e)})}),i.jsx(_,{children:i.jsx(y.div,{drag:!0,dragControls:r,className:"dragger",onDrag:N,onDragEnd:k,children:l&&i.jsx("div",{className:"dragInner",children:l})})})]})},E=()=>{const r=O(),[t,a]=s.useState(null),[l,n]=s.useState(null),[d,u]=s.useState(!1),[g,m]=s.useState([{id:"1",text:"1"},{id:"2"},{id:"2-1-1",text:"2 > 2.1",parent:"2"},{id:"3",text:"3"}]),[c,h]=s.useState([{id:"1-2",from:"1",to:"2"},{id:"2-3",from:"2",to:"3"}]),f=s.useRef(null),{onDragStart:D,onDrag:b,onDragEnd:v}=X({canvasRef:f,onDistanceChange:e=>{console.info("Distance Changed",e)},onIntersects:e=>{console.info("Node Intersected",e)},onMatchChange:e=>{console.info("Match Changed!",e);let o=null;e&&(o=g.find(p=>p.id===e)),a(o),u(o!==null)}}),x=(e,o)=>{console.info("Start of Dragging",e,o),D(e),n(o),r.start(e,{snapToCursor:!0})},N=e=>{b(e)},k=e=>{if(v(e),d){const o=`${l}-${Math.floor(Math.random()*100)+1}`;if((t==null?void 0:t.id)==="2")m([...g,{id:o,text:o,parent:"2"}]);else{const p=q(g,c,{id:o,text:o,parent:t==null?void 0:t.parent},t);m(p.nodes),h(p.edges)}}u(!1),n(null),a(null)};return i.jsxs("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0},children:[i.jsx("style",{children:`
          .left {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 150px;
            background: #272626;
            color: white;
            padding: 20px;
            display: flex;
          }
          .right {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 150px;
            right: 0;
          }
          .block {
            height: 50px;
            width: 50px;
            cursor: grab;
            background: black;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            flex: 1;
          }
          .closest {
            stroke: yellow !important;
          }
          .dragger {
            z-index: 999;
            pointer-events: none;
            user-select: none;
            cursor: grabbing;
            height: 70px;
            width: 150px;
          }
          .dragInner {
            pointer-events: none;
            margin-left: 80px;
            border-radius: 5px;
            background: black;
            border: solid 1px #00c5be;
            height: 40px;
            width: 40px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}),i.jsxs("div",{className:"left",children:[i.jsx(y.div,{className:"block",onMouseDown:e=>x(e,"1"),children:"Block 1"}),i.jsx(y.div,{className:"block",onMouseDown:e=>x(e,"2"),children:"Block 2"})]}),i.jsx("div",{className:"right",children:i.jsx(P,{ref:f,nodes:g,edges:c,node:e=>i.jsx(I,{...e,style:{strokeWidth:(t==null?void 0:t.id)===e.id&&d?5:1},className:W({closest:(t==null?void 0:t.id)===e.id})}),onLayoutChange:e=>console.info("Layout",e)})}),i.jsx(_,{children:i.jsx(y.div,{drag:!0,dragControls:r,className:"dragger",onDrag:N,onDragEnd:k,children:l&&i.jsx("div",{className:"dragInner",children:l})})})]})};var L,z,B;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const dragControls = useDragControls();
  const [enteredNode, setEnteredNode] = useState<NodeData | null>(null);
  const [activeDrag, setActiveDrag] = useState<string | null>(null);
  const [droppable, setDroppable] = useState<boolean>(false);
  const [edges, setEdges] = useState<EdgeData[]>([{
    id: '1-2',
    from: '1',
    to: '2'
  }]);
  const [nodes, setNodes] = useState<NodeData[]>([{
    id: '1',
    text: '1'
  }, {
    id: '2',
    text: '2'
  }]);
  const canvasRef = useRef<CanvasRef | null>(null);
  const {
    onDragStart: onProximityDragStart,
    onDrag: onProximityDrag,
    onDragEnd: onProximityDragEnd
  } = useProximity({
    canvasRef,
    onIntersects: (match: string) => {
      console.info('Node Intersected', match);
    },
    onDistanceChange: (distance: number | null) => {
      console.info('Distance Changed', distance);
    },
    onMatchChange: (match: string | null) => {
      console.info('Match Changed!', match);
      let matchNode: NodeData | null = null;
      if (match) {
        matchNode = nodes.find(n => n.id === match);
      }
      setEnteredNode(matchNode);
      setDroppable(matchNode !== null);
    }
  });
  const onDragStart = (event, data) => {
    console.info('Start of Dragging', event, data);
    onProximityDragStart(event);
    setActiveDrag(data);
    dragControls.start(event, {
      snapToCursor: true
    });
  };
  const onDrag = event => {
    onProximityDrag(event);
  };
  const onDragEnd = event => {
    onProximityDragEnd(event);
    if (droppable) {
      const id = \`\${activeDrag}-\${Math.floor(Math.random() * (100 - 1 + 1)) + 1}\`;
      const result = addNodeAndEdge(nodes, edges, {
        id,
        text: id
      }, enteredNode);
      setNodes(result.nodes);
      setEdges(result.edges);
    }
    setDroppable(false);
    setActiveDrag(null);
    setEnteredNode(null);
  };
  return <div style={{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }}>
      <style>
        {\`
          .left {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 150px;
            background: #272626;
            color: white;
            padding: 20px;
            display: flex;
          }
          .right {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 150px;
            right: 0;
          }
          .block {
            height: 50px;
            width: 50px;
            cursor: grab;
            background: black;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            flex: 1;
          }
          .closest {
            stroke: yellow !important;
          }
          .dragger {
            z-index: 999;
            pointer-events: none;
            user-select: none;
            cursor: grabbing;
            height: 70px;
            width: 150px;
          }
          .dragInner {
            pointer-events: none;
            margin-left: 80px;
            border-radius: 5px;
            background: black;
            border: solid 1px #00c5be;
            height: 40px;
            width: 40px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        \`}
      </style>
      <div className="left">
        <motion.div className="block" onMouseDown={event => onDragStart(event, '1')}>
          Block 1
        </motion.div>
        <motion.div className="block" onMouseDown={event => onDragStart(event, '2')}>
          Block 2
        </motion.div>
      </div>
      <div className="right">
        <Canvas ref={canvasRef} nodes={nodes} edges={edges} node={n => <Node {...n} style={{
        strokeWidth: enteredNode?.id === n.id && droppable ? 5 : 1
      }} className={classNames({
        closest: enteredNode?.id === n.id
      })} onEnter={(event, node) => setEnteredNode(node)} onLeave={(event, node) => setEnteredNode(null)} />} onLayoutChange={layout => console.info('Layout', layout)} />
      </div>
      <Portal>
        <motion.div drag dragControls={dragControls} className="dragger" onDrag={onDrag} onDragEnd={onDragEnd}>
          {activeDrag && <div className="dragInner">
              {activeDrag}
            </div>}
        </motion.div>
      </Portal>
    </div>;
}`,...(B=(z=S.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var $,T,F;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const dragControls = useDragControls();
  const [enteredNode, setEnteredNode] = useState<NodeData | null>(null);
  const [activeDrag, setActiveDrag] = useState<string | null>(null);
  const [droppable, setDroppable] = useState<boolean>(false);
  const [nodes, setNodes] = useState<NodeData[]>([{
    id: '1',
    text: '1'
  }, {
    id: '2'
  }, {
    id: '2-1-1',
    text: '2 > 2.1',
    parent: '2'
  }, {
    id: '3',
    text: '3'
  }]);
  const [edges, setEdges] = useState<EdgeData[]>([{
    id: '1-2',
    from: '1',
    to: '2'
  }, {
    id: '2-3',
    from: '2',
    to: '3'
  }]);
  const canvasRef = useRef<CanvasRef | null>(null);
  const {
    onDragStart: onProximityDragStart,
    onDrag: onProximityDrag,
    onDragEnd: onProximityDragEnd
  } = useProximity({
    canvasRef,
    onDistanceChange: (distance: number | null) => {
      console.info('Distance Changed', distance);
    },
    onIntersects: (match: string) => {
      console.info('Node Intersected', match);
    },
    onMatchChange: (match: string | null) => {
      console.info('Match Changed!', match);
      let matchNode: NodeData | null = null;
      if (match) {
        matchNode = nodes.find(n => n.id === match);
      }
      setEnteredNode(matchNode);
      setDroppable(matchNode !== null);
    }
  });
  const onDragStart = (event, data) => {
    console.info('Start of Dragging', event, data);
    onProximityDragStart(event);
    setActiveDrag(data);
    dragControls.start(event, {
      snapToCursor: true
    });
  };
  const onDrag = event => {
    onProximityDrag(event);
  };
  const onDragEnd = event => {
    onProximityDragEnd(event);
    if (droppable) {
      const id = \`\${activeDrag}-\${Math.floor(Math.random() * (100 - 1 + 1)) + 1}\`;

      // This is for demonstration purposes, you should
      // tweak this to fit your business infoic
      if (enteredNode?.id === '2') {
        setNodes([...nodes, {
          id,
          text: id,
          parent: '2'
        }]);
      } else {
        const result = addNodeAndEdge(nodes, edges, {
          id,
          text: id,
          parent: enteredNode?.parent
        }, enteredNode);
        setNodes(result.nodes);
        setEdges(result.edges);
      }
    }
    setDroppable(false);
    setActiveDrag(null);
    setEnteredNode(null);
  };
  return <div style={{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }}>
      <style>
        {\`
          .left {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 150px;
            background: #272626;
            color: white;
            padding: 20px;
            display: flex;
          }
          .right {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 150px;
            right: 0;
          }
          .block {
            height: 50px;
            width: 50px;
            cursor: grab;
            background: black;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            flex: 1;
          }
          .closest {
            stroke: yellow !important;
          }
          .dragger {
            z-index: 999;
            pointer-events: none;
            user-select: none;
            cursor: grabbing;
            height: 70px;
            width: 150px;
          }
          .dragInner {
            pointer-events: none;
            margin-left: 80px;
            border-radius: 5px;
            background: black;
            border: solid 1px #00c5be;
            height: 40px;
            width: 40px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        \`}
      </style>
      <div className="left">
        <motion.div className="block" onMouseDown={event => onDragStart(event, '1')}>
          Block 1
        </motion.div>
        <motion.div className="block" onMouseDown={event => onDragStart(event, '2')}>
          Block 2
        </motion.div>
      </div>
      <div className="right">
        <Canvas ref={canvasRef} nodes={nodes} edges={edges} node={n => <Node {...n} style={{
        strokeWidth: enteredNode?.id === n.id && droppable ? 5 : 1
      }} className={classNames({
        closest: enteredNode?.id === n.id
      })} />} onLayoutChange={layout => console.info('Layout', layout)} />
      </div>
      <Portal>
        <motion.div drag dragControls={dragControls} className="dragger" onDrag={onDrag} onDragEnd={onDragEnd}>
          {activeDrag && <div className="dragInner">
              {activeDrag}
            </div>}
        </motion.div>
      </Portal>
    </div>;
}`,...(F=(T=E.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const pe=["Simple","Nested"];export{E as Nested,S as Simple,pe as __namedExportsOrder,ue as default};
//# sourceMappingURL=Proximity.stories-ae1d63ab.js.map
