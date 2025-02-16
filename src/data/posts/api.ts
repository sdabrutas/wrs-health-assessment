import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Post } from "./types";

export const useGetPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      return await response.json();
    },
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });
};
