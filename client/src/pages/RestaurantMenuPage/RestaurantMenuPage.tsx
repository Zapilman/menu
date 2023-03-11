import React from 'react';
import DishesList from '_components/DishesList/DishesList';
import MenuNavigation from '_components/Menu/MenuNavigation/MenuNavigation';
import CenterContainer from '../../UI/CenterContainer/CenterContainer';

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
          gridTemplateColumns: '300px 1fr',
          columnGap: '10px',
          marginTop: '30px',
        }}
      >
        <MenuNavigation />
        <DishesList />
      </div>
    </CenterContainer>
  );
};

export default RestaurantMenuPage;
