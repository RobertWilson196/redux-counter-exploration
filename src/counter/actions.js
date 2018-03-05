import * as types from './types';

export const incrementAction = () => ({
    type: types.INCREMENT
});

export const decrementAction = () => ({
    type: types.DECREMENT
});

export const incrementByAction = (int) => ({
    type: types.INCREMENT_BY,
    payload: { value: int }
});

export const decrementByAction = (int) => ({
    type: types.DECREMENT_BY,
    payload: { value: int }
});
