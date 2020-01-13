import { render } from '@testing-library/react';
import React from 'react';
import Header from './header';

describe('Header', () => {
  it('should render', async() => {
    const component = render(
      <Header siteTitle='Hello World' />,
    );
    expect(component.getByText('Hello World')).toBeDefined();
  });
});
