import styled from "styled-components";
import { ModalShak, NotFoundImg } from "@/assets";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={ModalShak} alt="상어" style={{ width: "45vw" }} />
      <ModalContainer>
        <NotFound src={NotFoundImg} alt="404" />
        <Text>찾을 수 없는 페이지 입니다.<br />요청하신 페이지가 사라졌거나, 잘못된 경로를 이동하셨어요 :( </Text>
        <NavigateBtn onClick={() => { navigate('/'); }}>홈으로 이동</NavigateBtn>
      </ModalContainer >
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #13171B;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    transition: backdrop-filter 0.2s;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 95px;
  left: 270px;
  width: 73.313rem;
  height: 42.25rem;
  background: linear-gradient(to bottom, #121212, #020202);
  box-shadow: 33px 33px 40.1px -12px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 66px;
`;

const NotFound = styled.img``;

const Text = styled.span`
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  white-space: pre-wrap;
  text-align: center;
`;

const NavigateBtn = styled.button`
  border-radius: 22px;
  width: 224px;
  height: 66px;
  background: linear-gradient(to right bottom, #F05E68, #E549AB);
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;