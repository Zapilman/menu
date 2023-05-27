import React, { FC, PropsWithChildren } from 'react';

import cn from 'classnames';

import styles from './CenterContainer.module.scss';

interface Props {
  className?: string;
  size?: 'lg' | 'md' | 'sm' | 'xs';
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
      case 'sm':
        return '720px';
      case 'xs':
        return '540px';
      default:
        return '1200px';
    }
  };

  return (
    <div
      style={{ maxWidth: getContainerWidth() }}
      className={cn(styles.container, className)}
    >
      {children}
    </div>
  );
};

export default CenterContainer;
