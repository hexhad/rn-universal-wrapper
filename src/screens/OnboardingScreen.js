import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import "react-native-gesture-handler";
import { RootNavigation } from "../navigation/RootNavigation";
import { SCREEN_NAMES } from "../utils/constants";
import { useTheme } from "../theme/ThemContex";
import { useEffect } from "react";

export default () => {
  const { selectedTheme, toggleState } = useTheme();

  useEffect(() => {
    console.log('ONBARDING SCREENNNNNNNNNNNN',selectedTheme);
  }, [selectedTheme]);

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: selectedTheme==='dark'?'yellow':'#fff'}}>
        <Text>Onb</Text>
        <TouchableOpacity onPress={() => RootNavigation.navigate(SCREEN_NAMES.BOTTOM_NAV)}>
          <Text>Nav to Bottom</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleState()}>
          <Text>Theme</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
