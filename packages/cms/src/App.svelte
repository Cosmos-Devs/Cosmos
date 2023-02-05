<script lang="ts">
  import './app.css';
  import type { AdminConfig } from './types';
  import { setContext } from 'svelte';
  import Controller from './lib/controller';
  import { browser } from '$app/environment';
  import Router from './components/screens/Router.svelte';
  import { goto } from '$app/navigation';

  export let config: AdminConfig;

  if (browser) {
    const controller = new Controller(config);
    setContext<Controller>('controller', controller);

    controller.isUserIdentified().then((isIdentified) => {
      if (!isIdentified) goto('#sign_in');
    });
  }
</script>

<Router />
