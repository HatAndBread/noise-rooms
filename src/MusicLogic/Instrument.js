import { Gain, FeedbackDelay, Distortion, Compressor, ToneAudioBuffers, TransportTime, Transport, now } from 'tone';
import EffectsObject from '../Components/Effects/EffectsObject';
import sine from '../assets/sine.mp3';
import sawtooth from '../assets/sawtooth.mp3';
import square from '../assets/square.mp3';
import triangle from '../assets/triangle.mp3';
import oboe from '../assets/oboe.mp3';
import oud from '../assets/oud.mp3';
import harmonium from '../assets/harmonium.mp3';
import kazoo from '../assets/kazoo.mp3';
import organ from '../assets/organ.mp3';
import swell from '../assets/swell.mp3';
import trumpet from '../assets/trumpet.mp3';
import piano from '../assets/piano.mp3';
import voice from '../assets/voice.mp3';
import tambura from '../assets/tambura.mp3';
import singing from '../assets/singing.mp3';
import cello from '../assets/cello.mp3';
import saw from '../assets/saw.mp3';
import kalimba from '../assets/kalimba.mp3';
import gamelan from '../assets/gamelan.mp3';
import gamelan2 from '../assets/gamelan2.mp3';
import gamelan3 from '../assets/gamelan3.mp3';
import spring from '../assets/tuned-spring.mp3';
import ruler from '../assets/tuned-ruler.mp3';
import violin from '../assets/violin.mp3';

const waveUrls = {
  sine,
  sawtooth,
  square,
  triangle,
  oboe,
  oud,
  harmonium,
  kazoo,
  organ,
  swell,
  trumpet,
  piano,
  voice,
  tambura,
  singing,
  cello,
  saw,
  kalimba,
  gamelan,
  gamelan2,
  gamelan3,
  violin,
  spring,
  ruler
};

let waves;
let wavesReady;

const checkIfSoundsLoaded = () => (wavesReady ? true : false);

export { checkIfSoundsLoaded };
let loadedInstrumentNumber = 0;
const compressor = new Compressor();
export default class Instrument {
  constructor() {
    this.gain = new Gain(0.2).connect(compressor);
    this.delay = new FeedbackDelay(0, 1).connect(this.gain);
    this.distortion = new Distortion().connect(this.delay);
    this.setEffects(EffectsObject());
    if (!waves) {
      waves = new ToneAudioBuffers(waveUrls, () => {
        wavesReady = true;
      });
    }
  }
  transportTime() {
    return `+${TransportTime('16n').toSeconds()}`;
  }

  connect() {
    loadedInstrumentNumber += 1;
    if (loadedInstrumentNumber === 4) {
      console.log('ALL CONNECTED');
      Transport.start(now());
      Transport.bpm.value = 80;
      compressor.toDestination();
    }
  }

  getWave(which) {
    if (waves) {
      return waves.get(which);
    }
  }

  setEffects(effects) {
    Object.keys(effects).forEach((effect) => {
      switch (effect) {
        case 'delay':
          this.delay.feedback.value = effects.delay.feedback.level;
          this.delay.delayTime.value = effects.delay.time.level;
          effects.delay.on ? (this.delay.wet.value = effects.delay.wet.level) : (this.delay.wet.value = 0);
          break;
        case 'distortion':
          this.distortion.distortion = effects.distortion.level.level;
          if (effects.distortion.on) {
            this.distortion.wet.value = effects.distortion.wet.level;
          } else {
            this.distortion.wet.value = 0;
          }
          break;
        default:
          return;
      }
    });
  }
}
