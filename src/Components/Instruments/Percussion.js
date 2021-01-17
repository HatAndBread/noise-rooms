import { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';
import IndividualPercussion from './Percussion/IndividualPercussion';
import RhythmMachine from './Percussion/RhythmMachine';

export const percussionTypes = [
  'snare',
  'kick',
  'hat',
  'tom',
  'ride',
  'bowl',
  'bugara1',
  'bugara2',
  'ceng',
  'demung1',
  'demung2',
  'demung3',
  'djembe1',
  'djembe2',
  'djembe3',
  'jegog',
  'kantilan',
  'kempur',
  'rebana',
  'ruler',
  'spring'
];
Object.freeze(percussionTypes);

export default function Percussion({ setFinalData }) {
  const percussionData = useContext(Context).percussionData;
  const setMyInstrument = useContext(Context).setMyInstrument;
  const [rhythmMachineExposed, setRhythmMachineExposed] = useState(false);
  useEffect(() => {
    setMyInstrument('percussion');
    return () => {
      setMyInstrument(null);
    };
  }, [setMyInstrument]);
  useEffect(() => {
    console.log(percussionData);
  }, [percussionData]);
  const rhythmMachineClick = () => {
    rhythmMachineExposed ? setRhythmMachineExposed(false) : setRhythmMachineExposed(true);
  };
  return (
    <div className="percussion-container">
      <button className="rhythm-machine-btn" onClick={rhythmMachineClick}>
        {rhythmMachineExposed ? 'Hide rhythm machine' : 'Rhythm Machine'}
      </button>
      {rhythmMachineExposed && <RhythmMachine percussionData={percussionData} setFinalData={setFinalData} />}
      <div className="percussion-row">
        <IndividualPercussion
          number="one"
          defaultDrum={percussionData.one.drum}
          setFinalData={setFinalData}
          sampleRate={percussionData.one.sampleRate}
        />
        <IndividualPercussion
          number="two"
          defaultDrum={percussionData.two.drum}
          setFinalData={setFinalData}
          sampleRate={percussionData.two.sampleRate}
        />
        <IndividualPercussion
          number="three"
          defaultDrum={percussionData.three.drum}
          setFinalData={setFinalData}
          sampleRate={percussionData.three.sampleRate}
        />
      </div>
      <div className="percussion-row">
        <IndividualPercussion
          number="four"
          defaultDrum={percussionData.four.drum}
          setFinalData={setFinalData}
          sampleRate={percussionData.four.sampleRate}
        />
        <IndividualPercussion
          number="five"
          defaultDrum={percussionData.five.drum}
          setFinalData={setFinalData}
          sampleRate={percussionData.five.sampleRate}
        />
        <IndividualPercussion
          number="six"
          defaultDrum={percussionData.six.drum}
          setFinalData={setFinalData}
          sampleRate={percussionData.six.sampleRate}
        />
      </div>
    </div>
  );
}
