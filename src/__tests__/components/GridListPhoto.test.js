import React from 'react';
import { render } from '@testing-library/react';
import GridListPhoto from '../../components/GridListPhoto';

describe('GridListPhoto component', () => {
  it('should render list photo', () => {
    const photos = [
      {
        alt_description: 'description1',
        thumb: 'https://api.adorable.io/avatars/500',
      },
      {
        alt_description: 'description2',
        thumb: 'https://api.adorable.io/avatars/500',
      },
    ];

    const { getByTestId, getByAltText } = render(
      <GridListPhoto columns={2} photos={photos} />
    );

    expect(getByTestId('grid-photo')).toContainElement(
      getByAltText('description1')
    );
    expect(getByTestId('grid-photo')).toContainElement(
      getByAltText('description2')
    );
  });
});
