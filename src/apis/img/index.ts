import { useMutation } from "@tanstack/react-query";
import { instance } from "@/apis";

const router = "/uploadfile/";

const uploadFile = async ({ file, binaryString }: { file: File; binaryString: string }) => {
  const requestBody = {
    file: file,
    binary: binaryString,
  };

  const response = await instance.post(router, requestBody, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

/** react-query로 파일 업로드 요청하는 훅입니다. */
const useUploadFile = () => {
  return useMutation(uploadFile);
};
