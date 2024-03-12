import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 560px;
  height: calc(100vh - 160px);
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  gap: 16px;
  overflow-y: auto;
  min-height: 0;
`;

const Layout = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SubTitle = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
`;

const OneLineInput = styled.input`
  all: unset;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.03);
  font-size: 14px;
  border-radius: 8px;
`;

const TextAreaInput = styled.textarea`
  all: unset;
  width: 100%;
  height: 200px;
  padding: 16px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.03);
  font-size: 12px;
  border-radius: 8px;
`;

const Button = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #24a0ed;
  color: white;
  cursor: pointer;
  margin-left: auto;
  font-size: 14px;
  font-weight: 500;
`;

interface Props {
  onClose: () => void;
}

const NewQuestionModal = ({ onClose }: Props) => {
  return (
    <Container
      onClick={() => {
        onClose();
      }}
    >
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Layout>
          <SubTitle>Title</SubTitle>
          <OneLineInput placeholder="Type question title" />
          <SubTitle>Detail</SubTitle>
          <TextAreaInput placeholder="Type question detail" />
          <SubTitle>Example user message</SubTitle>
          <TextAreaInput placeholder="Type example user message" />
          <SubTitle>Example AI answer</SubTitle>
          <TextAreaInput placeholder="Type example AI answer" />
          <Button>Post</Button>
        </Layout>
      </ModalContainer>
    </Container>
  );
};

export default NewQuestionModal;
