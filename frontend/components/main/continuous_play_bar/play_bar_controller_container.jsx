import { connect } from 'react-redux';
import { goToNextTrack } from '../../../actions/sound_controller_actions';
import PlayBarController from './play_bar_controller';

const mapStateToProps = state => {
  let trackQueue = state.io.trackQueue || null;
  return({
    trackQueue
  });
};

const mapDispatchToProps = dispatch => ({
  goToNextTrack: () => dispatch(goToNextTrack())
});

export default connect(mapStateToProps,mapDispatchToProps)(PlayBarController);