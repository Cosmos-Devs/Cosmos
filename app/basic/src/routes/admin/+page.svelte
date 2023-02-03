<script lang="ts">
  import { CMS, supabaseProvider } from "@cosmos-devs/cms";
  import type { AdminConfig } from "@cosmos-devs/cms/src/types";
  import templates from "../../templates/index";
  const config: AdminConfig = {
    service: new supabaseProvider({
      supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
      supabaseUrl: "https://hmfttgbvehdjpujlbklx.supabase.co"
    }),
    register: {
      templates: templates
    }
  };
</script>

<CMS {config} />
