<script>

import { Route } from 'svelte-router-spa';
export let currentRoute;
const params = {};

</script>

<div class="w-full h-full bg-color-yellow-500">
  <div class="main-container bg-color-white rounded-lg">
    <Route {currentRoute} {params} />
  </div>
</div>
