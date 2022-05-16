import navigation from "./navigation.js";
import { navigateTo, resolveRoute } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
    navigation.init()

    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href)
        }
    })
    resolveRoute()
});