import { DispatchType } from "../store";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { AllActions } from "../store/action-creators/AllActions";

export const useActions = () => {
  const dispatch = useDispatch<DispatchType>();
  return bindActionCreators(AllActions, dispatch)
}