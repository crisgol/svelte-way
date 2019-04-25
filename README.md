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
<Route path="/">
  <h1>Index route</h1>
</Route>
```

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

## Roadmap:
- Rewrite it in TypeScript (!!!).
- Support for route state (!!!).
- Support for code splitting (!!!).
- Supoort for SSR (!!).
- Tests (!!).
- Support for scroll routes (!).
- Support for hash history and memory history (?).
