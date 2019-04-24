<script>
    import { Router } from "./router";
    import { onMount } from "svelte";

    let params = {};
    let finalParams = {};

    export let path;

    let structureParts = path.split("/");
    structureParts.splice(0, 1);

    for (let i = 0; i < structureParts.length; i++) {
        const part = structureParts[i];

        if (part.charAt(0) === ":") {
            params[i] = part.substr(1, part.length);
        }
    }

    function match(structure, params, path) {
        finalParams = {};
        const pathParts = path.split("/");
        pathParts.splice(0, 1);

        for (let i = 0; i < structure.length; i++) {
            const part = pathParts[i];

            if (part === undefined) return false;

            if (part !== structure[i]) {

                if (params[i] === undefined) {
                    return false;
                } else {
                    finalParams[params[i]] = part;
                }

            }

        }

        return true;
    }

</script>

{#if match(structureParts, params, $Router)}
    <slot params={finalParams}/>
{/if}