<script lang="ts">
  import { getContext } from 'svelte';
  import type { Readable } from 'svelte/store';
  import { browser } from '$app/environment';
  import type Controller from '$lib/controller';
  import Editor from './Editor.svelte';
  import Loading from './Loading.svelte';

  const controller = getContext<Readable<Controller>>('controller');

  $: path = browser ? window?.location?.hash : null;
  $: type = path?.split('/')?.[1] || '';
</script>

<main>
  {#if path === null}
    <Loading />
  {:else if path.startsWith('#edit')}
    <Editor template={$controller.config.register.templates[type]} />
  {:else}
    <a href="#edit/blog/test">Edit blog page</a>
  {/if}
</main>
