import { FC } from 'react';
import { Collapse } from 'react-collapse';
import { Link } from 'react-router-dom';

import { useSearchParam } from 'src/hooks/useSearchParam';

import styles from './MenuCollapse.module.scss';
import { IMenuCollapseProps } from './MenuCollapse.types';

const MenuCollapse: FC<IMenuCollapseProps> = ({ headerText, categories }) => {
  const section = useSearchParam('section');

  return (
    <div>
      <Link to={`?section=${headerText}`} className={styles.navBtn}>
        {headerText}
      </Link>

      <Collapse
        isOpened={section === headerText}
        theme={{ collapse: styles.collapse }}
      >
        <ul className={styles.optionWrapper}>
          {categories?.map((category, index) => {
            return (
              <li key={category.name}>
                <a href={`#${category.name}`}>{category.name}</a>
              </li>
            );
          })}
        </ul>
      </Collapse>
    </div>
  );
};

export default MenuCollapse;
