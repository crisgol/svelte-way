<script>
    import { setContext } from "svelte";
    import { Router } from "./router"
    import { writable } from "svelte/store";

    let activeRoutePath = writable(false);

    Router.subscribe(() => activeRoutePath.set(false));

    setContext("switch", {activeRoutePath, resolve : (path) => activeRoutePath.set(path)});
</script>

<slot/>