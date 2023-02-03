import { createClient } from "@supabase/supabase-js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const supabaseUrl = "https://hmfttgbvehdjpujlbklx.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase.from("Blogs").select("*").eq("slug", "test");

  console.log("data", data, error);
  return {
    ...data
  };
};
