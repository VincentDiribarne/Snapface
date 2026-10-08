import {SnapType} from './snap-type.type';

export class FaceSnapModel {
  id: string
  relativeDate!: string
  location?: string

  constructor(public user: UserSnapModel, public description: string, public imageURL: string, public createdAt: Date, public snapModel: SnapModel) {
    this.id = crypto.randomUUID().substring(0, 8);
  }

  setLocation(location: string) {
    this.location = location;
  }

  withLocation(location: string): FaceSnapModel {
    this.setLocation(location);
    return this;
  }

  snap(type: SnapType) {
    this.snapModel.snap(type)
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

  snap(type: SnapType) {
    type === 'snap' ? this.addSnap() : this.removeSnap();
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
