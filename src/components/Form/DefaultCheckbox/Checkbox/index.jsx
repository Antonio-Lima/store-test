export default function Checkbox({ item, onChange, checked }) {
  return (
    <button
      className={`flex gap-1 p-1 border-2 ${
        checked ? "border-gray-800" : "border-transparent"
      }`}
      onClick={onChange}
    >
      {item.name}
    </button>
  );
}
