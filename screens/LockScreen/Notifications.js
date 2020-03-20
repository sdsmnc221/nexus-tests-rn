import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import Clock from '../../sharedUI/Clock';
import Notification from '../../sharedUI/Notification';

const NotificationsList = styled.ScrollView`
  width: 80%;
  max-height: 56%;
`;

const Swiper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const SwiperText = styled.Text`
  font-size: 11px;
  letter-spacing: 0.8px;
`;

const SwiperNotch = styled.View`
  margin-top: 5px;
  width: 100px;
  height: 5px;
  background-color: #565656;
`;

const NotificationsScreen = ({ navigation }) => {
  const onPress = () => navigation.navigate('LockScreen');

  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <Clock />
          <NotificationsList>
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
          </NotificationsList>
          <Swiper onPress={onPress}>
            <SwiperText>Swipe to unlock</SwiperText>
            <SwiperNotch />
          </Swiper>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#c4c4c4',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 12,
  }
});

export default NotificationsScreen;
