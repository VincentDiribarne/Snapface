import {FaceSnapModel} from '@/features/snaps/models/face-snap';
import {UserProps} from '@/features/profil/models/user.type';

export class UserModel {
  id: string
  name: string
  imageURL: string
  description: string
  followers: string[]
  following: string[]
  snaps: FaceSnapModel[]

  constructor({ name, imageURL, description, followers = [], following = [], snaps = [] }: UserProps) {
    this.id = this.toId(name)
    this.name = name
    this.imageURL = imageURL
    this.description = description ?? ''
    this.followers = followers
    this.following = following
    this.snaps = snaps.map(snap => new FaceSnapModel(snap, this.id))
  }

  private toId(name: string): string {
    return name
      .normalize('NFD')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
  }
}
