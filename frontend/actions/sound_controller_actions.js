export const PUSH_TRACK_TO_QUEUE = "PUSH_TRACK_TO_QUEUE";
export const GO_TO_NEXT_TRACK = "GO_TO_NEXT_TRACK";

export const goToNextTrack = () => ({
  type: GO_TO_NEXT_Track
});

export const pushTrackToQueue = (trackId) => ({
  type: PUSH_TRACK_TO_QUEUE,
  trackId
});

