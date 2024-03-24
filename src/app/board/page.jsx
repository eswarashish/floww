"use client"
import Custommenu from '@/components/Custommenu';
import Customnode from '@/components/Customnode';
import Customstart from '@/components/Customstart';
import Customend from '@/components/Customend';
import { selectedNodeIdState } from '@/state/select';
import { selectedStyle } from '@/state/style';
import React, { useCallback, useRef } from 'react';

import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  updateEdge,
  
  MiniMap,
  ControlButton,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import Line from '@/components/Line';
import initialNodes from '@/lib/intnodes';
import initialEdges from '@/lib/intedges';
import { BreadcrumbDemo } from '@/components/boardnav';


const nodeTypes = {custom: Customnode,star:Customstart,end:Customend}

let id = initialNodes.length+1;
if(initialNodes.length==0){
  id=1
}
const getId = () => `${id}`;

const AddNodeOnEdgeDrop = () => {
  const [selectedNodeId, setSelectedNodeId] = useRecoilState(selectedNodeIdState);
  const selectedstyle = useRecoilValue(selectedStyle);
  const edgeUpdateSuccessful = useRef(true);
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();
  const aniM = (eds)=>{
    
    eds[eds.length-1].animated = true;
    return eds
  }
  const onConnect = useCallback(
    (params) => {
      
      connectingNodeId.current = null;
      setEdges((eds) => aniM(addEdge(params,eds)))
      
    },
    [],
  );
  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  const onAddNodeButtonClick = useCallback(() => {
    let x = selectedstyle.value;
    if(!selectedstyle.value){
      x= 'custom'
    }
    const range = 400; // Adjust this value based on how far you want the coordinates to be from each other
  const minX = 150; // Minimum value for x coordinate
  const minY = 150; // Minimum value for y coordinate

  // Generate random coordinates within the range
  const randomX = Math.random() * range + minX;
  const randomY = Math.random() * range + minY;
    ///panel at top
    const newNode = {
      
      id: getId(),
      position: screenToFlowPosition({
        x: randomX, // You can adjust these coordinates as needed
        y: randomY, // You can adjust these coordinates as needed
      }),
      data: { label: `${id}`, key:id },
      type: x,
      
      
    };
    id++;
    setNodes((prevNodes) => prevNodes.concat(newNode));
  }, [screenToFlowPosition, selectedstyle]);

  const deleteSelectedNode = useCallback(() => {
    
    if (selectedNodeId) {
      // Remove the selected node from the nodes list
      setNodes((prevNodes) =>
        prevNodes.filter((node) => node.data.key !== selectedNodeId)
      );
  
      // Remove edges connected to the selected node from the edges list
      setEdges((prevEdges) =>
        prevEdges.filter(
          (edge) => edge.source !== selectedNodeId 
        )
      );
      setSelectedNodeId(null);
    }
  }, [selectedNodeId, setNodes, setEdges, setSelectedNodeId]);
  
  
 
  return (<>
   
    <div className="wrapper" ref={reactFlowWrapper} style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
   <div className="absolute top-3 z-10 right-14 rounded-lg bg-white  dark:bg-slate-700 dark:border-slate-800 "><Custommenu/></div>
      <ReactFlow
     nodes={nodes}
     edges={edges}
     onNodesChange={onNodesChange}
     onEdgesChange={onEdgesChange}
     snapToGrid
     onEdgeUpdate={onEdgeUpdate}
     onEdgeUpdateStart={onEdgeUpdateStart}
     onEdgeUpdateEnd={onEdgeUpdateEnd}
     onConnect={onConnect}
     connectionLineComponent={Line}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
        nodeTypes={nodeTypes}
        
      >
        <div className="absolute top-3 z-10 left-5 bg-white p-2 border-slate-200 rounded-lg border dark:bg-slate-700 dark:border-slate-800 "><BreadcrumbDemo/></div>
           <MiniMap nodeStrokeWidth={3} position='bottom-left' className=' dark:bg-slate-700 dark:border-slate-800 '/>
        <Background />
        <Controls position='top-right' className='rounded-lg dark:hover:bg-slate-800 dark:bg-slate-700 dark:border-slate-800 '>
        <ControlButton className=' dark:bg-slate-700 dark:border-slate-800 dark:hover:bg-slate-800' onClick={onAddNodeButtonClick}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></ControlButton>
        <ControlButton className=' dark:bg-slate-700 dark:border-slate-800 dark:hover:bg-slate-800' onClick={deleteSelectedNode}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM4.50003 7C4.22389 7 4.00003 7.22386 4.00003 7.5C4.00003 7.77614 4.22389 8 4.50003 8H10.5C10.7762 8 11 7.77614 11 7.5C11 7.22386 10.7762 7 10.5 7H4.50003Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></ControlButton>
        </Controls>
          </ReactFlow>
    </div></>
  );
};

export default () => (
  <RecoilRoot>
  <ReactFlowProvider>
    <AddNodeOnEdgeDrop />
  </ReactFlowProvider></RecoilRoot>
);