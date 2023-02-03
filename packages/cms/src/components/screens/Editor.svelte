<script lang="ts">
  import type Service from "../../lib/services";
  import type { BlockConfig, Template } from "../../types";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import Block from "../helpers/Block.svelte";
  export let template: Template;

  let datalist: { [x: string]: unknown }[] = [];

  const controller = getContext<Writable<Service>>("controller");
  controller.subscribe(async (c: any) => {
    const data = await c.getItem("Blogs", "test");
    datalist = data.content.map(({ data }: any) => data);
  });

  type SelectBlockConfig = {
    block: BlockConfig;
    position: number;
  };

  // editor
  let edit: null | SelectBlockConfig = null;
  $: selectedProps = edit?.block?.props;

  function select({ detail }: { detail: SelectBlockConfig }) {
    edit = detail;
  }
</script>

<div class="grid grid-rows-[max-content_auto] h-screen">
  <header
    class="w-full sticky top-0 h-16 border-b border-neutral-200 px-5 flex justify-end items-center"
  >
    <button
      class="py-2 px-3 bg-neutral-900 text-white"
      on:click={() => console.log("store")}>Opslaan</button
    >
  </header>

  <div class="grid grid-cols-[1fr_320px]">
    <div class="inline-grid overflow-y-scroll">
      <div class="flex flex-col p-5">
        {#each template?.layout || [] as block, i}
          <Block
            {block}
            on:selected={select}
            selected={edit?.position === i}
            position={i}
            bind:props={datalist[i]}
          />
        {/each}
      </div>
    </div>

    <div class="border-l border-neutral-200 sticky top-0 h-full">
      <h2 class="w-full text-center py-3 border-b border-neutral-200">
        Settings
      </h2>

      <div
        class="w-full text-center py-3 border-b border-neutral-200 flex gap-2 items-center px-5"
      >
        <h4 class="py-1 px-2 border border-neutral-200">Pagina</h4>
        {#if edit}
          <h4 class="py-1 px-2 bg-neutral-900 text-white">
            {edit?.block?.name}
          </h4>
        {/if}
      </div>

      {#if edit && selectedProps}
        <div class="p-5 flex flex-col gap-2">
          <!-- {#each Object.keys(selectedProps) as input} -->
          <!-- {#key selectedProps[input]?.label} -->
          <!--   <Input -->
          <!--     label={selectedProps[input]?.label} -->
          <!--     type={typeof selectedProps[input] === "string" -->
          <!--       ? selectedProps[input] -->
          <!--       : selectedProps[input]?.type} -->
          <!--     bind:value={datalist[edit.position][input]} -->
          <!--   /> -->
          <!-- {/key} -->
          <!-- {/each} -->
        </div>
      {:else}
        <span>Click on section</span>
      {/if}
    </div>
  </div>
</div>
