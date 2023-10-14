import { DUMMY } from "../types/types";
import { delay } from "../../utils/common";

const dummyActionCurry = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DUMMY.LOADING });
    await delay();
    dispatch({ type: DUMMY.SUCCESS, payload: 'success' });

  } catch (e) {
    dispatch({ type: DUMMY.FAILED, payload: e });
  }
}

export const DummyFunctions = {
  dummyActionCurry
}
