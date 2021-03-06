import '../../../Styles/Components/Drone.css';

export default function VolumeFader({ number, droneData, setDroneData }) {
  const handleChange = (e) => {
    const copy = JSON.parse(JSON.stringify(droneData));
    copy[number].volume = e.target.value;
    setDroneData(copy);
  };
  return (
    <div className="volume-fader">
      <label htmlFor="volume-fader" min="0" max="100">
        Vol.
      </label>
      <input
        type="range"
        name="volume-fader"
        min="-12"
        max="1"
        step="0.05"
        defaultValue={droneData[number].volume}
        onChange={handleChange}
      />
    </div>
  );
}
