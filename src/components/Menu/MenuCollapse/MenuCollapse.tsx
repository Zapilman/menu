import { FC, useState } from 'react';
import { Collapse } from 'react-collapse';
import { Link } from 'react-router-dom';

import Button from '_UI/Button/Button';
import cn from 'classnames';
import { useSearchParam } from 'src/hooks/useSearchParam';

import styles from './MenuCollapse.module.scss';
import { IMenuCollapseProps } from './MenuCollapse.types';

const MenuCollapse: FC<IMenuCollapseProps> = ({
  headerText,
  onCollapseHeaderClick,
  open,
  categories,
}) => {
  const section = useSearchParam('section');

  return (
    <div>
      <div onClick={onCollapseHeaderClick} className={styles.navBtn}>
        {headerText}
      </div>

      <Collapse isOpened={open} theme={{ collapse: styles.collapse }}>
        <ul className={styles.optionWrapper}>
          {categories.map((category, index) => {
            return (
              <li key={category}>
                <a
                  className={cn(styles.navBtn, {
                    [styles.active]: headerText === section,
                  })}
                  href={`#${category}`}
                >
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
      </Collapse>
    </div>
  );
};

export default MenuCollapse;
