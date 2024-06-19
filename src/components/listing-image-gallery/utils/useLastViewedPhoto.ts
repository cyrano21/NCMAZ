import { createGlobalState } from "react-hooks-global-state";

interface GlobalState {
  photoToScrollTo: string | null;
}

const initialState: GlobalState = { photoToScrollTo: null };
const { useGlobalState } = createGlobalState(initialState);

export const useLastViewedPhoto = () => {
  return useGlobalState("photoToScrollTo");
};
