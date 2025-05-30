import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';

describe('getCounter.test', () => {
  test('should return the counter value from the state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
