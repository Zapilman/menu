import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import Button from '../../UI/Button/Button';

const MenuNavigation = () => {
  const [open, setOpen] = useState(false);
  const options = [
    'Чебуреки',
    'Янтики',
    'Супи',
    'Салати',
    'Піде',
    'Страви з тіста',
    'Мангал',
    'Закуски та гарніри',
    'Морозиво',
  ];
  return (
    <div>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        Меню
      </Button>
      <Collapse isOpened={open}>
        <ul>
          {options.map((option, index) => {
            return <li key={index}>{option}</li>;
          })}
        </ul>
      </Collapse>
    </div>
  );
};

export default MenuNavigation;
