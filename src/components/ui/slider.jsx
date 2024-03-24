"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef(({ className,onValueChange, ...props }, ref) => {
  
  const handleChange = (newValue) => {
    if (onValueChange) {
      onValueChange(newValue);
    }
  };
  return (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center ")}
    {...props}
    onValueChange={handleChange}
    >
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range  style={{backgroundColor: `${className}`}} className={`absolute h-full bg-primary bg-gradient-to-b`} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn("block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50")} />
  </SliderPrimitive.Root>
)})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
