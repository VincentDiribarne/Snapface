export class FaceSnapModel {
  constructor(public title: string, public description: string, public imageURL: string, public snap: SnapModel) {}
}

export class SnapModel {
  constructor(public snaps: number, public comments: number, public sends: number) {}

  addSnap(): void {
    this.snaps++
  }

  removeSnap(): void {
    this.snaps--;
  }
}
