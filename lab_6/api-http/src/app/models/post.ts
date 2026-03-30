export interface Post {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export class Comment {
  id!: number;
  postId!: number;
  name!: string;
  email!: string;
  body!: string;
}
