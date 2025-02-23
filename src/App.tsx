import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import AppointmentsPage from "./pages/Appointmentpage/AppointmentsPage";
import DashboardPage from './pages/Homepage/DashboardPage';
import DayViewCalendar from './components/Calendar/DayViewCalendar';
import WeekViewCalendar from './components/Calendar/WeekViewCalendar';
import MonthViewCalendar from './components/Calendar/MonthViewCalendar';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<DashboardPage />} />
      <Route path='/appointments' element={<AppointmentsPage />}>
        <Route index element={<DayViewCalendar />} />
        <Route path='day' element={<DayViewCalendar />} />
        <Route path='week' element={<WeekViewCalendar />} />
        <Route path='month' element={<MonthViewCalendar/>} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
