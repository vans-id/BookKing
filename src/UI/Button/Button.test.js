import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from './Button';

test('Renders disabled button when receive isDisabled prop', () => {
  const { container } = render(
    <Button isDisabled>Testing</Button>
  );
  expect(
    container.querySelector('span.disabled')
  ).toBeInTheDocument();
});

test('Renders loading/spinner when receive isLoading prop', () => {
  const { container, getByText } = render(
    <Button isLoading>Testing</Button>
  );

  expect(getByText(/loading/i)).toBeInTheDocument();

  expect(
    container.querySelector('span')
  ).toBeInTheDocument();
});

test('Renders <a> tag', () => {
  const { container } = render(
    <Button type='link' isExternal>
      Testing
    </Button>
  );
  expect(
    container.querySelector('a')
  ).toBeInTheDocument();
});

test('Renders <Link> tag', () => {
  const { container } = render(
    <BrowserRouter>
      <Button href='' type='link'>
        Testing
      </Button>
    </BrowserRouter>
  );
  expect(
    container.querySelector('a')
  ).toBeInTheDocument();
});
