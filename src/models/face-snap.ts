export class FaceSnapModel {
  relativeDate!: string
  location?: string

  constructor(public id: number, public user: UserSnapModel, public description: string, public imageURL: string, public createdAt: Date, public snap: SnapModel) {
  }

  setLocation(location: string) {
    this.location = location;
  }

  updateRelativeDate() {
    const now = new Date();
    const diff = now.getTime() - this.createdAt.getTime();

    const minutes = Math.max(1, Math.floor(diff / 60_000));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      this.relativeDate = `${days}j`;
    } else if (hours > 0) {
      this.relativeDate = `${hours}h`;
    } else {
      this.relativeDate = `${minutes}m`;
    }
  }
}

export class SnapModel {
  constructor(public snaps: number, public comments: number, public sends: number) {
  }

  addSnap(): void {
    this.snaps++
  }

  removeSnap(): void {
    this.snaps--;
  }


}

export class UserSnapModel {
  constructor(public name: string, public imageURL: string) {
  }
}
