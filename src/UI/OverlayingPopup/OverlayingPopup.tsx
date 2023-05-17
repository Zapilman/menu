import { FC, PropsWithChildren, useEffect } from 'react';

import Portal from '_UI/Portal/Portal';

import styles from './OverlayingPopup.module.scss';

interface IOverlayingPopupProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const OverlayingPopup: FC<PropsWithChildren<IOverlayingPopupProps>> = ({
  children,
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Portal>
      <div className={styles.modal} role="dialog">
        <div
          className={styles.overlay}
          role="button"
          tabIndex={0}
          aria-label="Close"
          onClick={onClose}
        />
        <div style={{ zIndex: 101 }}>{children}</div>
      </div>
    </Portal>
  );
};

export default OverlayingPopup;
