import {flow} from "mobx";

export const generatorAction = (fn, context) => {
  return flow(fn.bind(context))
};
