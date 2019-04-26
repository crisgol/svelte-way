<script>
    import {Router} from "../router";

    export let path;
    export let activeClass = "active";

    function handleClick(e) {
        e.preventDefault();
        Router.go(path);
    }
</script>

<a on:click={handleClick} class={$Router === path ? activeClass : ""} href={path}>
    <slot/>
</a>