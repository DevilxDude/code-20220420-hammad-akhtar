import Room from 'components/Room';
import Title from 'components/Title';
import rooms from 'data/rooms';
import styles from './index.module.scss';

const ExploreSection = () => {
  return (
    <div className={styles.container}>
      <Title title="Explore" subtitle="From one-guest rooms to penthouses with pools and gardens" />
      <div className={styles.row}>
        {rooms.map((room) => (
          <div key={room.id} className={styles.col}>
            <Room room={room} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
