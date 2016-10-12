import React, { Component, PropTypes } from 'react'
import {
  AppRegistry,
  DrawerLayoutAndroid,
  Navigator,
  View
} from 'react-native'


import Navigate from './src/utils/Navigate'
import Navigation from './src/containers/Navigation'
import Toolbar from './src/components/Toolbar'

import {
  getTheme
} from 'react-native-material-kit'

class IkhwanResume extends Component {

  static childContextTypes = {
    drawer: PropTypes.object,
    navigator: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      drawer: null,
      navigator: null
    };
  }

  getChildContext = () => {
    return {
      drawer: this.state.drawer,
      navigator: this.state.navigator
    }
  };

  setDrawer = (drawer) => {
    this.setState({
      drawer
    });
  };

  setNavigator = (navigator) => {
    this.setState({
      navigator: new Navigate(navigator)
    });
  };

  render() {
    const { drawer, navigator } = this.state;
    const navView = React.createElement(Navigation);

    return (
      <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => {
        if (drawer && navigator) {
          return navView;
        }
        return null;
      }}
      ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null }}
      >
      {drawer &&
        <Navigator
        initialRoute={Navigate.getInitialRoute()}
        navigationBar={<Toolbar icon='menu' onIconPress={drawer.openDrawer} />}
        configureScene={() => {
          return Navigator.SceneConfigs.FadeAndroid;
        }}
        ref={(navigator) => { !this.state.navigator ? this.setNavigator(navigator) : null }}
        renderScene={(route) => {
          if (this.state.navigator && route.component) {
            return (
              <View
              style={styles.scene}
              showsVerticalScrollIndicator={false}>
              <route.component title={route.title} path={route.path} {...route.props} />
              </View>
              );
          }
        }}
        />
      }
      </DrawerLayoutAndroid>
      );
  }

}




//register the main Component
AppRegistry.registerComponent('IkhwanResume', () => IkhwanResume);

const styles = {
  scene: {
    flex: 1,
    marginTop: 56
  }
};
