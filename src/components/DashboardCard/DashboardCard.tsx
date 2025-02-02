import styles from './DashboardCard.module.css';


const DashboardCard = (props: any) => {
  
  const renderCard = (size: string) => {
    switch (size) {
      case 'small':
        return (
          <div className={styles.smallCard}>
            {props.children}
          </div>
        );
      case 'medium':
        return (
          <div className={styles.mediumCard}>
            {props.children}
          </div>
        );
      case 'large':
        return (
          <div className={styles.largeCard}>
            {props.children}
          </div>
        );
      case 'xlarge':
        return (
          <div className={styles.xlargeCard}>
            {props.children}
          </div>
        );
      default:
        break;
    }
  }


  return (
    <>
      {renderCard(props.size)}
    </>
  )
}

export default DashboardCard