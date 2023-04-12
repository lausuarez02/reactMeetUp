//redux
import { Provider } from 'react-redux';
import { store } from 'reduxStore/store/store';
//views
import AllMeetupsPage from "pages/AllMeetupsPages/AllMeetupsPage";
import FavoritesPage from "pages/Favorites/Favorites";
import NewMeetupsPage from "pages/NewMeetup/NewMeetup";
// components
import MainNavigation from "components/layout/MainNavigation/MainNavigation";
// Router
import {BrowserRouter,Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <Provider store={store}>

     <MainNavigation/>
    <Routes data-test="app">
      <Route path='/' element={<AllMeetupsPage/>}/>
      <Route path='/favorites' element={<FavoritesPage/>}/>
      <Route path='/meetup' element={<NewMeetupsPage/>}/>
    </Routes>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
