<script>
    import { Router } from "./router";
    import { onMount, getContext } from "svelte";
    import { get } from 'svelte/store';

    let params = {};
    let finalParams = {};

    export let path;
    export let exact = false;

    let switchResolver = false;

    const inSwitch = getContext("switch") !== undefined;

    let resolved = false;

    if (inSwitch) {
        resolved = getContext("switch").activeRoutePath;
    }

    let structureParts = path.split("/");

    for (let i = 0; i < structureParts.length; i++) {
        const part = structureParts[i];

        if (part.charAt(0) === ":") {
            params[i] = part.substr(1, part.length);
        }
    }

    function match(structure, params, path) {
        finalParams = {};
        const pathParts = path.split("/");
        let atLeastOneOk = false;

        for (let i = 0; i < structure.length; i++) {
            const part = pathParts[i];

            if (part === undefined) return false;

            if (part !== structure[i]) {

                if (params[i] === undefined) {
                    return !exact && atLeastOneOk;
                } else {

                    if (part === "") return false;

                    finalParams[params[i]] = decodeURI(part);
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

    function routeMach(structure, params, routerPath) {

        if (inSwitch) {
            if (get(resolved) !== false && path !== get(resolved)) {
                return false;
            }
        }

        const result = match(structure, params, routerPath);
        
        if (result && inSwitch) {
            if (!get(resolved)) {
                getContext("switch").resolve(path);
            }
        }

        return result;
    }

</script>

{#if routeMach(structureParts, params, $Router)}
    <slot params={finalParams}/>
{/if}