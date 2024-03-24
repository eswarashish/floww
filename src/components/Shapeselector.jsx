"use client"

import * as React from "react"
import { selectedStyle } from "@/state/style"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {useRecoilState } from "recoil"




export function ComboboxPopover() {
  const [open, setOpen] = React.useState(false)
  const [selectedStatus, setStatus] = useRecoilState(selectedStyle)

   
  return (
    <div className="flex items-center space-x-4">
      <p className="text-sm text-muted-foreground">Nodes</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus.label ? <>{selectedStatus.label}</> : <>Select a type</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
              <CommandItem
                    
                    onSelect={() => {
                      setStatus({value: "star",
                    label: "Start Node"})
                      
                      setOpen(false)
                      
                    }}
                  >
                    Start node
                  </CommandItem>
                  <CommandItem
                    
                    onSelect={() => {
                        setStatus({value: "custom",
                        label: "Middle Node"})
                      setOpen(false)
                      
                    }}
                  >
                    Middle node
                  </CommandItem>
                  <CommandItem
                    
                    onSelect={() => {
                        setStatus({value: "end",
                        label: "End Node"})
                      setOpen(false)
                      
                    }}
                  >
                    End node
                  </CommandItem>
                
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

