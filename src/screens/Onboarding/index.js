import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';

import { SCREENS_NAVIGATION } from '../../constants/navigation';
import styles from './styles';

const slides = [
  {
    key: '1',
    image: require('../../assets/images/onboarding-1.png'),
    title: 'Phòng chống',
    subTitle: 'COVID-19',
    description: 'với những hướng dẫn\nchính thức từ cơ quan y tế',
  },
  {
    key: '2',
    image: require('../../assets/images/onboarding-2.png'),
    title: 'Theo sát',
    subTitle: 'diễn biến dịch',
    description: 'qua những số liệu\nđược cập nhật nhanh nhất',
  },
  {
    key: '3',
    image: require('../../assets/images/onboarding-3.png'),
    title: 'Khai báo',
    subTitle: 'y tế',
    description: 'dễ dàng hơn với\ntính năng truy vết tự động',
  },
];

const gradient = require('../../assets/images/onboarding-gradient.png');
const nextButton = require('../../assets/images/onboarding-next.png');

const Onboarding = () => {
  const navigation = useNavigation();

  const handleRenderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.illustration} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.gradientContainer}>
          <Image source={gradient} style={styles.gradient} />
        </View>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <Image source={nextButton} style={styles.nextButton} />
    );
  };

  const renderDoneButton = () => {
    return (
      <Pressable onPress={() => navigation.navigate(SCREENS_NAVIGATION.HOME_SCREEN)}>
        <View>
          <Image source={nextButton} style={styles.nextButton} />
        </View>
      </Pressable>
    );
  };

  return (
    <AppIntroSlider
      renderItem={handleRenderItem}
      data={slides}
      bottomButton={true}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
    />
  );
};

export default Onboarding;
