export default function StatusBadge({ status }) {
  const colors = {
    active: "bg-green-500",
    warning: "bg-yellow-500",
    offline: "bg-gray-500"
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-white text-sm font-medium ${colors[status]}`}
    >
      {status.toUpperCase()}
    </span>
  );
}
