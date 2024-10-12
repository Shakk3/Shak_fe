import styled, { css } from "styled-components";
import { useModalStore, useDragImgStore } from "@/store";
import { InnerUpload, CloseModal, Logo, ModalShak, DragDrop, ImgUpload } from "@/assets";
import { useCallback, useRef, useState } from "react";

export const UploadModal = () => {
  const { isActive, setActive } = useDragImgStore();
  const { isOpen, closeModal } = useModalStore();
  const [imgSrc, setImgSrc] = useState('');
  const [imgNaming, setImgNaming] = useState(false);

  const handleImgNaming = () => {
    setImgNaming(true);
  };

  const encodeFileToBase64 = (fileBlob: Blob): Promise<void> => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        const result = reader.result as string;
        setImgSrc(result);
        resolve();
      };
    });
  };

  const handleDragStart = () => {
    setActive(true)
    console.log("드래그 온!");
  };
  const handleDragEnd = () => {
    setActive(false)
    console.log("드래그 아웃!");
  };

  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    console.log(file);
    setActive(false);

    encodeFileToBase64(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  const inputRef = useRef<HTMLInputElement | null>(null);
  const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    console.log(e.target.files[0]);
    const file = e.target.files[0];
    encodeFileToBase64(file);
  }, [])

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, [])

  const cancelUpload = useCallback(() => {
    setImgSrc('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, []);

  // ? 이 코드는 모달의 상태가 열려있을 때 웹의 스크롤을 막는 코드입니다.
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

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
      </HeaderContainer >
      <hr />
      {
        imgSrc ?
          <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "70%", gap: "40px" }}>
              {imgNaming ?
                <>
                  <UploadDiv imgNaming={imgNaming}>
                    <UploadImg imgNaming={imgNaming} src={imgSrc} alt="img" />
                    <input type="text" placeholder="*제목을 입력해주세요." />
                  </UploadDiv>
                </>
                :
                <UploadImg imgNaming={imgNaming} src={imgSrc} alt="img" />
              }
            </div>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
              <button style={{
                borderRadius: "50px", cursor: "pointer", width: "4.525em", height: "2em", border: "none", color: "#ffffff", fontWeight: "bold", fontSize: "20px", background: "linear-gradient(to right, #9933FF, #6157FF)"
              }}
                onClick={() => {
                  setActive(false);
                  setImgNaming(false);
                  cancelUpload();
                  console.log("sadasd");
                }}>취소</button>
              {imgNaming ?
                <NextBtn imgNaming={imgNaming} onClick={handleImgNaming}>
                  <img src={ImgUpload} alt="으악" />
                  <p>업로드</p>
                </NextBtn>
                :
                <NextBtn imgNaming={imgNaming} onClick={handleImgNaming}>다음</NextBtn>}
            </div>
          </>
          :
          isActive ? (
            <MainContainer>
              <FinderContainer
                onDragEnter={(e) => {
                  e.preventDefault();
                  handleDragStart();
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  handleDragEnd();
                }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={onUploadImage}
                  style={{ display: "none" }}
                />
                <img src={DragDrop} alt="dragdrop" style={{ width: "25%" }} />
                <Text>이미지를 이곳에 드롭하세요.</Text>
              </FinderContainer>
            </MainContainer>
          ) : (
            <MainContainer>
              <div
                onDragEnter={(e) => {
                  e.preventDefault();
                  handleDragStart();
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  handleDragEnd();
                }}
                onDrop={handleDrop}>
                <img src={ModalShak} alt="modalLogo" />
                <input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={onUploadImage}
                  style={{ display: "none" }}
                />
                <Finder
                  onClick={onUploadImageButtonClick}
                >
                  <p>찾아보기</p>
                </Finder>
                <span>또는 이미지를 드래그하세요.</span>
              </div>
            </MainContainer>
          )}
    </ModalContainer >
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

const Finder = styled.label`
  width: 10.725em;
  height: 120px;
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
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85%;
    width: 60%;
    gap: 60px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  gap: 60px;
  & > div > img {
    width: 15em;
    margin-top: 60px;
  }
  & > div > span {
    font-size: 32px;
    font-weight: bold;
    color: #ffffff;
  }
`;

const FinderContainer = styled.label`
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  border: 5px dashed #E549AB;
  border-radius: 8px;
`;

const Text = styled.span`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

const NextBtn = styled.button <{ imgNaming: boolean }>`
  border-radius: 50px;
  cursor: pointer; 
  width: ${({ imgNaming }) => (imgNaming ? "8.5em" : "4.525em")};
  height: 2em;
  border: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  background: linear-gradient(to right, #F6606C, #E147A9);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  & > p {
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
  }
`;

const UploadImg = styled.img<{ imgNaming: boolean }>`
  height: 480px;
`;

const UploadDiv = styled.div<{ imgNaming: boolean }>`
  height: 480px;
  position: relative;
  overflow: hidden;
  ${({ imgNaming }) =>
  (imgNaming ?
    css`
    &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    transition: backdrop-filter 0.2s;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    }
    `
    :
    css`
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.7))
          drop-shadow(0 0 5px rgba(255, 255, 255, 0.4))
          drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
  `)
  }

  & > input { 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #ADADAD;
    width: 70%;
    height: 30px;
    font-size: 24px;
    font-weight: bold;
    color: #ffff;
  }

  & > input::placeholder {
    color: #ffff;
  }
`;