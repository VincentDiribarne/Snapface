export type FaceSnapProps = {
  description: string
  imageURL: string
  location?: string
  createdAt: Date | string
  snaps: number
  comments: number
  sends: number
}

export type SnapType = 'snap' | 'unsnap';
