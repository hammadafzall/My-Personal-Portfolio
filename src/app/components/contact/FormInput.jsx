export default function FormInput({
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-blue-600 focus-within:bg-transparent focus-within:text-zinc-100"
    />
  );
}
