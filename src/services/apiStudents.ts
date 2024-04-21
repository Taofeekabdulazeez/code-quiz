import { Student } from "../interfaces/interface";
import supabase from "./supabase";

export async function createStudent(student: Student) {
  const { data, error } = await supabase
    .from("students")
    .insert([student])
    .select();

  if (error) throw new Error("There was an uploading student!");

  return data;
}

export async function findStudent(email: string) {
  const { data, error } = await supabase
    .from("students")
    .select("*")
    .eq("email", email)
    .single();

  if (error) console.log(error);

  return data;
}
