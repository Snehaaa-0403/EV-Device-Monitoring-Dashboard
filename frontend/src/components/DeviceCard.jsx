import StatusBadge from "./StatusBadge";

export default function DeviceCard({ device, onClick }) {
  return (
    <div
      className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer 
                 transition transform hover:-translate-y-1 border border-gray-100"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {device.name}
      </h3>

      <StatusBadge status={device.status} />

      <div className="mt-4 text-gray-700 space-y-1">
        <p>Temp: {device.temperature}°C</p>
        <p>Voltage: {device.voltage}V</p>
      </div>
    </div>
  );
}

