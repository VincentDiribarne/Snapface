import {FaceSnapModel} from '@/features/snaps/models/face-snap';

export type UserProps = {
  name: string
  imageURL: string
  followers?: string[]
  following?: string[]
  snaps?: FaceSnapModel[]
}
