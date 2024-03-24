import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const components = [
  {
    title: "Github",
    href: "/docs/primitives/alert-dialog",
    description:
      "Source Code",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/k-eswar-ashish-a91947205/",
    description:
      "Professional Profile",
  },
  {
    title: "Resume",
    href: "https://drive.google.com/file/d/1LcWYWXYmfYM5WSfrF4LQNRFk7Ybxo9wn/view?usp=sharing",
    description:
      "View skills and Info",
  },
 
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="flex justify-between"> 
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" dark:bg-slate-900">Libraries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]  dark:bg-slate-900">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="https://ui.shadcn.com/"
                  >
                  
                    <div className="flex mb-2 mt-4 text-lg font-medium">
                    <img className=" py-1" width={24} src={"https://avatars.githubusercontent.com/u/139895814?s=280&v=4"} /> <div className="pl-2">shadcn/ui</div>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem  href="https://reactflow.dev/" title="Reactflow">
               <img className="p-1" width={30} src="https://github.com/wbkd.png" alt="Reactflow Logo" />Highly customizable React library for workflow builders, no-code apps, image processing, visualizers, and more.
              </ListItem>
              <ListItem href="https://recoiljs.org/" title="Recoil">
              <img className="p-1" width={26} src="https://cdn.worldvectorlogo.com/logos/recoil-js.svg" alt="Recoil Logo" />Recoil is an experimental state management library and It provides several capabilities that are difficult to achieve with React alone.        </ListItem>
              <ListItem href="https://www.radix-ui.com/" title="Radix UI">
               <img className="p-1" width={26} src="https://avatars.githubusercontent.com/u/75042455?s=280&v=4" alt="Radix ui Logo" />Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" dark:bg-slate-900" >Links</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]  dark:bg-slate-900 ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <Link href="https://docs.google.com/document/d/1dQJLU529rLmAP3t5zKDVAU-2PXNvN5bJS-vlwMCzRgE/edit?usp=sharing" legacyBehavior passHref >
            <NavigationMenuLink className={navigationMenuTriggerStyle()+ " dark:bg-slate-900"}>
              Info
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
    
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
