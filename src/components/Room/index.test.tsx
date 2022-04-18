import { render } from '@testing-library/react';
import Room from 'components/Room';
import rooms from 'data/rooms';

const room = rooms[0];

describe('Testing Room Component', () => {
  it('Render the name of the room', () => {
    const { getByText } = render(<Room room={room} />);

    expect(getByText(room.name)).toBeInTheDocument();
  });

  it('Render the image of the room', () => {
    const { getByAltText } = render(<Room room={room} />);

    expect(getByAltText(room.name)).toBeInTheDocument();
    expect(getByAltText(room.name)).toHaveAttribute('src', room.image);
  });

  it('Render the price of the room in $', () => {
    const { getByText } = render(<Room room={room} />);

    expect(getByText(`${room.price}$`)).toBeInTheDocument();
  });

  it('Render the size in м²', () => {
    const { getByText } = render(<Room room={room} />);

    expect(getByText(`${room.area}м²`)).toBeInTheDocument();
  });

  it('Should have a book now button send id back to onClick', () => {
    let id = 0;

    const mockRoomBookNow = (roomId: number) => {
      id = roomId;
    };

    const { getByText } = render(<Room room={room} onClick={mockRoomBookNow} />);
    expect(getByText('Book!')).toBeInTheDocument();

    getByText('Book!').click();
    expect(id).toBe(room.id);
  });
});
