interface Props {
  width: number;
  height: number;
  className: string;
  src: string
  alt?: string
}

const Image = ({ ...props }: Props) => {
  return <img {...props} />;
};

export default Image;
