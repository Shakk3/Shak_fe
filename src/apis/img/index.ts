import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { instance } from "@/apis";

const router = "/uploadfile/";

interface UploadFileVariables {
  file: File;
}

export const uploadFile = async (file: File) => {
  // FormData 생성
  const formData = new FormData();
  formData.append("file", file);  // 파일 추가

  // FormData를 전송
  const response = await instance.post(router, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

/** react-query로 파일 업로드 요청하는 훅입니다. */
export const useUploadFile = (): UseMutationResult<any, Error, UploadFileVariables> => {
  return useMutation({
    mutationFn: ({ file }: UploadFileVariables) => uploadFile(file)
  });
};