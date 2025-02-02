import DashboardCard from "../../components/DashboardCard/DashboardCard"
import styles from './DashboardPage.module.css';
import '../../index.css';

const DashboardPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={'row'}>
        <DashboardCard size={'small'}>
          <div>Jobs Today</div>
        </DashboardCard>
        <DashboardCard size={'small'}>
          <div>Active Cleaners</div>
        </DashboardCard>
        <DashboardCard size={'small'}>
          <div>Pending Requests</div>
        </DashboardCard>
        <DashboardCard size={'small'}>
          <div>Revenue Overview</div>
        </DashboardCard>
      </div>
      <div className={'row'}>
        <DashboardCard size={'large'}>
          <div>Upcoming Jobs & Schedule</div>
        </DashboardCard>
        <DashboardCard size={'large'}>
          <div>Cleaner Activity & Location Tracking</div>
        </DashboardCard>
        <DashboardCard size={'medium'}>
          Apps
        </DashboardCard>
      </div>
      <div className={'row'}>
        <DashboardCard size={'xlarge'}>
          Revenue & Financial Overview
        </DashboardCard>
        <DashboardCard size={'xlarge'}>
          Inventory Overview
        </DashboardCard>
      </div>
    </div>
  )
}

export default DashboardPage;