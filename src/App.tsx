import EditPage from './pages/Edit';
import MainPage from './pages/Main';
import store from './store';

import GlobalStyles from './styles';
import { Provider } from 'react-redux';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/edit/:name',
    element: <EditPage />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
