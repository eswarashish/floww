import { selectedNodeIdState } from '@/state/select';
import { useCallback, useState } from 'react';
import { Handle, Position,NodeResizer } from 'reactflow';
import { RecoilRoot, useRecoilState} from 'recoil';
import { Overview } from './Graphview';
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input";
import { DatePickerWithRange } from './Range';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
import List from './List';
import { Button } from './ui/button';
import { Slider } from "@/components/ui/slider"
import Colorpicker from './Colorpicker';
const DEFAULT_HANDLE_STYLE = {
    width: 10,
    height: 10,
    bottom: -5,
  };
function getRandomColor() {
   
  const r = Math.floor(Math.random() * 200); 
  const g = Math.floor(Math.random() * 200);
  const b = Math.floor(Math.random() * 200);
 const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

  return color;
}
const Customend = ({ data, isConnectable, selected }) => {
    let x =data.name
    let  y =data.progress;
    let z = data.color;
    if(z===undefined){
        z = 'gray'
    }
    if(y===undefined){
    y= 33
    }
  const [selectedNodeId, setSelectedNodeId] = useRecoilState(selectedNodeIdState);
  const [name,setName] = useState(x)
  const [progress,setProgress] = useState(y)
  const [colorGradient, setColorGradient] = useState(z);

  const handleNodeClick = useCallback(() => {
   
     
      setSelectedNodeId(data.key);
  }, [data.key, setSelectedNodeId]);

  // Function to handle color change
  const handleColorChange = (color) => {
      setColorGradient(color);
  };

  return (
      <RecoilRoot> 
        <NodeResizer color={getRandomColor()} isVisible={selected} minWidth={100} minHeight={70} />
          <div onClick={handleNodeClick} className={`relative w-full h-full bg-gradient-to-b from-${colorGradient}-500 to-${colorGradient}-700 border border-gray-300 rounded-lg  text-gray-800 min-h-24 min-w-24 shadow-lg overflow-hidden`}>
              <Handle  id="black" type='target' position={Position.Left} isConnectable={isConnectable}   style={{ ...DEFAULT_HANDLE_STYLE,  background: `${colorGradient}` }}/>
              <div className="grid place-items-center h-full text-xxl ">
               <Progress value={progress} className="grid place-items-center h-2 w-4/5 "/>
               <HoverCard>
  <HoverCardTrigger className='p-4 top-6 text-2xl dark:text-white'>{name}<HoverCardContent className="grid place-items-center w-96 shadow-lg border-slate-200">
  <Overview className={`${colorGradient}`}/>
  <List/>
  </HoverCardContent>
  </HoverCardTrigger>
</HoverCard>
  
              <Drawer>
  <DrawerTrigger className='text-xl items-center relative bottom-2  dark:text-white'>
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 11.0001V4.00006L1 4.00006L1 11.0001H14ZM15 
  4.00006V11.0001C15 11.5523 14.5523 12.0001 14 12.0001H1C0.447715 
  12.0001 0 11.5523 0 11.0001V4.00006C0 3.44778 0.447715 3.00006 1 
  3.00006H14C14.5523 3.00006 15 3.44778 15 4.00006ZM2 5.25C2 5.11193 2.11193 5 2.25 5H5.75C5.88807 5 6 
  5.11193 6 5.25V9.75C6 9.88807 
  5.88807 10 5.75 10H2.25C2.11193 
  10 2 9.88807 2 9.75V5.25ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 
  8 7.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H7.5ZM7 
  9.5C7 9.22386 7.22386 9 7.5 9H12.5C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H7.5C7.22386 10 7 9.77614 7 9.5ZM7.5 5C7.22386 5 7 5.22386 7 5.5C7 5.77614 7.22386 6 7.5 6H11.5C11.7761 6 12 5.77614 12 5.5C12 5.22386 11.7761 5 11.5 5H7.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Enter the details</DrawerTitle>
      <DrawerDescription><Input   type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter the title"/>
      <div className='p-4 text-xl '>Time Span</div>
      <DatePickerWithRange/>
      <div className='p-4 text-xl '>Progress</div>
      <Slider defaultValue={[y]} max={100} step={1} onValueChange={(value)=>{setProgress(value)}} className={`${colorGradient}`}/>
      <br /><Colorpicker onChange={handleColorChange} />
</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer> 
</div>

 </div>
  
      </RecoilRoot>
  );
}

export default Customend;
