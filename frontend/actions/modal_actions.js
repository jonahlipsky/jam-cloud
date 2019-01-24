export const INCREMENT_STAGE = "INCREMENT_STAGE";

export const incrementStage = (prevStage) => ({
  type: INCREMENT_STAGE,
  prevStage
});
