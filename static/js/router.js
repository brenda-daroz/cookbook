import renderHome from "./render-home.js";
import { recipeComponent, renderRecipe } from "./render-recipe.js";
import { allRecipes, getRecipe } from "./recipes.js";

export const navigateTo = url => {
    history.pushState(null, null, url);
    resolveRoute();
};

const routes = [
    { path: /^\/cookbook$/, view: () => renderHome() },
    {
        path: new RegExp('/cookbook/receitas/(?<nameOfTheRecipe>.*)'), view: (params) => {
            const recipe = getRecipe(allRecipes, params.nameOfTheRecipe);
            const component = recipeComponent(recipe);
            renderRecipe(component);
        }
    },
];
export const resolveRoute = async () => {
    const currentPath = location.pathname.replace(/\/$/, "")
    const routeMatch = routes.slice(0).reduce((acc, route, _i, arr) => {
        const match = currentPath.match(route.path);
        const isMatch = match !== null;
        if (isMatch) {
            arr.splice(1);
            return {
                route,
                isMatch,
                params: match?.groups
            }
        } else {
            return acc
        }
    }, null)

    if (routeMatch) {
        routeMatch.route.view(routeMatch.params);
    } else {
        console.error("No match found");
    }
};