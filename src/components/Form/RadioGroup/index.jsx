import Radio from "./Radio";

export default function RadioGroup({ title, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <h2>{title}</h2>
      <div className="flex flex-wrap gap-2">
        {options.map((item) => (
          <Radio
            category={title}
            key={item.id}
            option={item}
            onChange={onChange}
            active={value == item.value}
          />
        ))}
      </div>
    </div>
  );
}
