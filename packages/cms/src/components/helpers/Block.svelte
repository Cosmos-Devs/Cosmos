<script lang="ts">
  import {
    createEventDispatcher,
    setContext,
    SvelteComponentTyped,
  } from "svelte";
  import { writable } from "svelte/store";
  import type { BlockConfig } from "../../types";

  export let selected = false;
  export let position = 0;
  export let block: new (args: {
    target: any;
    props?: any;
  }) => SvelteComponentTyped;
  export let props = {};

  const dispatch = createEventDispatcher();

  const config = writable<BlockConfig>({
    name: "",
    props: {},
  });
  setContext("configBlock", config);
</script>

<button
  class={`${
    selected ? "outline" : ""
  } outline-1 outline-neutral-900 outline-offset-8`}
  on:click={() => dispatch("selected", { block: $config, position })}
>
  <svelte:component this={block} {...props} />
</button>
