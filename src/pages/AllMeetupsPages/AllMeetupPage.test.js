import { render } from "@testing-library/react";
import AllMeetupsPage from "./AllMeetupsPage";
//utils
import { Provider } from 'react-redux';

import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom'


const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}))

describe("AllMeetupsPage", () => {
      let store;
  beforeEach(() => {
      store = createStore((state = {}, action) => {
        return state
      });
  })
  test("renders correctly", () => {
    const { asFragment } = render(
        <Provider store={store}>
        <BrowserRouter>
          <AllMeetupsPage 
            
          />
        </BrowserRouter>
      </Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
