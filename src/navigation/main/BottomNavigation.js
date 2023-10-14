import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Bookmark, Coffee, Hexagon } from "react-native-feather";
import { SCREEN_NAMES } from "../../utils/constants";
import HomeScreen from "../../screens/bottomNavigation/HomeScreen";
import ExtraScreen from "../../screens/bottomNavigation/ExtraScreen";
import SettingsScreen from "../../screens/bottomNavigation/SettingsScreen";

export default () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={SCREEN_NAMES.HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Coffee
              stroke={focused ? "#000" : "#808080"}
              width={20}
              height={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.EXTRA_SCREEN}
        component={ExtraScreen}
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Bookmark
              stroke={focused ? "#000" : "#808080"}
              width={20}
              height={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Hexagon
              stroke={focused ? "#000" : "#808080"}
              width={20}
              height={20}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}
