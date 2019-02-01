export const PUSH_TRACK_TO_QUEUE = "PUSH_TRACK_TO_QUEUE";
export const GO_TO_NEXT_TRACK = "GO_TO_NEXT_TRACK";
export const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
export const GO_TO_PREVIOUS_TRACK = "GO_TO_PREVIOUS_TRACK";
export const PUSH_TO_FRONT_OF_QUEUE = "PUSH_TO_FRONT_OF_QUEUE";
export const CLEAR_IMMEDIATE = "CLEAR_IMMEDIATE";
export const SEND_PERCENTAGE_COMPLETE = "SEND_PERCENTAGE_COMPLETE";
export const SEND_CURRENT_PERCENTAGE = "SEND_CURRENT_PERCENTAGE";
export const CLEAR_CURRENT_PERCENTAGE = "CLEAR_CURRENT_PERCENTAGE";
export const IMMEDIATE_ON = "IMMEDIATE_ON";

export const immediateOn = () => ({
  type: IMMEDIATE_ON
});

export const clearCurrentPercentage = () => ({
  type: CLEAR_CURRENT_PERCENTAGE
});

export const sendCurrentPercentage = (percentage) => ({
  type: SEND_CURRENT_PERCENTAGE,
  percentage
});

export const sendPercentageComplete = (percentageComplete, duration) => ({
  type: SEND_PERCENTAGE_COMPLETE,
  percentageComplete,
  duration
});

export const clearImmediate = () => ({
  type: CLEAR_IMMEDIATE
});

export const pushToFrontOfQueue = (trackId) => ({
  type: PUSH_TO_FRONT_OF_QUEUE,
  trackId
});

export const goToPreviousTrack = () => ({
  type: GO_TO_PREVIOUS_TRACK
});

export const goToNextTrack = () => ({
  type: GO_TO_NEXT_TRACK
});

export const pushTrackToQueue = (trackId) => ({
  type: PUSH_TRACK_TO_QUEUE,
  trackId
});

export const toggleShuffle = (trackIds, shuffleAndTurnOff) => ({
  type: TOGGLE_SHUFFLE,
  trackIds,
  shuffleAndTurnOff
});
