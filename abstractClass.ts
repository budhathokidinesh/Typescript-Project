abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
  abstract getSepia(): void;
  getReelTime(): number {
    //some complex calculation
    return 8;
  }
}
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter, burst);
  }
  getSepia(): void {
    console.log("hi");
  }
}
const dinesh = new Instagram("test", "test", 4);
