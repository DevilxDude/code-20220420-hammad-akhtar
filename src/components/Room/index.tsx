import { FC } from 'react';
import { Room as RoomType } from 'data/rooms';
import styles from './index.module.scss';

interface Props {
  room: RoomType;
  onClick?: (_: number) => void;
}

const Room: FC<Props> = ({ room, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(room.id);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={room.image} alt={room.name} />
      <div className={styles.description}>
        <h4 className={styles.name}>{room.name}</h4>
        <div>
          <div className={styles.price}>{room.price}$</div>
          <div className={styles.size}>{room.area}м²</div>
          <button className={styles.button} onClick={handleClick}>
            Book!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;
