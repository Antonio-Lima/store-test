export default function Input({ placeholder, value, setValue }) {
  return (
    <input
      className="w-full border-2 border-gray-950 p-2"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={setValue}
    />
  );
}
