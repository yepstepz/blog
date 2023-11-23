import Image from "next/image";
import React from 'react';

import styles from './Images.module.css';

export default function (props = {}) {
  const { src, aspectRatio = "4/3", flexGrow, alt, style, fromList, onClick } = props;

  const widthProps = props.width ? { width: props.width } : { fill: true };
  const Wrapper = fromList ? 'li' : 'div';

  return (
    <Wrapper onClick={onClick} className={styles.wrapperPostImage} style={{ aspectRatio, flexGrow }}>
      <Image
        src={src}
        alt={alt}
        {...widthProps}
        style={style}
        className={styles.postImage}
      />
    </Wrapper>
  )
}
