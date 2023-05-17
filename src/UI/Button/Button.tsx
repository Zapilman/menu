import { FC, PropsWithChildren } from 'react';

import cn from 'classnames';

import styles from './Button.module.scss';

interface Props {
  disabled?: boolean;
  onClick?: VoidFunction;
  classNames?: string;
}

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  disabled,
  onClick,
  classNames,
}) => {
  return (
    <button
      className={cn(
        styles.buttonWrapper,
        {
          [styles.buttonWrapper_disabled]: disabled,
        },
        classNames,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
