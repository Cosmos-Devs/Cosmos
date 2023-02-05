<script lang="ts">
  import { getContext } from 'svelte';
  import { browser } from '$app/environment';
  import type Controller from '$lib/controller';
  import Editor from './Editor.svelte';
  import SignIn from './SignIn.svelte';
  import Loading from './Loading.svelte';
  import { page } from '$app/stores';

  const controller = getContext<Controller>('controller');

  $: path = $page.url.hash || null;
  $: type = path?.split('/')?.[1] || '';
</script>

<main>
  {#if path === null}
    <Loading />
  {:else if path.startsWith('#sign_in')}
    <SignIn />
  {:else if path.startsWith('#edit')}
    <Editor template={controller.config.register.templates[type]} />
  {:else}
    <a href="#edit/blog/test">Edit blog page</a>
  {/if}
</main>
