import { create, StoreApi } from "zustand";

type State = {
  isPreviewProfile: boolean;
};

type Action = {
  togglePreviewProfile: () => void;
};
const store = (
  set: StoreApi<State & Action>["setState"],
  get: StoreApi<State & Action>["getState"],
) => ({
  isPreviewProfile: false,
  togglePreviewProfile: () =>
    set({ isPreviewProfile: !get().isPreviewProfile }),
});

const useAppStore = create<State & Action>(store);

export default useAppStore;
