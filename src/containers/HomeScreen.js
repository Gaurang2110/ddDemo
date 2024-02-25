import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import SvgIcons from '../assets/SvgIcons';
import {colors} from '../assets/colors';
import {wp, hp, normalize} from '../helper/responsive';
import {useDispatch, useSelector} from 'react-redux';
import {
  addPopularClass,
  addPopularFav,
  addToFavorites,
  removeFromFavorites,
  removePopularClass,
  removePopularFav,
} from '../redux/slice/favoriteSlice';
import {imageList} from '../assets/imageList';
import GymCard from '../components/gymCard';
import MenuView from '../components/menuView';
import PopularCard from '../components/popularCard';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const gymsData = useSelector(state => state.favorite.gymsData);
  const popularData = useSelector(state => state.favorite.popularFavData);
  const popularClass = useSelector(state => state.favorite.popularClass);

  const onFavPress = item => {
    if (item?.favorite) {
      dispatch(removeFromFavorites(item));
    } else {
      dispatch(addToFavorites(item));
    }
  };
  const onPopularFavPress = item => {
    if (item?.favorite) {
      dispatch(removePopularFav(item));
    } else {
      dispatch(addPopularFav(item));
    }
  };

  onMenuPress = item => {
    if (item?.include) {
      dispatch(removePopularClass(item));
    } else {
      dispatch(addPopularClass(item));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.blueBox}>
          <View style={{flex: 1}}>
            <SvgIcons.Dumbell />
          </View>
          <View style={styles.menuView}>
            <SvgIcons.Map />
            <SvgIcons.Search />
            <View style={styles.imgView}>
              <Image
                source={imageList.profile}
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
                borderRadius={wp(3.5)}
              />
            </View>
          </View>
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.heading}>Recommanded Gyms</Text>
          <FlatList
            horizontal
            data={gymsData}
            bounces={false}
            nestedScrollEnabled={true}
            disableIntervalMomentum={true}
            decelerationRate={'fast'}
            snapToInterval={wp(60)}
            style={{marginBottom: hp(1)}}
            contentContainerStyle={styles.contentStyle}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <GymCard item={item} onFavPress={item => onFavPress(item)} />
            )}
          />
          <Text style={styles.heading}>Popular Classes</Text>
          <FlatList
            horizontal
            nestedScrollEnabled={true}
            data={popularClass}
            renderItem={({item, index}) => (
              <MenuView item={item} onItemPress={item => onMenuPress(item)} />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: wp(4)}}
            style={{marginTop: hp(2)}}
          />
          <View style={{}}>
            <FlatList
              data={popularData}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
              renderItem={({item, index}) => (
                <PopularCard
                  item={item}
                  onFavPress={item => onPopularFavPress(item)}
                />
              )}
              style={{marginBottom: hp(1)}}
              contentContainerStyle={styles.boxStyle}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blueBox: {
    width: '100%',
    padding: wp(4),
    backgroundColor: colors.blue,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgView: {
    width: wp(7),
    height: wp(7),
  },
  menuView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.5,
  },
  heading: {
    fontSize: normalize(18),
    color: colors.black,
    fontWeight: 'bold',
  },
  subContainer: {margin: wp(4), marginRight: wp(0)},
  contentStyle: {paddingVertical: hp(2), marginLeft: wp(1)},
  boxStyle: {
    paddingVertical: wp(1),
    marginLeft: wp(1),
  },
});
