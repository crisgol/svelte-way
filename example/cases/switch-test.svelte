<script>
	import Menu from "../components/menu.svelte";
	import {Switch, Route, Router, Redirect} from "../../src";
</script>

<h4>Route -> {$Router}</h4>

<Menu/>

<Switch>
	<Route exact path="/">
		<h1>Home</h1>
	</Route>

	<Route exact path="/home">
		<Redirect path="/" />	
	</Route>

	<Route exact path="/about">
		<h1>About</h1>
	</Route>

	<Route exact path="/user/:id" let:params>
		<h1>User with id: #{params.id}</h1>
	</Route>

	<Route exact path="/user/:id/:section" let:params>
		<h1>User with id: #{params.id} -> {params.section}</h1>
	</Route>

	<Route>
		<h1>404</h1>
	</Route>
</Switch>