import React from 'react'
import { Checkbox } from './ui/checkbox'

const List = () => {
  return (
    <div className="flex items-center space-x-2">
    <Checkbox id="phase 1" />
    <label
      htmlFor="terms"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Phase 1
    </label>
    <Checkbox id="phase 2" />
    <label
      htmlFor="terms"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Phase 2
    </label>
    <Checkbox id="phase 3" />
    <label
      htmlFor="terms"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Phase 3
    </label>
  </div>
  )
}

export default List
