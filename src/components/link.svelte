<script>
    import {Router} from "../router";

    export let path;

    function handleClick(e) {
        e.preventDefault();
        Router.go(path);
    }
</script>

<a on:click={handleClick} class:active={$Router === path} href={path}>
    <slot/>
</a>