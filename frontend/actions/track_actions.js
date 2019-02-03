import * as TRACK_API_UTIL from '../util/track_api_util';

//action types
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_UPLOAD_ERRORS = "RECEIVE_UPLOAD_ERRORS";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";
export const INCREMENT_FILE_UPLOAD_STAGE = "INCREMENT_FILE_UPLOAD_STAGE";
export const EDIT_TRACK_NUMBER = "EDIT_TRACK_NUMBER";
export const FREEZE_LIST_ITEM = "FREEZE_LIST_ITEM";
export const NO_LIST_ITEM_FROZEN = "NO_LIST_ITEM_FROZEN";

//action creators

export const freezeListItem = (trackId) => ({
  type: FREEZE_LIST_ITEM,
  trackId
});

export const noListItemFrozen = () => ({
  type: NO_LIST_ITEM_FROZEN
});

export const editTrackNumber = (id) => ({
  type: EDIT_TRACK_NUMBER,
  id
});

export const incrementFileUploadStage = (prevStage) => ({
  type: INCREMENT_FILE_UPLOAD_STAGE,
  prevStage
});

const receiveRemoveTrack = (id, user_id) => ({
  type: REMOVE_TRACK,
  id, 
  user_id
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

export const removeTrack = ({id, user_id}) => dispatch => {
  return TRACK_API_UTIL.removeTrack(id).then(() => dispatch(receiveRemoveTrack(id, user_id)));
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

