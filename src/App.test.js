/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from 'reduxStore/store/store';

describe('App', () => {
  test('renders main navigation', () => {
    const { getByRole } = render(
      <Provider store={store}>
          <App />
      </Provider>

    );

    const mainNavigation = getByRole('navigation');
    expect(mainNavigation).toBeDefined();
  });

  test('renders all meetups page on the home route', () => {
    const { getAllByText } = render(
      <Provider store={store}>
          <App />
      </Provider>
    );

    const allMeetupsPageTitle = getAllByText(/All Meetups/i);
    expect(allMeetupsPageTitle).toBeDefined();
  });

  test('renders favorites page on the favorites route', () => {
    const { getByText } = render(
      <Provider store={store}>
          <App />
      </Provider>
    );

    const favoritesPageTitle = getByText(/Favorites/i);
    expect(favoritesPageTitle).toBeDefined();
  });

  test('renders new meetups page on the new meetup route', () => {
    const { getByText } = render(
      <Provider store={store}>
          <App />
      </Provider>
    );

    const newMeetupsPageTitle = getByText(/Add New Meetup/i);
    expect(newMeetupsPageTitle).toBeDefined();
  });
});