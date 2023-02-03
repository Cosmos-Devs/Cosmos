<script lang="ts">
  import Modal from "./Modal.svelte";
  import type Service from "../../lib/services";
  import type { Writable } from "svelte/store";
  import { getContext } from "svelte";
  import { createEventDispatcher } from "svelte";
  import type { ServiceMedia } from "../../types";

  const dispatch = createEventDispatcher();

  const controller = getContext<Writable<Service>>("controller");

  let media: ServiceMedia[] = [];
  controller.subscribe(async (c) => {
    const items = await c.getMediaList();
    media = items.media;
  });
</script>

<Modal>
  <div class="px-5 pt-5 flex justify-between items-center">
    <h2 class="font-bold">Media</h2>
    <button
      class="py-2 px-3 bg-neutral-900 text-white"
      on:click={() => dispatch("close")}>Sluiten</button
    >
  </div>

  <ul
    class="px-5 py-6 grid grid-cols-[repeat(auto-fit,minmax(80px,140px))] gap-2"
  >
    {#each media as { src, alt }}
      <li>
        <button on:click={() => dispatch("select", { src, alt })}>
          <img {src} {alt} loading="lazy" />
          <span>{alt}</span>
        </button>
      </li>
    {/each}
  </ul>
</Modal>
