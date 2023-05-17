import { shallowEqual, useSelector } from "react-redux";

function useShallowEqual(stateVoid) {
  return useSelector((stateVoid), shallowEqual)
}
export default useShallowEqual