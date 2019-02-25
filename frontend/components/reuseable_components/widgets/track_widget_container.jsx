import { connect } from 'react-redux';
import { pushToFrontOfQueue, sendReceipt,
  sendSoundStatus, sendCurrentPercentage } from '../../../actions/sound_controller_actions';
import TrackWidget from './track_widget';

const mapStateToProps = state => {
  let soundStatusArray = state.io.trackQueue.soundStatus;
  let firstInQueue = state.io.trackQueue.queue ? state.io.trackQueue.queue[0] : ""
  let percentageComplete = state.io.trackQueue.percentageComplete;
  let duration = state.io.trackQueue.duration;
  let currentMilliseconds = percentageComplete * duration / 100;
  let handshake = state.io.trackQueue.handshake;
  let signal = state.io.trackQueue.signal;

  return({
    soundStatusArray,
    firstInQueue,
    currentMilliseconds,
    handshake,
    signal
  });
};

const mapDispatchToProps = dispatch => ({
  pushToFrontOfQueue: trackId => dispatch(pushToFrontOfQueue(trackId)),
  sendSoundStatus: (status, trackId) => dispatch(sendSoundStatus(status, trackId)),
  sendReceipt: () => dispatch(sendReceipt()),
  sendCurrentPercentage: (percentage) => dispatch(sendCurrentPercentage(percentage))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackWidget);