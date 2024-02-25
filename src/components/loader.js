import React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../assets/colors';
import { wp } from '../helper/responsive';

const Loader = ({ visible }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={visible} size="large" color="#0000ff" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicatorWrapper: {
    backgroundColor: colors.white,
    borderRadius: wp(3),
    padding: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;