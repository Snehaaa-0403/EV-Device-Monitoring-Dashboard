import StatusBadge from "./StatusBadge";

export default function DevicePanel({ device, onClose }) {
  return (
    <div className="
      fixed top-0 right-0 h-full w-96 bg-white shadow-2xl p-8 z-50 
      border-l border-gray-200 slide-in
    ">
      <button
        className="text-red-500 font-semibold mb-5 hover:underline"
        onClick={onClose}
      >
        Close
      </button>

      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {device.name}
      </h2>

      <div className="space-y-3 text-gray-700">
        <p><b>Device ID:</b> {device.deviceId}</p>
        <p><b>Status:</b> <StatusBadge status={device.status} /></p>
        <p><b>Temperature:</b> {device.temperature}</p>
        <p><b>Voltage:</b> {device.voltage}</p>
      </div>
    </div>
  );
}

