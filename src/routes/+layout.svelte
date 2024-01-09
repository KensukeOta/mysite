<script lang="ts">
  import "../app.css";
  import Footer from "$lib/components/organisms/Footer/Footer.svelte";
  import Header from "$lib/components/organisms/Header/Header.svelte";
</script>

<Header />

<main class="flex-1">
  <slot></slot>
</main>

<Footer />