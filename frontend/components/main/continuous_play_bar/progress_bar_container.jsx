import { connect } from 'react-redux';
import ProgressBar from './progress_bar';
import { sendCurrentPercentage } from '../../../actions/sound_controller_actions';

const mapStateToProps = state => {
  let duration = state.io.trackQueue.duration;
  let percentageComplete = state.io.trackQueue.percentageComplete;
  let currentMilliseconds = Math.floor((percentageComplete / 100) * duration);

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

//for ease of translating duration to time.
//https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
String.prototype.toHHMMSS = function () {
  let sec_num = parseInt(this, 10); // don't forget the second param
  let hours   = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds = sec_num - (hours * 3600) - (minutes * 60);
  let hours_present = !!hours;
  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  if(hours_present){
    return hours+':'+minutes+':'+seconds;
  } else {
    return minutes+':'+seconds;
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
