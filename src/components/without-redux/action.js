//action creator

export const incrementAction = (payload = 1) => ({
  type: "increment",
  payload,
});
export const decrementAction = (payload = 1) => ({
  type: "decrement",
  payload,
});
export const resetAction = () => ({ type: "reset" });
