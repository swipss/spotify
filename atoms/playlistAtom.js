import { atom } from "recoil";

export const playlistIdState = atom({
  key: "playlistIdState",
  default: "",
});

export const playlistAtom = atom({
  key: "playlistAtomState",
  default: null,
});
