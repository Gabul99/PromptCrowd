import PromptEditor from '../component/PromptEditor';
import PromptViewer from '../component/PromptViewer';
import * as S from './Detail.style';

const DetailPage = () => {
  return (
    <S.Container>
      <S.LeftArea>
        <S.ExplanationArea>
          <div className="title">Title</div>
          <div className="description">Description</div>
          <div className="sub-title">Example Question</div>
          <div className="case-block">Example</div>
          <div className="sub-title">Expected Answer Format</div>
          <div className="case-block">ExampleExampleExampleExampleExampleExampleExampleExampleExampleExampleExampleExampleExampleExampleExample</div>
        </S.ExplanationArea>
      </S.LeftArea>
      <S.AnswerListArea>
        <S.AnswerList>
          <S.AnswerListItem>
            <p className="placeholder">New Answer...</p>
          </S.AnswerListItem>
          <S.AnswerListItem>
            <p className="title">I think it is better to think about this more difficult</p>
          </S.AnswerListItem>
        </S.AnswerList>
      </S.AnswerListArea>
      <S.PromptArea>
        <S.TextAndEditorArea>
          {/* <PromptEditor /> */}
          <PromptViewer />
        </S.TextAndEditorArea>
        <S.PromptTestBar />
      </S.PromptArea>
    </S.Container>
  );
};

export default DetailPage;
