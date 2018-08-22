import { StyleSheet } from 'react-native'

import { metrics, general } from 'styles'

const styles = StyleSheet.create({
  container: {
    ...general.box,
    flex: 1,
    marginTop: metrics.baseMargin + 10,
    alignItems: 'center',
    maxWidth: (metrics.screenWidth - 60) / 2
  },
  avatar: {
    height: 50,
    width: 50
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: metrics.baseMargin
  }
})

export default styles
