<script lang="ts">
  import './app.css';
  import type { AdminConfig } from './types';
  import { page } from '$app/stores';
  import { writable } from 'svelte/store';
  import { onMount, setContext } from 'svelte';
  import Controller from './lib/controller';
  import Editor from './components/screens/Editor.svelte';
  import Loading from './components/screens/Loading.svelte';

  export let config: AdminConfig;

  const controller = writable<Controller | null>(null);
  setContext('controller', controller);

  let loading = true;
  onMount(() => {
    controller.set(new Controller(config));
    loading = false;
  });

  $: path = $page.url.hash;
  $: type = path.split('/')?.[1];
</script>

<main>
  {#if true}
    <Loading />
  {:else if path.startsWith('#edit')}
    <Editor template={config.register.templates[type]} />
  {:else}
    <a href="#edit/blog/test">Edit blog page</a>
  {/if}
</main>
