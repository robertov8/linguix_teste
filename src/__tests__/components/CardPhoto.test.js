import React from 'react';
import { render } from '@testing-library/react';
import CardPhoto from '../../components/CardPhoto';

describe('CardPhoto component', () => {
  it('should render photo', () => {
    const photo = {
      alt_description: 'description',
      user: {
        name: 'user',
        username: 'username',
        profile_image: { small: 'https://api.adorable.io/avatars/500' },
      },
      urls: { regular: 'https://api.adorable.io/avatars/500' },
    };

    const { getByText, getByTestId } = render(<CardPhoto photo={photo} />);

    // debug();

    expect(getByTestId('card-photo')).toContainElement(getByText('user'));
    expect(getByTestId('card-photo')).toContainElement(getByText('username'));
    expect(getByTestId('card-photo')).toContainElement(
      getByText('description')
    );
  });
});
