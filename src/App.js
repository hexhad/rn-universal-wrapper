import "react-native-gesture-handler";
import { navigationRef as ref } from "./navigation/RootNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { buildProvidersTree } from "./utils/MainWrapper";
import MainStack from "./navigation/main/MainStack";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Text, View } from "react-native";


const LoaderComp = () => {
  return (
    <View><Text>Hello</Text></View>
  );
};
const App = () => {
  const ProviderTree = buildProvidersTree([
    [Provider, { store }],
    [PersistGate, { persistor, loading: <LoaderComp /> }],
    [NavigationContainer, { ref }],
  ]);

  return (
    <ProviderTree>
      <MainStack />
    </ProviderTree>
  );
};

export default App;
