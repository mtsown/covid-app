import { StyleSheet } from 'react-native';
import {
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_BACKGROUND,
  COLOR_BACKGROUND_BUTTON_PRIMARY,
  COLOR_PAGINATION_DOT,
  COLOR_PAGINATION_DOT_ACTIVE,
} from '../../constants/colors';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },
  illustration: {
    marginTop: '13.5%',
    marginHorizontal: '3%',
  },
  title: {
    fontFamily: 'BeVietnam-Bold',
    fontSize: 28,
    lineHeight: 41,
    textAlign: 'center',
    color: COLOR_TEXT_PRIMARY,
    marginTop: '8%',
  },
  subTitle: {
    fontFamily: 'BeVietnam-Regular',
    fontSize: 28,
    lineHeight: 41,
    textAlign: 'center',
    color: COLOR_TEXT_PRIMARY,
  },
  description: {
    fontFamily: 'BeVietnam-Regular',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: COLOR_TEXT_SECONDARY,
    marginTop: '5%',
  },
  gradientContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  gradient: {
    resizeMode: 'cover',
    width: '100%',
  },
  nextButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '-7.8%',
    marginTop: '52.2%',
  },
  dot: {
    width: 6.92,
    aspectRatio: 1,
    borderRadius: 6.92,
    backgroundColor: COLOR_PAGINATION_DOT,
  },
  activeDot: {
    width: 17.31,
    height: 6.92,
    borderRadius: 6.92,
    backgroundColor: COLOR_PAGINATION_DOT_ACTIVE,
  },
});

export default styles;
