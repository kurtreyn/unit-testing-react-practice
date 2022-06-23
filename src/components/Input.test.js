import { render } from '@testing-library/react';
import Input from './Input';

describe('Input Component Test', () => {
  it('rendered input', () => {
    const { getByTestId } = render(<Input showDiv={false} />);
    const input = getByTestId('searchBar');
    expect(input).toBeTruthy();
  });
});
