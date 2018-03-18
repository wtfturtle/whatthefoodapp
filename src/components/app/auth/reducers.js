export const USER = 'USER';

export function user(state = null, { type, payload }) {
  switch(type) {
    case USER:
      return payload;
    default:
      return state;
  }
}