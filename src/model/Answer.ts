export interface Answer {
  id: string;
  userId: string;
  createdTime: string;
  questionId: string;
  title: string;
  content: string;
  forkId: string | null;
  forkCount: number;
}
