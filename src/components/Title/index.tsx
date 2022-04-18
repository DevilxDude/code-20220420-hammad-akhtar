import { FC } from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const Title: FC<Props> = ({ title, subtitle }) => {
  return (
    <div>
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
};

export default Title;
