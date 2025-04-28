export type Post = {
  id: number
  username: string
  title: string
  content: string
  created_datetime: string
}

export type Posts = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}

export type PostFormData = {
  title: string
  content: string
  username?: string | null
}