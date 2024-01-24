<script lang="ts">
  import { base } from "$app/paths";
  import Image from "$lib/images/favicon.png?enhanced"
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>My Site</title>
</svelte:head>

<h1 class="font-bold">Hello World!!</h1>
<a href="{base}/help">Help</a>
<enhanced:img src={Image} alt="Some alt text" />

{#each data.data as u }
  <p>{u.userName}</p>
  <p>{u.score}</p>
{/each}