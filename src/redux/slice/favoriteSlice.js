import {createSlice} from '@reduxjs/toolkit';
import {gymData, headerData} from '../../helper/constant';

const initialState = {
  gymsData: gymData.gyms,
  popularFavData: gymData.gyms[0].popular_classes,
  popularClass: headerData,
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.gymsData = state.gymsData.map(gym => {
        if (gym.id === action.payload.id) {
          return {...gym, favorite: true};
        }
        return gym;
      });
    },
    removeFromFavorites: (state, action) => {
      state.gymsData = state.gymsData.map(gym => {
        if (gym.id === action.payload.id) {
          return {...gym, favorite: false};
        }
        return gym;
      });
    },
    addPopularFav: (state, action) => {
      state.popularFavData = state.popularFavData.map(gym => {
        if (gym.price === action.payload.price) {
          return {...gym, favorite: true};
        }
        return gym;
      });
    },
    removePopularFav: (state, action) => {
      state.popularFavData = state.popularFavData.map(gym => {
        if (gym.price === action.payload.price) {
          return {...gym, favorite: false};
        }
        return gym;
      });
    },
    addPopularClass: (state, action) => {
      state.popularClass = state.popularClass.map(gym => {
        if (gym.id === action.payload.id) {
          return {...gym, include: true};
        }
        return gym;
      });
    },
    removePopularClass: (state, action) => {
      state.popularClass = state.popularClass.map(gym => {
        if (gym.id === action.payload.id) {
          return {...gym, include: false};
        }
        return gym;
      });
    },
    // Other reducers can be defined here if needed
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  addPopularFav,
  removePopularFav,
  addPopularClass,
  removePopularClass
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
