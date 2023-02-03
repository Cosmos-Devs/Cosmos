import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { ServiceMedia } from "../../types";
import type Service from "./index";

interface Config {
  supabaseUrl: string;
  supabaseKey: string;
  options?: {
    [key: string]: string;
  };
}

class Supabase implements Service {
  supabase: SupabaseClient;

  constructor({ supabaseUrl, supabaseKey }: Config) {
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  getItem = async (type: string, docId: string) => {
    const { data, error } = await this.supabase
      .from(type)
      .select("*")
      .eq("slug", docId);

    if (error) throw console.error(error);

    if (!data?.[0]) throw new Error("no items found");
    const { content, title, slug, id } = data[0];

    return { content, title, slug, id };
  };

  getMediaList = async (page = 0) => {
    const { data, error } = await this.supabase
      .from("Media")
      .select("*")
      .range(page * 10, (page + 1) * 10);

    if (error) throw console.error(error);

    return {
      media: data as ServiceMedia[],
      page,
    };
  };
}
export default Supabase;
