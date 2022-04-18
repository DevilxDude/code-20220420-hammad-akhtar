export interface Chapter {
  id: number;
  title: string;
  image: string;
  description: string;
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: 'Chapter I',
    image: '/assets/images/chapter-01.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
  },

  {
    id: 2,
    title: 'Chapter II',
    image: '/assets/images/chapter-02.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
  },
  {
    id: 3,
    title: 'Chapter III',
    image: '/assets/images/chapter-03.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
  },
  {
    id: 4,
    title: 'Chapter IV',
    image: '/assets/images/chapter-04.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
  },
];

export default chapters;
