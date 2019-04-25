<script>
    import { setContext } from "svelte";
    import { writable } from "svelte/store";
    import { Router } from "../router"

    let activeRoutePath = writable(false);

    Router.subscribe(() => activeRoutePath.set(false));

    setContext("switch", {activeRoutePath, resolve : (path) => activeRoutePath.set(path)});
</script>

<slot/>