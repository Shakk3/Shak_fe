import styled, { css } from "styled-components";
import { Header, MainContainer, ComentContainer } from "@/components";
import { useModalStore } from "@/store";

export const MainPage = () => {
  const isOpen = useModalStore((state) => state.isOpen);

  return (
    <BackgroundContainer isOpen={isOpen}>
      <Header />
      <MainContainer viewCount={1024} crazyCount={1823} smileCount={1823} goodCount={1823} angryCount={1823} />
      <ComentContainer comentCount={10} />
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div<{ isOpen: boolean }>`
  background-color: #13171b;
  height: 400vh;
  position: relative;

  ${({ isOpen }) =>
    isOpen &&
    css`
    &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    transition: backdrop-filter 0.2s;
    }
  `}
`;
