import React, { FC } from 'react';

import { IShortInfoCardProps } from './ShortInfoCard.types';

const ShortInfoCard: FC<IShortInfoCardProps> = ({ title, text, icon }) => {
  return (
    <div>
      <div>{icon}</div>
      <div>
        <span>{title}</span>
        <h6>{text}</h6>
      </div>
    </div>
  );
};

export default ShortInfoCard;
