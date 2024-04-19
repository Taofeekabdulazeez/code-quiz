import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "./hooks";
import { isSubmitting, submit } from "../features/quizSlice";
import { createStudent } from "../services/apiStudents";

export function useSubmit() {
  const dispatch = useAppDispatch();

  const { mutate: submitQuiz } = useMutation({
    mutationFn: createStudent,
    onSuccess: () => dispatch(submit()),
    onMutate: () => dispatch(isSubmitting()),
  });

  return { submitQuiz };
}
