import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerHorizontally: {
    flex: 1,
    alignItems: 'center',
  },
  textWrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    flexShrink: 1
  },
  textBlock: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    position: 'absolute',
    left: 10,
    flexShrink: 1
  },
  boldText: {
    fontWeight: 'bold'
  }
});
