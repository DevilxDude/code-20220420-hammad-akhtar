export interface Room {
  id: number;
  name: string;
  price: number;
  area: number;
  image: string;
}

const rooms: Room[] = [
  {
    id: 1,
    name: 'Room with one king-size bed',
    price: 35,
    area: 28,
    image: '/assets/images/room-01.jpg',
  },
  {
    id: 2,
    name: 'Penthouse for 8 person',
    price: 2039,
    area: 438,
    image: '/assets/images/room-02.jpg',
  },
];

export default rooms;
