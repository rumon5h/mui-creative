import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import {theme} from './theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    path: '/',
    children: [
      {
        element: <Home/>,
        path: '/'
      }
    ]
  }
])


function App() {
  return (
    <ThemeProvider theme={theme} >
      <RouterProvider router={router} />
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
