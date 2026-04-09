import { createBrowserRouter } from 'react-router';
import MainLayout from '../MainLayout/MainLayout';
import Homepage from '../components/Homepage/Homepage';
import Books from '../components/Books/Books';
import ErrorPage from '../components/ErrorPage/ErrorPage';


export const router = createBrowserRouter([
 {
  path: '/',
  element : <MainLayout/>,
  children : [{
    index : true,
    path: '/',
    element: <Homepage/> 

  }
,{
  path : '/books',
  element : <Books/>
}
],

errorElement: <ErrorPage/>
 }

]);