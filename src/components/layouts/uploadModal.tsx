import styled from "styled-components";
import { useModalStore } from "@/store";
import { InnerUpload, CloseModal, Logo, ModalShak } from "@/assets";

export const UploadModal = () => {
  const { isOpen, closeModal } = useModalStore();

  if (!isOpen) return null;
  return (
    <ModalContainer>
      <HeaderContainer>
        <div>
          <img src={Logo} alt="logo" width="180px" />
          <UploadBtn>
            <img src={InnerUpload} alt="upload" />
          </UploadBtn>
        </div>
        <Button src={CloseModal} alt="closeModal" onClick={closeModal} />
      </HeaderContainer>
      <hr />
      <MainContainer>
        <img src={ModalShak} alt="modalLogo" />
        <Finder>
          <p>찾아보기</p>
        </Finder>
        <span>또는 이미지를 드래그하세요.</span>
      </MainContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 80px;
  left: 187px;
  width: 84.313rem;
  height: 52.25rem;
  background: linear-gradient(to right bottom, #323C44, #121212);
  border-radius: 50px;
`;

const UploadBtn = styled.button`
  width: 12.425em;
  height: 4em;
  border-radius: 500px;
  background-color: #ffffff;
  margin-top: 10px;
  border: none;
  & > img {
    width: 7em;
  }
`;

const Button = styled.img`
  cursor: pointer;
`;

const Finder = styled.div`
  width: 10.725em;
  height: 3.725em;
  color: #ffffff;
  font-weight: bold;
  background: linear-gradient(to right bottom, #F05E68, #E549AB);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 26px;
  & > p {
    font-size: 25px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px 10px 50px;
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  & > img {
    width: 15em;
    margin-top: 60px;
  }
  & > span {
    font-size: 32px;
    font-weight: bold;
    color: #ffffff;
  }
`;