import React from 'react'
import { AsyncStorage } from 'react-native'

import 'config/ReactotronConfig'
import 'config/DevToolsConfig'

import createNavigator from 'routes'

export default class App extends React.Component {
  state = {
    userChecked: false,
    userLogged: false
  }

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username')

    this.appLoaded(username)
  }

  appLoaded = username => {
    this.setState({ userChecked: true, userLogged: !!username })
  }

  render() {
    if (!this.state.userChecked) return null
    const Routes = createNavigator(this.state.userLogged)

    return <Routes />
  }
}
