import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScr'
import DetailsScreen from './DatailsScr'
import {
    STARGATE_HOME,
    STARGATE_DETAILS
} from '../route'

export default createStackNavigator(
    {
        [STARGATE_HOME]: HomeScreen,
        [STARGATE_DETAILS]: DetailsScreen
    },
    {
        initialRouteName: STARGATE_HOME,
        headerMode: 'none'
    }
)