'use client';

import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { Images } from '../Images';

import styles from './Gallery.module.css';

export const Gallery = ({ images }) => {
  const [open, setOpen] = React.useState(-1);

  const Component = images?.length > 1 ? 'ul' : 'div';

  return (
    <>
      <Component className={styles.gallery}>
        {images?.map((props, i) => (
          <Images
            key={props.src}
            {...props}
            onClick={() => setOpen(i)}
            fromList={images.length > 1}
          />
        ))}
      </Component>
      <Lightbox
        index={open}
        open={open !== -1}
        close={() => setOpen(-1)}
        slides={images?.map(({ src }) => ({ src }))}
      />
    </>
  );
};
