export interface Answer {
  id: string;
  userId: string;
  createdTime: string;
  questionId: string;
  title: string;
  content: string;
  temperature: number;
  topP: number;
  forkId: string | null;
  forkCount: number;
}
