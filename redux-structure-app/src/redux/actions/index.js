export const increment = (ni) => {
  return {
    type: 'INCREMENT',
    payload: ni,
  };
};

export const decrement = (nd) => {
  return {
    type: 'DECREMENT',
    payload: nd,
  };
};
