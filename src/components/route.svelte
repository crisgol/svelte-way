<script>
    import { get } from 'svelte/store';
    import { onMount, getContext } from "svelte";
    import { Router } from "../router";

    export let path;
    export let exact = false;

    let structureParams = {};
    let params = {};

    let resolved = false;

    const inSwitch = getContext("switch") !== undefined;

    if (inSwitch) {
        resolved = getContext("switch").activeRoutePath;
    }

    // TODO: run this on every route path change.
    let structureParts = path.split("/");

    for (let i = 0; i < structureParts.length; i++) {
        const part = structureParts[i];

        if (part.charAt(0) === ":") {
            structureParams[i] = part.substr(1, part.length);
        }
    }

    function match(structure, structureParams, path) {
        params = {};
        const pathParts = path.split("/"); // TODO: move this to the router. Splitting it in every route is inefficient.
        let atLeastOneOk = false;

        for (let i = 0; i < structure.length; i++) {
            const part = pathParts[i];

            if (part === undefined) return false;

            if (part !== structure[i]) {

                if (structureParams[i] === undefined) {
                    return !exact && atLeastOneOk;
                } else {

                    if (part === "") return false;

                    params[structureParams[i]] = decodeURI(part);
                }

            } else {
                if (part !== "") {
                    atLeastOneOk = true;
                }
            }

        }

        if (exact) {
            return structure.length === pathParts.length;
        }

        return true;
    }

    function routeMatch(structure, structureParams, routerPath) {

        if (inSwitch) {
            if (get(resolved) !== false && path !== get(resolved)) {
                return false;
            }
        }

        const result = match(structure, structureParams, routerPath);
        
        if (result && inSwitch) {
            if (!get(resolved)) {
                getContext("switch").resolve(path);
            }
        }

        return result;
    }

</script>

{#if routeMatch(structureParts, structureParams, $Router)}
    <slot params={params}/>
{/if}