import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import PreferencesScreen from "../screens/PreferencesScreen";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Style from "react-native-loading-spinner-overlay/src/style";

//https://www.youtube.com/watch?v=gPaBicMaib4
//https://reactnavigation.org/docs/tab-based-navigation/


const Tab = createBottomTabNavigator;

const Tabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                tabBarShowLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffffff',
                    borderRadius: 15,
                    height: 90
                }
            }}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="PreferencesScreen" component={PreferencesScreen} />
            <Tab.Screen name="SearchScreen" component={SearchScreen} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

const style = StyleSheet.create(

)

export default Tabs;