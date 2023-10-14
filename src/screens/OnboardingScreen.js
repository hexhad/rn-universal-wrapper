import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import "react-native-gesture-handler";
import { RootNavigation } from "../navigation/RootNavigation";
import { SCREEN_NAMES } from "../utils/constants";
export default () => {
  return (
    <SafeAreaView>
      <Text>Onb</Text>
      <TouchableOpacity onPress={()=> RootNavigation.navigate(SCREEN_NAMES.BOTTOM_NAV)}>
        <Text>Nav to Bottom</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
