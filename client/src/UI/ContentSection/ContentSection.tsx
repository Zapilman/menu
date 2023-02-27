import React, { FC, PropsWithChildren } from 'react';

import styles from './ContentSection.module.scss';

const ContentSection: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.sectionWrapper}>{children}</div>;
};

export default ContentSection;
