export default function Checkbox({ item, onChange, checked }) {
  return (
    <button
      className={`flex gap-1 p-1 border-2 ${
        checked ? "border-gray-800" : "border-transparent"
      }`}
      onClick={onChange}
    >
      <div
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "100%",
          backgroundColor: item.hex,
        }}
      ></div>
      {item.name}
    </button>
  );
}
