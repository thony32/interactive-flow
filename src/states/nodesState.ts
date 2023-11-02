/* eslint-disable @typescript-eslint/no-explicit-any */
import { Node } from "reactflow"
import { atom } from "recoil"

export const nodesState = atom<Node[]>({
  key: "nodesState",
  default: [],
})
