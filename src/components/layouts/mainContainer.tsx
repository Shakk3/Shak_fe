import styled from "styled-components";
import { TestImg, Embed, Viewer, CrazeFace, GoodFace, SmileFace, AngryFace, Send, Shark } from "@/assets";

interface Iprop {
  viewCount: number;
  crazyCount: number;
  smileCount: number;
  goodCount: number;
  angryCount: number;
}

export const MainContainer = ({ viewCount, crazyCount, smileCount, goodCount, angryCount }: Iprop) => {
  return (
    <>
      <UrlText>Good Morning Hello GIF by UpStudiosWorld</UrlText>
      <Container>
        <LeftContainer>
          <Img src={TestImg} alt="img"></Img>
          <Data>
            <Upload>
              업로드:
              <p>
                2024. 6. 28.
              </p>
            </Upload>
            <EmbedBtn>
              <img src={Embed} alt="Embed" />
              <p>
                Embed
              </p>
            </EmbedBtn>
            <View>
              <img src={Viewer} alt="view" />
              <Number>
                {viewCount.toLocaleString()}
                <Text>
                  views
                </Text>
              </Number>
            </View>
          </Data>
        </LeftContainer>
        <Emote>
          <div>
            <img src={CrazeFace} alt="crazy" />
            <div>
              <p>미쳤어요</p>
              <p>{crazyCount.toLocaleString()}</p>
            </div>
          </div>
          <div>
            <img src={SmileFace} alt="good" />
            <div>
              <p>좋아요</p>
              <p>{smileCount.toLocaleString()}</p>
            </div>
          </div>
          <div>
            <img src={GoodFace} alt="smile" />
            <div>
              <p>새로워요</p>
              <p>{goodCount.toLocaleString()}</p>
            </div>
          </div>
          <div>
            <img src={AngryFace} alt="angry" />
            <div>
              <p>화가나요</p>
              <p>{angryCount.toLocaleString()}</p>
            </div>
          </div>
        </Emote>
        <EventBtn>
          <SendBtn>
            <img src={Send} alt="send" />
          </SendBtn>
          <ShakBtn>
            <img src={Shark} alt="shak" />
            <p>
              SHAK!
            </p>
          </ShakBtn>
        </EventBtn>
      </Container>
    </>
  );
};

const UrlText = styled.p`
  color: #ffffff;
  margin: 23px 0 21px 30.5vw;
  font-weight: bolder;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  gap: 20px;
  margin-left: 16vw;
`;

const Img = styled.img`
  width: 43.125em;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  height: 39.625em;
`;

const Upload = styled.div`
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 20%;
  & > p {
    font-weight: bold;
    font-size: 24px;
  }
`;

const EmbedBtn = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bolder;
  gap: 16px;
  margin-bottom: auto;
  cursor: pointer;
  & > img {
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))
            drop-shadow(0 0 5px rgba(255, 255, 255, 0.2))
            drop-shadow(0 0 8px rgba(255, 255, 255, 0.1));
  }
`;

const View = styled.div`
  display: flex;
  align-items: baseline;
  gap: 32px;
  & > img {
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))
            drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))
            drop-shadow(0 0 8px rgba(255, 255, 255, 0.2));
  }
`;

const Number = styled.span`
  font-size: 50px;
  font-weight: bold;
`;

const Text = styled.span`
  font-size: 24px;
  font-weight: bolder;
  margin-left: 14px;
`;

const Emote = styled.div`
  display: flex;
  color: #ffffff;
  gap: 76px;
  & > * {
    display: flex;
    gap: 12px;
  }
  & > * > div{
    display: flex;
    flex-direction: column;
    & > p:nth-child(1) {
      font-size: 17px;
      font-weight: bold;
    }
    & > p:nth-child(2) {
      font-weight: bolder;
    }
  }
`;

const EventBtn = styled.div`
  display: flex;
  gap: 27px;
`;

const SendBtn = styled.button`
  width: 75px;
  height: 75px;
  border-radius: 78px;
  border: none;
  background: linear-gradient(to top right, #E849B0, #FD646B);
  box-shadow: inset rgba(0,0,0,0.25) 0px 0px 7.2px; 
  cursor: pointer;
  `;

const ShakBtn = styled.button`
  width: 226px;
  height: 75px;
  border-radius: 500px;
  border: none;
  background: linear-gradient(to right, #9933FF, #6157FF);
  color: #ffffff;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: "Luckiest Guy";
  cursor: pointer;
`;

