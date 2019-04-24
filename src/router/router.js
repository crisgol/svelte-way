import {writable} from "svelte/store";

const {subscribe, set} = writable(location.pathname);

window.addEventListener("popstate", (e) => {
    set(location.pathname);
});

function go(path) {
    set(path);
    history.pushState({}, "", path);
}

export const Router = {
    subscribe,
    go
};
