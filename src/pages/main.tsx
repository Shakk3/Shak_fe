import styled from "styled-components";
import { Header, MainContainer, ComentContainer } from "@/components";

export const MainPage = () => {
  return (
    <BackgroundContainer>
      <Header />
      <MainContainer viewCount={1024} crazyCount={1823} smileCount={1823} goodCount={1823} angryCount={1823} />
      <ComentContainer comentCount={10} />
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  background-color: #13171b;
  height: 400vh;
`;
