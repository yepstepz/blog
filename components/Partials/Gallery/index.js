import React from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import styles from "./Gallery.module.css";

export default ({ children }) => {
  const [open, setOpen] = React.useState(undefined);

  const Component = children.length > 1 ? 'ul' : 'div'

  return (
    <>
      <Component className={styles.gallery}>
        { 
          React.Children.map(children, (child, i) => React.cloneElement(child, { fromList: children.length > 1, onClick: () => setOpen(i)} ))
        }
      </Component>
      <Lightbox
        index={open}
        open={open !== undefined}
        close={() => setOpen(undefined)}
        slides={React.Children.map(children, child => ({ src: child.props.src }))}
      />
    </>
  );
}
