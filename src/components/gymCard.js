import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../assets/colors';
import {normalize, wp} from '../helper/responsive';
import {imageList} from '../assets/imageList';
import SvgIcons from '../assets/SvgIcons';

const GymCard = ({item, onFavPress}) => {
  return (
    <View style={{}}>
      <View style={styles.imageView}>
        <Image source={imageList.map} style={{width: '100%', height: '100%'}} />
        <View style={styles.pinView}>
          <SvgIcons.Location width={wp(7)} height={wp(7)} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.imgView}>
          <Image source={item?.image} style={{width: '100%', height: '100%'}} />
        </View>
        <TouchableOpacity
          onPress={() => onFavPress(item)}
          style={styles.favView}>
          {item?.favorite ? (
            <SvgIcons.FavFill width={wp(8)} height={wp(8)} />
          ) : (
            <SvgIcons.Favorite width={wp(8)} height={wp(8)} />
          )}
        </TouchableOpacity>
        <View style={styles.textBoxView}>
          <View style={styles.rowCenter}>
            <Text style={styles.titleText}>{item?.title}</Text>
            <Text style={[styles.titleText, {color: colors.blue}]}>
              {`$${item?.price / 10}\n`}
              <Text style={styles.lightText}>{`  /day`}</Text>
            </Text>
          </View>
          <View style={styles.boxView}>
            <View style={styles.rowView}>
              <SvgIcons.Star width={wp(4)} height={wp(4)} />
              <Text style={styles.ratingView}>{item?.rating}</Text>
            </View>
            <Text style={styles.dateText}>{item?.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    width: wp(60),
    height: wp(20),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pinView: {position: 'absolute', top: wp(3), alignSelf: 'center'},
  card: {
    width: wp(60),
    borderRadius: wp(4),
    marginRight: wp(7),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: -10,
  },
  imgView: {width: wp(62), height: wp(40), alignSelf: 'center'},
  favView: {position: 'absolute', right: wp(3), top: wp(3)},
  textBoxView: {
    backgroundColor: colors.white,
    padding: wp(3),
    borderBottomLeftRadius: wp(4),
    borderBottomRightRadius: wp(4),
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center ',
  },
  titleText: {
    fontSize: normalize(16),
    color: colors.black,
    fontWeight: '500',
  },
  lightText: {
    color: colors.lightBlack,
    fontWeight: '300',
    fontSize: normalize(12),
  },
  boxView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: wp(3),
    marginBottom: wp(2),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingView: {paddingHorizontal: wp(2.5), color: colors.black},
  dateText: {color: colors.black, fontWeight: '300'},
});

export default GymCard;
