<script>
	import { onMount } from "svelte";
	import Route from "../router/route.svelte";
	import Switch from "../router/switch.svelte";
	import Redirect from "../router/redirect.svelte";
	import Menu from "../menu.svelte";
	import {Router} from "../router/router";
</script>

<h4>Route -> {$Router}</h4>

<Menu/>

<Switch>
	<Route path="/">
		<h1>Index</h1>
	</Route>

	<Route path="/home">
		<h1>Home</h1>
	</Route>

	<Route path="/about">
		<h1>About</h1>
	</Route>

	<Route exact path="/user/:id" let:params>
		<h1>User with id: #{params.id}</h1>
	</Route>

	<Route exact path="/user/:id/:section" let:params>
		<h1>User with id: #{params.id} -> {params.section}</h1>
	</Route>

	<Route path="/:user" let:params>
		<h1>User -> {params.user}</h1>
	</Route>
</Switch>