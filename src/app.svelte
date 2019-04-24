<script>
	import { onMount } from "svelte";
	import Route from "./router/route.svelte";
	import Menu from "./menu.svelte";
	import {Router} from "./router/router";
</script>

<h4>Route -> {$Router}</h4>

<Menu/>

<Route path="/home">
	<h1>Home</h1>
</Route>

<Route path="/about">
	<h1>About</h1>
</Route>

<Route path="/user/:id" let:params>
	<h1>User with id: #{params.id}</h1>
</Route>

<Route path="/user/:id/:section" let:params>
	<h1>User with id: #{params.id} -> {params.section}</h1>
</Route>


