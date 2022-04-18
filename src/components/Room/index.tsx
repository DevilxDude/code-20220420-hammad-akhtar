import { FC } from 'react';
import styles from 'index.module.scss';
import { Room as RoomType } from 'data/rooms';

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
        <h4>{room.name}</h4>
        <span>{room.price}$</span>
        <span>{room.area}м²</span>
        <button onClick={handleClick}>Book!</button>
      </div>
    </div>
  );
};

export default Room;
