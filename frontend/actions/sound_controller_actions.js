export const PUSH_TRACK_TO_QUEUE = "PUSH_TRACK_TO_QUEUE";
export const GO_TO_NEXT_TRACK = "GO_TO_NEXT_TRACK";
export const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";

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
