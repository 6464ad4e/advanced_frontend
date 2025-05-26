import { Counter } from './Counter';
import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
componentRender;

describe('Counter', () => {
  test('should render with initial value', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('should increment value when increment button is clicked', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('should decrement value when decrement button is clicked', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
