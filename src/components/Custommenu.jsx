import React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ComboboxPopover } from './Shapeselector';
import { ModeToggle } from '@/components/toggletheme';
const Custommenu = () => {


  return (
    <div className=' bg-white  dark:bg-slate-700 dark:border-slate-800 rounded-lg'>
      <Menubar className=" dark:bg-slate-700 dark:border-slate-800 rounded-lg " >
 <MenubarMenu ><ModeToggle/></MenubarMenu>
        <MenubarMenu >
          <MenubarTrigger >Types</MenubarTrigger>
          <MenubarContent>
              <ComboboxPopover/>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent className=" ">
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Custommenu;
