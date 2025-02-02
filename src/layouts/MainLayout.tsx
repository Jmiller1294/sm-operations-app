import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', height: '100vh', width: '100%', boxSizing: 'border-box'}}>
      <Sidebar />
      <div style={{ width: '100%', height: 'fit-content', boxSizing: 'border-box'}}>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout