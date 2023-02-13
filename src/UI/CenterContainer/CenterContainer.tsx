import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './CenterContainer.module.scss';

interface Props {
  className?: string;
}

const CenterContainer: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};

export default CenterContainer;
