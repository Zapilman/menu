import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface Props {
  disabled?: boolean;
  onClick?: VoidFunction;
}

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={cn(styles.buttonWrapper, {
        [styles.buttonWrapper_disabled]: disabled,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
