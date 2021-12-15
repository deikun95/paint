import { makeAutoObservable } from "mobx";

class ToolModule {
  tool = null;
  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool) {
    this.tool = tool;
  }
}

export default new ToolModule();