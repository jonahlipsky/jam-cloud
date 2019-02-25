import { postTrack, updateTrack, incrementFileUploadStage, clearEditId } from '../../../actions/track_actions';
import { connect } from 'react-redux';
import UploadForm from './upload_form';

const mapStateToProps = state => {
  let fileUploadStage = state.io.track.stage || 1;
  let trackId = state.io.track.editId || null;
  let track;
  let formType;
  if(trackId){
    track = state.entities.tracks[trackId];
    formType = "Update";
  } else {
    track = null;
    formType = "Upload";
  }

  let errors = state.errors.entities;
  return ({
    fileUploadStage,
    track,
    formType,
    errors
  });
};

const mapDispatchToProps = dispatch => ({
  postTrack: (formData) => dispatch(postTrack(formData)),
  updateTrack: (formData, id) => dispatch(updateTrack(formData, id)),
  incrementStage: (prevStage) => dispatch(incrementFileUploadStage(prevStage)),
  clearEditId: () => dispatch(clearEditId())
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);