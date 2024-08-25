// components/Tab.js
export default function Tab({ id, label, activeTab, onClick }) {
  const isActive = activeTab === id;

  return (
    <li
      onClick={() => onClick(id)}
      className={`text-center text-sm font-bold py-3 px-6 rounded-full tracking-wide cursor-pointer ${
        isActive ? "text-white bg-blue-600" : "text-gray-500"
      }`}
    >
      {label}
    </li>
  );
}
