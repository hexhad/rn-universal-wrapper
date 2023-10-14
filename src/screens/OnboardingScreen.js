import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { RootNavigation } from "../navigation/RootNavigation";
import { SCREEN_NAMES } from "../utils/constants";
import { useTheme } from "../theme/ThemContex";
import { useEffect } from "react";

export default () => {
  const theme = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <SafeAreaView>
      <Text>Onb</Text>
      <TouchableOpacity onPress={() => RootNavigation.navigate(SCREEN_NAMES.BOTTOM_NAV)}>
        <Text>Nav to Bottom</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => theme.toggleState()}>
        <Text>Theme</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
