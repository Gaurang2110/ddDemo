import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../helper/responsive';
import {colors} from '../assets/colors';
import SvgIcons from '../assets/SvgIcons';

const PopularCard = ({item, onFavPress}) => {
  return (
    <View style={styles.cardView}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            source={item?.image}
            style={styles.imgView}
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => onFavPress(item)}
            style={styles.favView}>
            {item.favorite ? (
              <SvgIcons.FavFill width={wp(8)} height={wp(8)} />
            ) : (
              <SvgIcons.Favorite width={wp(8)} height={wp(8)} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.subView}>
          <View style={styles.rowBetween}>
            <Text style={styles.titleText}>{item?.title}</Text>
            <Text style={styles.priceText}>
              {`$${item?.price / 10}\n`}
              <Text style={styles.lightText}>{`  /day`}</Text>
            </Text>
          </View>
          <Text style={styles.subText}>Gym "Seven"</Text>

          <View style={styles.multiText}>
            <SvgIcons.Location />
            <Text style={styles.greyText}>{item?.location}</Text>
          </View>

          <View style={styles.rowCenter}>
            <SvgIcons.Watch />
            <Text style={styles.greyText}>{item?.time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  cardView: {
    width: wp(90),
    backgroundColor: colors.white,
    height: wp(38),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: hp(2),
    borderRadius: wp(3),
  },
  imgView: {width: wp(40), height: wp(38)},
  favView: {position: 'absolute', right: wp(3), top: wp(3), shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,},
  subView: {padding: wp(3), paddingRight: wp(0)},
  rowBetween: {flexDirection: 'row', justifyContent: 'space-between'},
  titleText: {
    fontSize: normalize(16),
    fontWeight: '600',
    width: wp(36),
  },
  priceText: {
    fontSize: normalize(16),
    color: colors.blue,
    fontWeight: '500',
    width: wp(10),
  },
  lightText: {
    color: colors.lightBlack,
    fontWeight: '300',
    fontSize: normalize(12),
  },
  subText: {
    fontSize: normalize(16),
    fontWeight: '400',
    color: colors.grey,
    paddingVertical: wp(1),
    paddingLeft: wp(1),
  },
  multiText: {
    flexDirection: 'row',
    marginVertical: wp(3),
    alignItems: 'center',
  },
  greyText: {
    paddingLeft: wp(1),
    color: colors.grey,
    fontSize: normalize(14),
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(1),
    paddingBottom: wp(2),
  },
});
