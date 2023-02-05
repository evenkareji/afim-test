import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { CommentAddForm } from '../molecules/CommentAddForm';
export const Comment = ({ isCommentModal, modalComment }) => {
  return (
    <SBox isCommentModal={isCommentModal}>
      <SHeader>
        <STitle>コメント</STitle>
        <CloseIcon onClick={modalComment} />
      </SHeader>
      <CommentAddForm />
    </SBox>
  );
};
const STitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
const SHeader = styled.header`
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 82%;
  margin: 0 auto;
`;
const SBox = styled.div`
  position: absolute;
  padding-top: 22px;
  color: #000;
  left: 0px;
  bottom: 0px;
  right: 0px;
  height: 80%;
  border: 1px solid #000;
  background-color: rgb(255, 255, 255);
  border-bottom: none;
  transition: transform 0.5s;
  transform: ${({ isCommentModal }) =>
    isCommentModal ? 'none' : 'translateY(100%)'};
  z-index: ${({ isCommentModal }) => (isCommentModal ? '1' : '-1000')};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
