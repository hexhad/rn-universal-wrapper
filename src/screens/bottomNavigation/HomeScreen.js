import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { connect } from "react-redux";
import { DummyFunctions } from "../../redux/action/dummyAction";
import Loader from "../../components/Loader";

const mapState = (state) => ({
  dummyLoading: state?.dummy?.loading ?? false,
  dummyData: state?.dummy?.data,
  dummyError: state?.dummy?.error,
});

const mapDispatch = {
  loader: DummyFunctions.dummyActionCurry,
};
const connector = connect(mapState, mapDispatch);
const HomeScreen = ({ dummyLoading, loader }) => {
  const onPressAction = () => {
    loader();
  };
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <TouchableOpacity onPress={onPressAction}>
        <Text>Loader</Text>
      </TouchableOpacity>
      <Loader visible={dummyLoading} />
    </SafeAreaView>
  );
};

export default connector(HomeScreen);
