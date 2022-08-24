import { render } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  test('Renders Navbar component', () => {
    const tree = render(<Navbar />)
    expect(tree).toMatchSnapshot()
  })
});