import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../reduxStore/store/store";
import FavoritesPage from "./Favorites";
import {createStore} from 'redux';


describe("FavoritesPage", () => {
  it("should render a list of MeetupItems", () => {
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
      let store
      store = createStore((state = { userFavorites:{data: mockData} }, action) => {
          return state
      })
    // Render the component wrapped with BrowserRouter and Provider
    const { getAllByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <FavoritesPage />
        </Provider>
      </BrowserRouter>
    );

    // Check that the component rendered correctly
    // expect(getByText("Favorites Page")).toBeDefined();

    // Check that the MeetupItems were rendered
    const meetupItems = getAllByTestId("meetup-item");
    expect(meetupItems).toHaveLength(mockData.length);
    mockData.forEach((data, index) => {
      expect(meetupItems[index]).toHaveTextContent(data.title);
      expect(meetupItems[index]).toHaveTextContent(data.address);
      expect(meetupItems[index]).toHaveTextContent(data.description);
    });
  });
  it("Should render Nothing wrapped in a div container", () => {
      let store
      store = createStore((state = { userFavorites:{data: null} }, action) => {
          return state
      })
  // Render the component wrapped with BrowserRouter and Provider
  const { getAllByTestId } = render(
    <BrowserRouter>
      <Provider store={store}>
        <FavoritesPage />
      </Provider>
    </BrowserRouter>
  );

  const nothingContainer = getAllByTestId('nothing-container');
  expect(nothingContainer).toBeDefined()

  })
});
