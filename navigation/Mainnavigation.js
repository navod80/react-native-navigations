import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from '../screens/MainScreen';
import changePasswordScreen from '../screens/changePassword';
import MyApp from '../screens/drawerScreen';

const MainNavigator = createStackNavigator({
  Main : {screen: MainScreen,
          navigationOptions: {
                header: null,
      }
    },
  Password : {screen: changePasswordScreen,
        navigationOptions: {
              header: null,
      }
    },

  Drawer : {screen: MyApp,
            navigationOptions: {
              header: null,
            }
  }
//   Profile: {screen: ProfileScreen},
});



const AppConstainer = createAppContainer(MainNavigator);

export default AppConstainer;