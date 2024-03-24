"use client"
import { useState, useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
];

const initialEdges = [];
import Component from "@/components/Footer";
import { NavigationMenuDemo } from "@/components/Navbar";
import { CarouselProgressBar } from "@/components/carousel-progress-bar";

import { ModeToggle } from "@/components/toggletheme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";

import React from "react";

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );
  return (
    <div>
    <div className="p-2 "> 
    <div className="p-1  flex justify-between  w-full rounded-lg shadow-lg top-3 dark:bg-slate-900">
    <div>
    <NavigationMenuDemo/>
    </div>
     
      <div className="flex items-start">
      <ModeToggle />
 
      <div   className="px-2 ">
        <Link href={"/board"}><Avatar className="w-8 h-8" >
  <AvatarImage  src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar></Link>
      

      </div>
     

     
      </div>

    </div>
    <CarouselProgressBar/>
    <div></div><div className="max-w-7xl mx-auto py-6 ">

<div className=" rounded-lg shadow-lg overflow-hidden dark:bg-gray-900">
    <div className="px-6 py-8 sm:p-10">
        <h1 className="text-3xl font-bold  mb-2">Welcome to Flow</h1>
        <p className="text-lg  mb-6">Flow is your all-in-one solution for creating flowcharts, workflows, and more. With features like progress settings, theming, and graph view, it's easier than ever to visualize your ideas and processes.</p>
        <Link href="/board" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded">Go to the Board</Link>
    </div>
</div>

<div id="learn-more" className="mt-8  pb-16 flex items-center justify-between w-full">
    <div className=" rounded-lg shadow-lg overflow-hidden w-full  flex items-center justify-between  dark:bg-gray-900 ">
        <div className=" hidden md:block px-6 py-8 sm:p-10">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="text-lg mb-6 list-disc list-inside">
                <li>Progress Settings</li>
                <li>Zoom Options</li>
                <li>Graph View</li>
            </ul>
            <Link href="#contact-us" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded">Contact Us</Link>
        </div>
        <div className="w-full md:w-1/2 h-full">
    <div className="w-full h-full dark:bg-slate-800">  <div style={{ height: '30vh', display: 'flex', flexDirection: 'column' }}>
    <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div></div>
  </div>
    </div>
</div>

<div id="contact-us" className="mt-8 pb-16 flex items-center justify-between w-full ">
  <div className=" rounded-lg shadow-lg overflow-hidden w-full  flex items-center justify-between dark:bg-gray-900">
    <div className="px-6 py-8 sm:p-10">
      <h2 className="text-2xl font-bold  mb-4">Contact Us</h2>
      <p className="text-lg mb-4">If you have any questions or feedback, feel free to reach out to us.</p>
      <p className="text-lg  mb-6">Email: info@flow.com</p>
    </div>
    
  </div>
 
</div>

</div></div><Component/></div>
  );
}

export default Flow;
