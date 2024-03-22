import { getDBData, setDBData } from '../firebase/firebase';
import { Answer } from '../model/Answer';

export const getAnswers = async () => {
  const data = await getDBData();
  return data?.answers ?? undefined;
};

export const getAnswersByQuestionId = async (qId: string) => {
  const answers = await getAnswers();
  return answers?.filter((a: any) => a.questionId === qId) ?? undefined;
};

export const postAnswer = async (answer: Answer) => {
  const answers = await getAnswers();
  if (answers === undefined) {
    await setDBData('answers', [answer]);
  } else {
    await setDBData('answers', [...answers, answer]);
  }
};

export const addForkCount = async (forkedId: string) => {
  const answers = await getAnswers();
  if (!answers) return;
  await setDBData(
    'answers',
    answers.map((a: Answer) => {
      if (a.id === forkedId) {
        return {
          ...a,
          forkCount: a.forkCount + 1,
        };
      } else {
        return a;
      }
    })
  );
};
