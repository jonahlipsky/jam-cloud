import { connect } from 'react-redux';
import ProgressBar from './progress_bar';
import { sendCurrentPercentage } from '../../../actions/sound_controller_actions';

const mapStateToProps = state => {
  let duration = state.io.trackQueue.duration;
  let percentageComplete = state.io.trackQueue.percentageComplete;
  let currentMilliseconds = Math.floor((percentageComplete / 100) * duration);
  require('../../../util/time_util');
  duration = `${duration / 1000}`.toHHMMSS();
  let currentTime = `${currentMilliseconds / 1000}`.toHHMMSS();
  return({
    duration,
    percentageComplete,
    currentTime
  });
};

const mapDispatchToProps = dispatch => ({
  sendCurrentPercentage: (percentage) => dispatch(sendCurrentPercentage(percentage))
});



export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
