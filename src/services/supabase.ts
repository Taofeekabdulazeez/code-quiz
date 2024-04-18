import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pfnqonnqfqxgtfevrgbo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmbnFvbm5xZnF4Z3RmZXZyZ2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0NTQwMjgsImV4cCI6MjAyOTAzMDAyOH0.mkoCnT8vyvfsyRSjU-7NA5ickhLF51h7ZffjVW8aaz8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
