import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { instance, NoticeRequest, NoticeResponse} from "@/apis";
import toast from "react-hot-toast";

const router = "/api/img/random";

export const useGetNotice = () => {
  return useQuery({
    queryKey: ["getNotice"],
    queryFn: async () => {
      const {data} = await instance.get<NoticeResponse[]>(`${router}`);
      return data;
    },
  });
};

export const usePostNotice = (
  data: NoticeRequest,
  setForm: React.Dispatch<React.SetStateAction<{nameValue: string, commentValue: string}>>
) => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: () => instance.post(`${router}`, data),
    onSuccess: () => {
      queryclient.invalidateQueries({queryKey: ["getComment"]});
      toast.success("댓글을 작성했어요.");
      setForm({nameValue: "", commentValue: ""});
    },
    onError: () => {
      toast.error("댓글 작성에 실패했어요.");
    },
  });
};