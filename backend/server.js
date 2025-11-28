import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const devices = [
  {
    deviceId: "A02130825",
    name: "Battery Pack 01",
    status: "active",
    temperature: 32,
    voltage: 48.5
  },
  {
    deviceId: "A02130826",
    name: "Battery Pack 02",
    status: "warning",
    temperature: 44,
    voltage: 47.9
  },
  {
    deviceId: "A02130827",
    name: "Battery Pack 03",
    status: "offline",
    temperature: null,
    voltage: null
  }
];

// GET /api/devices
app.get("/api/devices", (req, res) => {
  const { status } = req.query;
  let data = devices;

  if (status) {
    data = devices.filter((d) => d.status === status);
  }

  res.json(data);
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
