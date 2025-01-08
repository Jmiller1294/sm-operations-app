import { FaBook, FaCalendar, FaFolder, FaHome, FaPage4, FaServicestack } from 'react-icons/fa';
import { FaGear, FaPerson } from 'react-icons/fa6';


const Navbar = () => {
  const navList = [
    {icon: <FaHome />, title: 'Home'},
    {icon: <FaCalendar />, title: 'Appointments'},
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
    <div style={{backgroundColor: '#D3D3D3', width: '12%', height: '100vh',display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 20, justifyContent: 'space-between'}}>
      {navList.map((item:any) => (
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '1.7rem', alignItems: 'center', color: '#FFFFFF'}}>
          {item.icon}
          <div style={{fontSize: '18px', marginLeft: '10px'}}>{item.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Navbar