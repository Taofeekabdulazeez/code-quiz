import { tempData } from "../../data/tempData";
import { questionObj } from "../interfaces/interface";
import supabase from "./supabase";

export async function getQuestions(): Promise<questionObj[]> {
  const { data, error } = await supabase.from("questions").select("*");

  if (error) throw new Error("Questions was not loaded!");

  return data;
}

export async function uploadQuestions() {
  const { data, error } = await supabase
    .from("questions")
    .insert(tempData)
    .select();

  if (error) throw new Error("Questions was not uploaded!");

  return data;
}
