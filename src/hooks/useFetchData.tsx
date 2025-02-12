import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const url = "https://jsonplaceholder.typicode.com/posts";

// Api function for fetching data from server

const fetchData = async (): Promise<Post[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("failed fetching data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error:", error);
    throw error;
  }
};

const useFetchData = (): UseQueryResult<Post[], Error> => {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchData,
  });
};

export default useFetchData;




