import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "./BottomNavigation";
import { SCREEN_NAMES } from "../../utils/constants";
import OnboardingScreen from "../../screens/OnboardingScreen";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_NAMES.ONBOARDING_SCREEN} screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={SCREEN_NAMES.ONBOARDING_SCREEN}
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREEN_NAMES.BOTTOM_NAV}
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
