import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {wp} from '../helper/responsive';
import {colors} from '../assets/colors';
import { getIcon } from '../helper/functions';

const MenuView = ({item, onItemPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onItemPress(item)}
      style={[
        styles.cardView,
        {backgroundColor: item?.include ? colors.blue : colors.white},
      ]}>
      {getIcon(item?.iconName, item?.include)}
    </TouchableOpacity>
  );
};

export default MenuView;

const styles = StyleSheet.create({
  cardView: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(8),

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginLeft: wp(1),

    marginRight: wp(4),
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
