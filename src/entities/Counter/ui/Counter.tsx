import { FC } from 'react';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const Counter: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(counterActions.increment());
  };

  const onDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid='value-title'>{value}</h1>
      <button data-testid='increment-btn' onClick={onIncrement}>
        {t('increment')}
      </button>
      <button data-testid='decrement-btn' onClick={onDecrement}>
        {t('decrement')}
      </button>
    </div>
  );
};
