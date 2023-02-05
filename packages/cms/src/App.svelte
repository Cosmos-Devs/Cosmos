<script lang="ts">
  import './app.css';
  import type { AdminConfig } from './types';
  import { readable } from 'svelte/store';
  import { setContext } from 'svelte';
  import Controller from './lib/controller';
  import { browser } from '$app/environment';
  import Router from './components/screens/Router.svelte';

  export let config: AdminConfig;

  if (browser) {
    const controller = readable<Controller>(new Controller(config));
    setContext('controller', controller);
  }
</script>

<Router />
