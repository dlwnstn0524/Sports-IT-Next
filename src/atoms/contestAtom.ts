import { IEvent } from "@component/interfaces/eventInterface";
import { WeightCost } from "@component/interfaces/weightCostInterface";

import { atom, selector } from "recoil";

export const contestEventAtom = atom<IEvent>({
  key: "contestEvent",
  default: {
    팔씨름: false,
    배구: false,
    농구: false,
    축구: false,
    수영: false,
    배드민턴: false,
    태권도: false,
    체조: false,
    탁구: false,
    테니스: false,
    육상: false,
    검도: false,
    볼링: false,
    야구: false,
    족구: false,
    합기도: false,
    풋살: false,
    골프: false,
    요가: false,
  },
});

export const contestEventCountAtom = atom<number>({
  key: "contestEventCount",
  default: 0,
});

export const weightcostAtom = atom<WeightCost>({
  key: "weightcostAtom",
  default: {
    cost: 0,
    extraCost: 0,
  },
});

export const contestEventSelector = selector({
  key: "contestEventSelector",
  get: ({ get }) =>
    Object.keys(get(contestEventAtom)).find(
      (key) => get(contestEventAtom)[key] === true
    ),
});

export const contestNameAtom = atom<string | null>({
  key: "contestName",
  default: "",
});

export const contestStartDateAtom = atom<string | null>({
  key: "contestStartDate",
  default: "",
});

export const contestEndDateAtom = atom<string | null>({
  key: "contestEndDate",
  default: "",
});

export const contestRecruitingStartAtom = atom<string | null>({
  key: "contestRecruitingStart",
  default: "",
});

export const contestRecruitingEndAtom = atom<string | null>({
  key: "contestRecruitingEnd",
  default: "",
});

export const contestTotalPrizeAtom = atom<number | null>({
  key: "contestTotalPrize",
  default: 0,
});

export const contestContentAtom = atom<string | null>({
  key: "contestContent",
  default: "",
});

export const contestLocationAtom = atom<string | null>({
  key: "contestLocation",
  default: "",
});

export const contestLocationDetailAtom = atom<string | null>({
  key: "contestLocationDetail",
  default: "",
});

export const contestMaxPlayerAtom = atom<number | null>({
  key: "contestMaxPlayer",
  default: null,
});

export const contestMaxViewerAtom = atom<number | null>({
  key: "contestMaxViewer",
  default: null,
});

export const contestTemplateIdAtom = atom<number | null>({
  key: "contestTemplateId",
  default: 0,
});

export const contestPosterList = atom<File[]>({
  key: "contestPosterList",
  default: [],
});
