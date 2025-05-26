import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';

describe('getCounterValue.test', () => {
  test('should return exact value from counter reducer', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
