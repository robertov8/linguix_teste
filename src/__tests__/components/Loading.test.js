import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../../components/Loading';

describe('GridListPhoto component', () => {
  it('should render list photo', () => {
    const { getByTestId, getByRole } = render(<Loading />);

    expect(getByTestId('loading')).toContainElement(getByRole('progressbar'));
  });
});
