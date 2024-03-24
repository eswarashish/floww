import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";

const ColorPicker = ({ onChange  }) => {
    // Simulated color picker functionality
    const handleChange = (e) => {
      onChange(e.target.value); // Pass selected color to parent component
    };
  
    return (
      <DropdownMenu >
  <DropdownMenuTrigger className="p-2 shadow-md rounded-lg">Theme</DropdownMenuTrigger>
  <DropdownMenuContent>
        <button value="red" onClick={handleChange} className="p-2">Red</button>
<button value="blue" className="p-2" onClick={handleChange}>Blue</button>
<button value="green" className="p-2" onClick={handleChange}>Green</button>
<button value="yellow" className="p-2" onClick={handleChange}>Yellow</button>
<button value="orange" className="p-2" onClick={handleChange}>Orange</button>
<button value="purple" className="p-2" onClick={handleChange}>Purple</button>
<button value="teal" className="p-2" onClick={handleChange}>Teal</button>
<button value="cyan" className="p-2" onClick={handleChange}>Cyan</button>
<button value="lime" className="p-2" onClick={handleChange}>Lime</button>
<button value="indigo" className="p-2" onClick={handleChange}>Indigo</button>
<button value="violet" className="p-2" onClick={handleChange}>Violet</button>
<button value="gray" className="p-2" onClick={handleChange}>Gray</button>
</DropdownMenuContent>
        {/* Add more color options as needed */}
      </DropdownMenu>
    );
  };

  export default ColorPicker