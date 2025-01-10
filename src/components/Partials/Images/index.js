import Image from 'next/image';
import React from 'react';

import styles from './Images.module.css';

export const Images = (props = {}) => {
  const { src, aspectRatio, flexGrow, alt, style, fromList, onClick } = props;

  const widthProps = props.width
    ? { width: props.width, height: props.height || 'auto' }
    : { fill: true };
  const Wrapper = fromList ? 'li' : 'div';

  return (
    <Wrapper
      onClick={onClick}
      className={styles.wrapperPostImage}
      style={{ aspectRatio, flexGrow }}
    >
      <Image
        src={src}
        alt={alt}
        {...widthProps}
        style={style}
        className={styles.postImage}
      />
    </Wrapper>
  );
}
