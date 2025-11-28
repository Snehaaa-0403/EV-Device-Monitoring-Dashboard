import React, { useEffect, useState } from "react";
import DeviceCard from "../components/DeviceCard";
import DevicePanel from "../components/DevicePanel";

const API_URL = "http://localhost:5001/api/devices";

export default function DevicesPage() {
  const [devices, setDevices] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedDevice, setSelectedDevice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setDevices(data);
    };
    fetchData();
  }, []);

  const filteredDevices = filter
    ? devices.filter((d) => d.status === filter)
    : devices;

  return (
    <div className="w-full min-h-screen px-12 py-10 bg-gray-100 overflow-hidden">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
          EV Device Monitoring Dashboard
        </h1>

        <select
          className="p-2 border border-gray-300 rounded-lg shadow-sm bg-white"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Devices</option>
          <option value="active">Active</option>
          <option value="warning">Warning</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      {/* DEVICE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredDevices.map((device) => (
          <DeviceCard
            key={device.deviceId}
            device={device}
            onClick={() => setSelectedDevice(device)}
          />
        ))}
      </div>

      {/* SIDE PANEL */}
      {selectedDevice && (
        <DevicePanel
          device={selectedDevice}
          onClose={() => setSelectedDevice(null)}
        />
      )}
    </div>
  );
}

