import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

import classNames from 'classnames';

import styles from './Input.module.scss';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  classNames?: string;
}

const Input: FC<Props> = (props) => {
  return (
    <input
      {...props}
      className={classNames(styles.inputWrapper, props.classNames)}
    />
  );
};

export default Input;
