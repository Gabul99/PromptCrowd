import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const LeftArea = styled.div`
  width: 440px;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  overflow-y: auto;
  min-height: 0;
  max-height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
`;

export const ExplanationArea = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 8px;
  padding: 20px 0;

  * {
    word-wrap: break-word;
  }

  .title {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
  }

  .description {
    width: 100%;
    font-size: 14px;
    line-height: 150%;
    font-weight: 400;
  }

  .sub-title {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
  }

  .case-block {
    width: 100%;
    padding: 16px;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.03);
    font-size: 14px;
    font-weight: 400;
    white-space: pre-wrap;
  }
`;

export const AnswerListArea = styled.div`
  width: 320px;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 0;
  max-height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
`;

export const AnswerList = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const AnswerListItem = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 12px;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  .placeholder {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
  }

  .title {
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  &.selected {
    background-color: rgba(0, 0, 0, 0.03);
  }

  .forkCountContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    gap: 4px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const PromptArea = styled.div`
  flex-grow: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.03);
`;

export const TextAndEditorArea = styled.div`
  width: 100%;
  flex-grow: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const PromptTestBar = styled.div`
  width: 100%;
  flex-shrink: 0;
  height: 64px;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;

export const ViewerPlaceholder = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;

export const PostButton = styled.div`
  width: fit-content;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #24a0ed;
  color: white;
  cursor: pointer;
  margin-left: auto;
  font-size: 14px;
  font-weight: 500;
`;

export const GPTButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  color: white;
  background-color: #00a67e;
  border-radius: 4px;
  cursor: pointer;
  gap: 4px;
  font-size: 14px;

  .icon {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }

  &.inactive {
    background-color: lightgray;
    cursor: not-allowed;
  }
`;
