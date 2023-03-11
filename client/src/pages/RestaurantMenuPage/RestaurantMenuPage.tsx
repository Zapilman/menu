import React from 'react';
import MenuNavigation from '_modules/Menu/MenuNavigation/MenuNavigation';
import DishesList from '_modules/Menu/DishesList/DishesList';
import CenterContainer from '../../UI/CenterContainer/CenterContainer';
import MenuActivity from '_modules/Menu/MenuActivity/MenuActivity';

const RestaurantMenuPage = () => {
  return (
    <CenterContainer size="lg">
      <img
        src="https://prod-choiceqr-media.s3.eu-central-1.amazonaws.com/prod-eat-chinahid/UgXVIGk-GMmTbUL-Xqfyrpt.jpeg"
        style={{ width: '100%', borderRadius: 20 }}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr 300px',
          columnGap: '10px',
          marginTop: '30px',
        }}
      >
        <MenuNavigation />
        <DishesList />
        <MenuActivity />
      </div>
    </CenterContainer>
  );
};

export default RestaurantMenuPage;
