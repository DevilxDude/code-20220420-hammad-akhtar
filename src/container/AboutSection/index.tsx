import Chapter from 'components/Chapter';
import Title from 'components/Title';
import chapters from 'data/chapters';
import styles from './index.module.scss';

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <Title title="About Us" subtitle="Allow us to tell you a short story..." />
      <div className={styles.grid}>
        {chapters.map((chapter) => (
          <div key={chapter.id} className={styles.item}>
            <Chapter chapter={chapter} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
