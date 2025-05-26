import { counterReducer, counterActions } from './counterSlice';

import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
  test('if a counter value is incremented', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test('if a counter value is decremented', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  test('if an empty state is handled', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
  });
});
