import NextImage, { type ImageProps } from 'next/image';
import { useState } from 'react';

export default function Image(props: ImageProps) {
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
