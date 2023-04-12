import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import MainNavigation from './MainNavigation';

describe('MainNavigation', () => {
    const mockData = [
        {
          id: 'm1',
          title: 'Test Meetup 1',
          image: 'https://via.placeholder.com/150',
          address: '123 Main St',
          description: 'Test Meetup 1 Description',
        },
        {
          id: 'm2',
          title: 'Test Meetup 2',
          image: 'https://via.placeholder.com/150',
          address: '456 Second St',
          description: 'Test Meetup 2 Description',
        }
      ];

  let store;
  beforeEach(() => {
      store = createStore((state = {userFavorites:{data: mockData}}, action) => {
        return state
      });
  })

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainNavigation />
        </BrowserRouter>
      </Provider>
    );
    const headerElement = screen.getByTestId('navigation-header');
    expect(headerElement).toBeDefined();
  });

  it('displays the correct number of favorites', () => {
    const mockFavorites = { data: [1, 2, 3] };
    jest.spyOn(store, 'getState').mockReturnValue({ userFavorites: mockFavorites });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainNavigation />
        </BrowserRouter>
      </Provider>
    );

    const favoritesLink = screen.getByText('My Favorites');
    const favoritesBadge = screen.getByText('3');
    expect(favoritesLink).toBeDefined();
    expect(favoritesBadge).toBeDefined();
  });
});