import React, { useState } from 'react';
import Select from 'react-select';

import { LocalManager, TLanguage } from '_store/managers/LocaleManager';

import styles from './LanguageSelect.module.scss';

interface TOption {
  value: TLanguage;
  label: string;
}

const options: TOption[] = [
  { value: 'ua', label: 'UA' },
  { value: 'en', label: 'EN' },
];

const LanguageSelect = () => {
  const [selectedOption, setSelectedOption] = useState<TOption>(
    options.find((o) => o.value === LocalManager.getLocale()),
  );

  const handleLanguageChange = (language: TOption) => {
    setSelectedOption(language);
    LocalManager.setLocale(language.value);

    // TODO: make LocalStore manager
    window.localStorage.setItem('lang', language.value);
  };

  return (
    <>
      <Select
        value={selectedOption}
        onChange={handleLanguageChange}
        options={options}
        className={styles.selectWrapper}
        placeholder="UA"
      />
    </>
  );
};

export default LanguageSelect;
