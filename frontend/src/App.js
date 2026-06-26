import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [features, setFeatures] = useState([]);
  const [name, setName] = useState("");

  const fetchFeatures = () => {
    axios.get("http://localhost:5000/api/features")
      .then(res => setFeatures(res.data));
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  const createFeature = () => {
    axios.post("http://localhost:5000/api/features", { name })
      .then(() => {
        setName("");
        fetchFeatures();
      });
  };

  const toggleFeature = (id) => {
    axios.put(`http://localhost:5000/api/features/${id}`)
      .then(fetchFeatures);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 Feature Flag Dashboard</h1>

      <input
        placeholder="Enter feature name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={createFeature}>Add Feature</button>

      <hr />

      {features.map(f => (
        <div key={f._id} style={{ marginBottom: "10px" }}>
          <b>{f.name}</b> - {f.enabled ? "🟢 ON" : "🔴 OFF"}
          <button onClick={() => toggleFeature(f._id)} style={{ marginLeft: "10px" }}>
            Toggle
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
