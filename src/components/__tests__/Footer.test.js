import { render } from '@testing-library/react';
import Footer from '../Footer'

describe('footer component', () => {
    test('Renders Footer component', () => {
      const tree = render(<Footer />)
      expect(tree).toMatchSnapshot()
    })
});