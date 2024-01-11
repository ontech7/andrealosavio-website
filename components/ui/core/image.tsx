import NextImage, { type ImageProps } from 'next/image';
import { FC, useState } from 'react';

interface IImageProps extends ImageProps {}

const Image: FC<IImageProps> = (props) => {
  const [isLoaded, setLoaded] = useState(false);
  const loaded = () => setLoaded(true);

  return (
    <NextImage
      {...props}
      sx={{ opacity: !isLoaded ? 0 : 1, transition: "opacity 0.5s ease" }}
      onLoad={loaded}
    />
  )
}

export default Image;