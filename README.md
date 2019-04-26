<img alt="Svelte Way is small SPA router for Svelte 3. Inspired by React Router.
" src="https://github.com/SogoCZE/svelte-way/blob/master/public/github.svg">

**Svelte Way** is small SPA router for [Svelte 3](https://svelte.dev/). Inspired by [React Router](https://github.com/ReactTraining/react-router).

## Install

via npm: ```npm install svelte-way``` or via yarn: ```yarn add svelte-way```.

## Docs

### Route

Main component for routing. Childs are rendered if route prop path match url.

#### Props

- ```path``` route url structure with following format ```/some-route/:param_name/``` (string).
- ```exact``` if true route will match only exact url as provided in the path prop. (boolean, default: false).

#### Slot props

- ```params``` object that contains params as defined in path route prop (object).

#### Example usage

```html
<Route path="/home">
  <h1>Home</h1>
</Route>
```

```html
<Route path="/user/:id" let:params>
  <h1>User #{params.id}</h1>
</Route>
```

### Link

Component for navigation links.

#### Props

- ```path``` url to link to (string).
- ```activeClass``` class for active state (string, default: active).

#### Example usage

```html
<Link path="/home">Home</Link>
```

### Redirect

After mount redirect component will redirect to the specified path.

#### Props

- ```path``` url to redirect to (string).

#### Example usage

```html
<Route exact path="/home">
  <Redirect path="/" />
</Rout
```

### Switch

Renders the first Route component that matches URL.

#### Example usage

```html
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
```

## Roadmap:
- Rewrite it in TypeScript (!!!).
- Support for route state (!!!).
- Support for code splitting (!!!).
- Supoort for SSR (!!).
- Tests (!!).
- Support for scroll routes (!).
- Support for hash history and memory history (?).
