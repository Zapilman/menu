import React, { FC, PropsWithChildren } from 'react';

import cn from 'classnames';

import styles from './CenterContainer.module.scss';

interface Props {
  className?: string;
  size?: 'lg' | 'md';
}

const CenterContainer: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  size,
}) => {
  const getContainerWidth = () => {
    switch (size) {
      case 'md':
        return '980px';
      default:
        return '1200px';
    }
  };

  return (
    <div
      style={{ width: getContainerWidth() }}
      className={cn(styles.container, className)}
    >
      {children}
    </div>
  );
};

export default CenterContainer;
