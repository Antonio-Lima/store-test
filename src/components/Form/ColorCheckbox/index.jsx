import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

export default function ColorCheckbox({ title, options, onChange }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    onChange(selectedOptions.join(","));
  }, [selectedOptions, onChange]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <div className="flex flex-wrap gap-2">
        {options.map((item) => (
          <Checkbox
            key={item.id}
            item={item}
            checked={selectedOptions.includes(item.value)}
            onChange={() => handleCheckboxChange(item.value)}
          />
        ))}
      </div>
    </div>
  );
}
