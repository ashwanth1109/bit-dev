import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseCaseCard } from './use-case-card.composition';

it('should render with a title', () => {
  const { getByText } = render(<BasicUseCaseCard />);
  const rendered = getByText('Component Library');
  expect(rendered).toBeTruthy();
});

it('should render with a text', () => {
  const { getByText } = render(<BasicUseCaseCard />);
  const rendered = getByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper, quam sed.'
  );
  expect(rendered).toBeTruthy();
});

it('should contain an image', () => {
  render(<BasicUseCaseCard />);
  const displayedImage = document.querySelector('img') as HTMLImageElement;
  expect(displayedImage.src).toContain('logo-react');
});

it('image should contain an alt tag', () => {
  const { getByAltText } = render(<BasicUseCaseCard />);
  const rendered = getByAltText('React logo');
  expect(rendered).toBeTruthy();
});

it('image should contain a link', () => {
  const { getByAltText } = render(<BasicUseCaseCard />);
  const displayedImage = document.querySelector('a') as HTMLAnchorElement;
  expect(displayedImage.href).toContain('/react');
});