import { FC, PropsWithChildren } from 'react';

import Portal from '_UI/Portal/Portal';

import styles from './OverlayingPopup.module.scss';

const OverlayingPopup: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Portal>
      <div className={styles.container} role="dialog">
        <div
          className={styles.overlay}
          role="button"
          tabIndex={0}
          aria-label="Close"
        />
        {children}
      </div>
    </Portal>
  );
};

export default OverlayingPopup;
