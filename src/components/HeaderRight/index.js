import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './style'

export default class HeaderRight extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func
    }).isRequired
  }

  signOut = async () => {
    await AsyncStorage.clear()

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Welcome' })]
    })

    this.props.navigation.dispatch(resetAction)
  }

  render() {
    {
      console.tron.log(this.props)
    }
    return (
      <TouchableOpacity onPress={this.signOut}>
        <Icon name="exchange" size={16} style={styles.icon} />
      </TouchableOpacity>
    )
  }
}
