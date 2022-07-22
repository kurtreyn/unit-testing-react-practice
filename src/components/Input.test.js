import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Input from './Input';

describe('Input Component Test', () => {
  it('rendered input', () => {
    render(<Input showDiv={false} />);
    const input = screen.getByTestId('searchBar');
    expect(input).toBeTruthy();
  });

  it('render div', () => {
    render(<Input showDiv={true} />);
    const div = screen.getByTestId('divWeWantToShow');
    expect(div).toBeTruthy();
  });

  it(`don't render div`, () => {
    render(<Input showDiv={false} />);
    const div = screen.getByTestId('divWeWantToShow');
    expect(div).toBeFalsy();
  });

  it('change on input causes change on header', async () => {
    render(<Input showDiv={true} />);
    const input = screen.getByTestId('searchBar');
    const inputWord = 'Kurt';
    fireEvent.change(input, { target: { value: inputWord } });
    const header = await screen.findByTestId('displaySearch');
    expect(header.value).toBe(inputWord);
  });
});
