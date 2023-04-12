/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import { render, screen } from '@testing-library/react';
import MeetupItem from './MeetupItem';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('MeetupItem', () => {
  const mockStore = configureStore([]);

  it('renders the correct number of items', () => {
    const store = mockStore({
      userFavorites: {
        data: [
          {
            id: 1,
            title: 'Meetup 1',
            address: '123 Main St.',
            description: 'This is the first meetup',
            image: 'https://example.com/meetup1.jpg',
          },
          {
            id: 2,
            title: 'Meetup 2',
            address: '456 Main St.',
            description: 'This is the second meetup',
            image: 'https://example.com/meetup2.jpg',
          },
        ],
      },
    });

    render(
      <Provider store={store}>
        <MeetupItem />
      </Provider>
    );

    const items = screen.getAllByTestId('component');
    expect(items.length).toBe(2);
  });
});