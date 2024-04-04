import { MdCheck } from "react-icons/md";

export default function Radio({ option, active, onChange, category }) {
  return (
    <div className="flex flex-wrap gap-1">
      <input
        className="hidden"
        type="radio"
        name={category}
        id={option.value}
        onChange={() => onChange(option.value)}
        checked={active}
      />
      <div
        className={`w-6 h-6 cursor-pointer border-2 border-gray-950 flex justify-center items-center ease-in-out duration-300 ${
          active ? "bg-gray-950 text-gray-50" : "bg-gray-50 text-gray-950"
        }`}
        onClick={() => onChange(option.value)}
      >
        <MdCheck />
      </div>
      <label
        className="cursor-pointer"
        htmlFor={option.value}
        id={option.value}
      >
        {option.name}
      </label>
    </div>
  );
}
