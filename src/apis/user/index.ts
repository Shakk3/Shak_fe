import { useQuery } from "@tanstack/react-query";
import { instance, ImgRandomResponse } from "@/apis";


const router = "/api/img/random";

export const useGetRandomImg = () => {
  return useQuery({
    queryKey: ["getRandomImg"],
    queryFn: async () => {
      const {data} = await instance.get<ImgRandomResponse>(`${router}`);
      return data;
    }
  })
}