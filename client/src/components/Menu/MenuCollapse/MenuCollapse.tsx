import classNames from 'classnames';
import React, { FC } from 'react';
import { Collapse } from 'react-collapse';
import { Link } from 'react-router-dom';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { useSearchParam } from 'src/hooks/useSearchParam';

import styles from './MenuCollapse.module.scss';
import { IMenuCollapseProps } from './MenuCollapse.types';

const MenuCollapse: FC<IMenuCollapseProps> = ({
  headerText,
  onCollapseHeaderClick,
  open,
}) => {
  const section = useSearchParam('section');

  return (
    <div>
      {/* <Button onClick={onCollapseHeaderClick} classNames={styles.navBtn}>
        {headerText}
      </Button> */}
      <Link
        className={classNames(styles.navBtn, {
          [styles.active]: headerText === section,
        })}
        to={'/restaurant/menu' + `?section=${headerText}`}
        onClick={onCollapseHeaderClick}
      >
        {headerText}
      </Link>
      <Collapse isOpened={open}>
        {/* <ul className={styles.optionWrapper}>
          {options.map((option, index) => {
            return <li key={index}>{option}</li>;
          })}
        </ul> */}
      </Collapse>
    </div>
  );
};

export default MenuCollapse;
