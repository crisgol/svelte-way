import {writable} from "svelte/store";

const {subscribe, set} = writable(fixPath(location.pathname));

function fixPath(path) {

    if (path === "/") return path;

    if (path.charAt(path.length-1) == "/") {
        path = path.substr(0, path.length-1);
    }

    return path;
}

window.addEventListener("popstate", () => set(location.pathname));

function go(path, state = {}) {
    set(path);
    history.pushState(state, "", path);
}

export const Router = {
    subscribe,
    go
};
