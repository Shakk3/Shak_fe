import styled from "styled-components";
import { Logo, InnerUpload } from "@/assets";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo" />
      <ImgName>cat!</ImgName>
      <UploadBtn>
        <img src={InnerUpload} alt="" />
      </UploadBtn>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100vw;
  height: 7.5rem;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18em;
  & > img {
    cursor: pointer;
  }
`;

const ImgName = styled.p`
  color: #ffffff;
  font-size: 65px;
  font-weight: bold;
`;

const UploadBtn = styled.button`
  width: 15.725em;
  height: 4.9em;
  border-radius: 500px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;
