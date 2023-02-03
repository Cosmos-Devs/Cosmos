<script lang="ts">
  import type { ServiceMedia } from "../../types";
  import Media from "../modals/Media.svelte";

  export let label = "Image";
  export let value: ServiceMedia;

  let show = false;
</script>

{#if show}
  <Media
    on:close={() => (show = false)}
    on:select={({ detail }) => {
      value = detail;
      show = false;
    }}
  />
{/if}

<fieldset
  class="flex flex-col border border-neutral-200 px-3 py-2 rounded-md gap-2 mt-2"
>
  <h4 class="font-semibold">{label}</h4>
  <button
    class="bg-neutral-900 text-white py-2 rounded-md"
    on:click={() => (show = true)}>Open media lijst</button
  >
  <input type="text" bind:value={value.alt} />
</fieldset>
