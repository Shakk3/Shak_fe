import styled from "styled-components";

export const Coment = () => {
  return (
    <Container>
      <Name>test</Name>
      <ComentDiv>aksdnadjlas</ComentDiv>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 29px;
`;

const Name = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
`;

const ComentDiv = styled.p`
  color: #ffffff;
  font-size: 18px;
`;