import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import styles from './styles';

const illustration = require('../../assets/images/home-illustration.png');
const cardsData = [
  {
    id: 1,
    imgUrl: require('../../assets/images/home-symptoms.png'),
  },
  {
    id: 2,
    imgUrl: require('../../assets/images/home-best-practices.png'),
  },
  {
    id: 3,
    imgUrl: require('../../assets/images/home-cases.png'),
  },
];

const Home = () => {
  return (
    <View style={styles.screen}>
      <Image
        style={styles.illustration}
        source={illustration}
      />
      <Text style={styles.title}>Làm gì để ngăn chặn
        <Text style={styles.titleBold}> COVID-19</Text>?
      </Text>
      <View style={styles.cardsContainer}>
        {
          cardsData.map(card => <Image key={card.id} style={styles.card} source={card.imgUrl} />)
        }
      </View>
    </View>
  );
};

export default Home;
