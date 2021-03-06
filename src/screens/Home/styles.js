import { StyleSheet } from 'react-native';

import {
  COLOR_TEXT_PRIMARY,
  COLOR_BACKGROUND,
} from '../../constants/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },
  illustration: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  title: {
    flex: 3,
    fontFamily: 'BeVietnam-Regular',
    fontSize: 28,
    lineHeight: 41,
    color: COLOR_TEXT_PRIMARY,
    marginTop: '10%',
    paddingHorizontal: '5%',
  },
  titleBold: {
    fontFamily: 'BeVietnam-Bold',
  },
  cardsContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  card: {
    width: '90%',
    resizeMode: 'contain',
  },
});

export default styles;
