import { useState } from "react";

const CustomSelect = ({ 
  options = [
    { label: "English", value: "Eng",  }, 
    { label: "Germany", value: "Ger" }, 
    { label: "Russian", value: "Rus" }, 
    { label: "Spanish", value: "spain" }
  ], 
  handleSelect 
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]); // Default to first option

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (handleSelect) {
      handleSelect(option.value); // Ensure we pass the correct value
    }
    setIsOpen(false);
  };

  return (

    <div className="relative w-32 text-black">
      
      {/* Select Box */}
      <div className="rounded-lg cursor-pointer " onClick={() => setIsOpen(!isOpen)}>
        {selectedOption?.label || "Select an option"}
      </div>

      {/* Options Box */}
      {isOpen && options.length > 0 && (
        
        <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
        
          {options.map((option) => (
            
            <li key={option.value} className="px-4 py-2 cursor-pointer hover:bg-red-500 hover:text-white rounded-lg"
              onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>

          ))}

        </ul>
    
    )}
    
    </div>
  );
};

export default CustomSelect;