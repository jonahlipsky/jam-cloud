import * as TRACK_API_UTIL from '../util/track_api_util';

//action types
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_UPLOAD_ERRORS = "RECEIVE_UPLOAD_ERRORS";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";

//action creators
const receiveRemoveTrack = id => ({
  type: REMOVE_TRACK,
  track: { id }
});

const receiveUploadErrors = (errors) => ({
  type: RECEIVE_UPLOAD_ERRORS,
  errors 
});

const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
});

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});


//Thunk actions

export const updateTrack = (formData, id) => dispatch => {
  return TRACK_API_UTIL.updateTrack(formData, id).then(
    track => dispatch(receiveTrack(track)),
    errors => dispatch(receiveUploadErrors(errors))
  );
};

export const removeTrack = id => dispatch => {
  return TRACK_API_UTIL.removeTrack(id).then(track => dispatch(receiveRemoveTrack(id)));
};


export const fetchTracks = () => dispatch => {
  return TRACK_API_UTIL.getTracks().then(tracks => dispatch(receiveTracks(tracks)));
};

export const postTrack = (formData) => dispatch => {
  return TRACK_API_UTIL.postTrack(formData).then(
    track => dispatch(receiveTrack(track)),
    errors => dispatch(receiveUploadErrors(errors))
  );
};

