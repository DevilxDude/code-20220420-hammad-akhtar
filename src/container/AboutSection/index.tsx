import Title from 'components/Title';
import rooms from 'data/rooms';
import styles from './index.module.scss';

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <Title title="About Us" subtitle="Allow us to tell you a short story..." />
      <div className={styles.row}>
        {rooms.map((room) => (
          <div key={room.id} className={styles.col}>
            {/* <Room room={room} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
