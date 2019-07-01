import {createAppContainer, createStackNavigator} from "react-navigation";
import PeoplePage from './src/pages/PeoplePage';

const AppNavigator = createStackNavigator(
    {
        Main: {
            screen: PeoplePage
        }
    }, 
    {
        defaultNavigationOptions: {
            title: 'PESSOAS',
            headerStyle: {
                backgroundColor: '#6ca2f7',
                borderBottomWidth: 1,
                borderBottomColor: '#c5c5c5'
            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 30,
                flexGrow: 1,
                textAlign: 'center'
            }
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;