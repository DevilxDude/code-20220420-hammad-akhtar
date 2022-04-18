import { Chapter as ChapterType } from 'data/chapters';
import { FC } from 'react';
import styles from './index.module.scss';

interface Props {
  chapter: ChapterType;
}

const Chapter: FC<Props> = ({ chapter }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={chapter.image} alt={chapter.title} />
      <div className={styles.description}>
        <h4 className={styles.name}>{chapter.title}</h4>
        <div className={styles.info}>{chapter.description}</div>
      </div>
    </div>
  );
};

export default Chapter;
