export const PUSH_TRACK_TO_QUEUE = "PUSH_TRACK_TO_QUEUE";
export const GO_TO_NEXT_TRACK = "GO_TO_NEXT_TRACK";
export const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
export const GO_TO_PREVIOUS_TRACK = "GO_TO_PREVIOUS_TRACK";
export const PUSH_TO_FRONT_OF_QUEUE = "PUSH_TO_FRONT_OF_QUEUE";
export const TOGGLE_IMMEDIATE = "TOGGLE_IMMEDIATE";

export const toggleImmediate = () => ({
  type: TOGGLE_IMMEDIATE
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

export const toggleShuffle = () => ({
  type: TOGGLE_SHUFFLE
});
