export default function FormTextArea({
  name,
  value,
  onChange,
  placeholder,
  rows,
  required = false,
}) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className="w-full bg-gray-100 rounded-md px-4 text-sm pt-3 outline-blue-600 focus-within:bg-transparent focus-within:text-zinc-100"
    />
  );
}
