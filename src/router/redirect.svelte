<script>
    import { onMount } from "svelte";
    import { Router } from "./router"

    export let path;

    onMount(() => {
        Router.go(path);
    });
</script>