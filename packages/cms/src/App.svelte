<script lang="ts">
  import type { AdminConfig } from "./types";
  import { page } from "$app/stores";
  import { onMount, setContext } from "svelte";
  import Editor from "./components/screens/Editor.svelte";
  import "./app.css";
  import Controller from "./lib/controller";
  import { writable } from "svelte/store";

  export let config: AdminConfig;

  const controller = writable<Controller | null>(null);
  setContext("controller", controller);

  let loading = true;
  onMount(() => {
    controller.set(new Controller(config));
    loading = false;
  });

  $: path = $page.url.hash;
  $: type = path.split("/")?.[1];
</script>

<main>
  {#if loading}
    <h1>Loading...</h1>
  {:else if path.startsWith("#edit")}
    <Editor template={config.register.templates[type]} />
  {:else}
    <a href="#edit/blog/test">Edit blog page</a>
  {/if}
</main>
