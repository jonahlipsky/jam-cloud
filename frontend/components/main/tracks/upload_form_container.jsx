import { postTrack, updateTrack, incrementFileUploadStage } from '../../../actions/track_actions';
import { connect } from 'react-redux';
import UploadForm from './upload_form';

const mapStateToProps = state => {
  let fileUploadStage = state.io.track.stage || 1;
  return ({
    fileUploadStage
  });
};

const mapDispatchToProps = dispatch => ({
  postTrack: (formData) => dispatch(postTrack(formData)),
  updateTrack: (formData, id) => dispatch(updateTrack(formData, id)),
  incrementStage: (prevStage) => dispatch(incrementFileUploadStage(prevStage))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);