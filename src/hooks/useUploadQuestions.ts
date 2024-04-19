import { useMutation } from "@tanstack/react-query";
import { uploadQuestions as uploadQuestionsApi } from "../services/apiQuestions";

export function useUploadQuestions() {
  const { mutate: uploadQuestions } = useMutation({
    mutationFn: uploadQuestionsApi,
  });

  return { uploadQuestions };
}
