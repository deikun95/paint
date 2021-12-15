import { makeAutoObservable } from "mobx";

class CanvasModule {
  canvas = null;
  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas) {
    this.canvas = canvas;
  }
}

export default new CanvasModule();