export default function WaveChooser({ name, number, droneData, setDroneData }) {
  const handleChange = (e) => {
    const copy = JSON.parse(JSON.stringify(droneData));
    copy[number].wave = e.target.value;
    setDroneData(copy);
  };
  return (
    <select onChange={handleChange} defaultValue={droneData[number].wave}>
      <option value="harmonium">harmonium</option>
      <option value="tambura">tambura</option>
      <option value="organ">organ</option>
      <option value="cello">cello</option>
      <option value="kazoo">kazoo</option>
      <option value="voice">voice</option>
      <option value="oboe">oboe</option>
      <option value="sine">sine</option>
      <option value="triangle">triangle</option>
      <option value="sawtooth">sawtooth</option>
      <option value="square">square</option>
      <option value="singing">singing</option>
      <option value="violin">violin</option>
      <option value="saw">saw</option>
    </select>
  );
}
