import styled from "styled-components";
import { Coment } from "./coment";

interface Iprop {
  comentCount: number;
}

export const ComentContainer = ({ comentCount }: Iprop) => {
  return (
    <Container>
      <ComentCount>
        댓글&nbsp;
        <p>{comentCount}</p>
        개
      </ComentCount>
      <form>
        <NameInput placeholder="이름" />
      </form>
      <form>
        <ComentInput placeholder="댓글 작성..." />
      </form>
      <EventBtn>
        <CancleBtn>취소</CancleBtn>
        <ComentBtn>댓글</ComentBtn>
      </EventBtn>
      <Coment />
    </Container >
  );
}

const Container = styled.div`
  width: 43.125em;
  margin: 114px auto 0;
`;

const ComentCount = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  margin-bottom: 15px;
  & > p:nth-child(1) {
    background: linear-gradient(to top right, #E849B0, #9933FF);
    color: transparent;
    -webkit-background-clip: text;
  }
  `;

const NameInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: #7D7D7D;
  font-weight: bold;
  font-size: 15px;
  padding-bottom: 7px;
  `;

const ComentInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #7d7d7d;
  color: #7d7d7d;
  font-size: 18px;
  padding-bottom: 7px;
  `;

const EventBtn = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  margin-top: 11px;
  gap: 5px;
`;

const CancleBtn = styled.button`
  border-radius: 500px;
  background: linear-gradient(to right, #9933FF, #6157FF);
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  width: 80px;
  height: 34px;
  border: none;
  cursor: pointer;
`;

const ComentBtn = styled.button`
  border-radius: 500px;
  background: linear-gradient(to right, #F6606C, #E147A9);
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  width: 80px;
  height: 34px;
  border: none;
  cursor: pointer;
  margin-bottom: 31px;
`;