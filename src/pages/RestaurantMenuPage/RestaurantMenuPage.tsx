import React, { useEffect } from 'react';
import MenuNavigation from '_modules/Menu/MenuNavigation/MenuNavigation';
import MenuActivity from '_modules/Menu/MenuActivity/MenuActivity';
import { useAppDispatch, useAppSelector } from '_store/store';
import { getRestaurant } from '_store/reducers/restaurant/restaurant.thunk';
import DishesList from '_modules/Menu/DishesList/DishesList';
import { getRestaurantStatusSelector } from '_store/reducers/restaurant/restaurant.select';
import CenterContainer from '_UI/CenterContainer/CenterContainer';

const RestaurantMenuPage = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(getRestaurantStatusSelector);

  useEffect(() => {
    dispatch(getRestaurant());
  }, []);

  if (status !== 'succeeded') {
    return <div>loading</div>;
  }

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
          gridTemplateRows: 'max-content',
          columnGap: '10px',
          marginTop: '30px',
          position: 'relative',
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
