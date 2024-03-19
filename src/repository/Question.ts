import { getDBData, setDBData } from '../firebase/firebase';
import { Question } from '../model/Question';

export const getQuestions = async () => {
  const data = await getDBData();
  return data?.questions ?? undefined;
};

export const getQuestionById = async (id: string) => {
  const questions = await getQuestions();
  return questions.filter((q: any) => q.id === id)[0] ?? undefined;
};

export const postQuestion = async (question: Question) => {
  const questions = await getQuestions();
  if (questions === undefined) {
    await setDBData('questions', [question]);
  } else {
    await setDBData('questions', [...questions, question]);
  }
};
