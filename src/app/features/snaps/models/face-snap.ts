import {FaceSnapProps, SnapType} from './snap.type';

export class FaceSnapModel {
  id: string
  relativeDate!: string
  location?: string
  description: string
  imageURL: string
  createdAt: Date
  snapModel: SnapModel
  userId: string

  constructor(props: FaceSnapProps, userId: string) {
    this.id = crypto.randomUUID().substring(0, 8);
    this.description = props.description;
    this.imageURL = props.imageURL;
    this.location = props.location;
    this.createdAt = new Date(props.createdAt)
    this.snapModel = new SnapModel(props.snaps, props.comments, props.sends);
    this.userId = userId
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
