<script lang="ts">
  import type { BlockExport } from "../../types";
  import Image from "./Image.svelte";
  import String from "./String.svelte";

  export let config: BlockExport;
</script>

{#if config.type === "image"}
  <Image label={config.label} value={config.value} />
{:else}
  <String label={config.label} value={config.value} />
{/if}
