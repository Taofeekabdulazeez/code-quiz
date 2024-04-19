import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "../services/apiQuestions";

export function useQuestions() {
  const { data: questions, isLoading } = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  return { isLoading, questions };
}
