<script>
  import { Router } from 'svelte-router-spa';
  import { routes } from './Routes.js';
</script>

<div class="w-full h-full bg-color-yellow-500">
  <div class="main-container bg-color-white rounded-lg">
    <Router {routes} />
  </div>
</div>

<small>Under construction...</small>
