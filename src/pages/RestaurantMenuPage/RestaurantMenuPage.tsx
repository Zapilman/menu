import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import CenterContainer from '_UI/CenterContainer/CenterContainer';
import Loader from '_UI/Loader/Loader';
import SelectedDishes from '_UI/modals/SelectedDishes/SelectedDishes';
import DishesList from '_modules/Menu/DishesList/DishesList';
import MenuActivity from '_modules/Menu/MenuActivity/MenuActivity';
import MenuNavigation from '_modules/Menu/MenuNavigation/MenuNavigation';
import { getRestaurantStatusSelector } from '_store/reducers/restaurant/restaurant.select';
import { getRestaurant } from '_store/reducers/restaurant/restaurant.thunk';
import { useAppDispatch, useAppSelector } from '_store/store';

const RestaurantMenuPage = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(getRestaurantStatusSelector);

  useEffect(() => {
    dispatch(getRestaurant());
  }, []);

  if (status !== 'succeeded') {
    return <Loader />;
  }

  return (
    <>
      <CenterContainer size="lg">
        <img
          src="https://prod-choiceqr-media.s3.eu-central-1.amazonaws.com/prod-eat-chinahid/thumbnail_EiVgDHH-bJQcIFK-vyHLSof_B-t-V.jpeg"
          style={{ width: '100%', borderRadius: 20 }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr 300px',
            gridTemplateRows: 'max-content',
            columnGap: '30px',
            marginTop: '30px',
            position: 'relative',
          }}
        >
          <MenuNavigation />
          <DishesList />
          <MenuActivity />
        </div>
      </CenterContainer>
      <Routes>
        <Route path={'selected-dishes'} element={<SelectedDishes />} />
      </Routes>
    </>
  );
};

export default RestaurantMenuPage;
