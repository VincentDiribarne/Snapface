import {FaceSnapProps} from '@/features/snaps/models/snap.type';
import {UserModel} from '@/features/profil/models/user';

export type UserProps = {
  name: string
  imageURL: string
  description?: string
  followers?: string[]
  following?: string[]
  snaps?: FaceSnapProps[]
}

export type ProfileProps = Omit<UserModel, "snaps">
