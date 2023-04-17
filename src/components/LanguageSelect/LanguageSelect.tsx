import React, { useState } from 'react';
import Select from 'react-select';

import styles from './LanguageSelect.module.scss';

const LanguageSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: 'ua', label: 'UA' },
    { value: 'en', label: 'EN' },
  ];

  return (
    <Select
      value={selectedOption}
      onChange={setSelectedOption}
      options={options}
      className={styles.selectWrapper}
      placeholder="UA"
    />
  );
};

export default LanguageSelect;
