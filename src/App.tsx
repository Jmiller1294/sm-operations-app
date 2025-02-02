import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import AppointmentsPage from "./pages/AppointmentsPage";
import DashboardPage from './pages/Homepage/DashboardPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<DashboardPage />} />
      <Route path='/appointments' element={<AppointmentsPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
