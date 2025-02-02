import { FaBook, FaCalendar, FaFolder, FaHome, FaServicestack } from 'react-icons/fa';
import { FaGear, FaPerson } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const navList = [
    {icon: <FaHome />, title: 'Dashboard', path: '/'},
    {icon: <FaCalendar />, title: 'Appointments', path: '/appointments'},
    {icon: <FaBook />, title: 'Quotes'},
    {icon: <FaFolder />, title: 'Scheduling'},
    {icon: <FaPerson />, title: 'Customers'},
    {icon: <FaPerson />, title: 'Employees'},
    {icon: <FaServicestack />, title: 'Services'},
    {icon: <FaHome />, title: 'Inventory'},
    {icon: <FaHome />, title: 'Booking'},
    {icon: <FaHome />, title: 'Leads'},
    {icon: <FaGear />, title: 'Settings'},
  ]

  return (
    <div style={{backgroundColor: 'white', width: '12%', height: 'auto', display: 'flex', flexDirection: 'column', padding: '100px 20px 60px 20px', justifyContent: 'space-between'}}>
      {navList.map((item:any) => (
        <Link 
          style={{display: 'flex', flexDirection: 'row', width: '100%', height: '2.2rem', alignItems: 'center', color: '#FFFFFF', backgroundColor: 'red'}}
          to={item.path}
        >
          {item.icon}
          <div style={{fontSize: '18px', marginLeft: '10px'}}>{item.title}</div>
        </Link>
      ))}
    </div>
  )
}

export default Sidebar