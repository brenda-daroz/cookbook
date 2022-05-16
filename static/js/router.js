import renderHome from "./render-home.js";
import { recipeComponent, renderRecipe } from "./render-recipe.js";
import { allRecipes, getRecipe } from "./recipes.js";

export const navigateTo = url => {
    history.pushState(null, null, url);
    resolveRoute();
};

const routes = [
    { path: /^\/$/, view: () => renderHome() },
    {
        path: new RegExp('/receitas/(?<nameOfTheRecipe>.*)'), view: (params) => {
            const recipe = getRecipe(allRecipes, params.nameOfTheRecipe);
            const component = recipeComponent(recipe);
            renderRecipe(component);
        }
    },
];
export const resolveRoute = async () => {
    const routeMatch = routes.slice(0).reduce((_acc, route, _i, arr) => {
        const match = location.pathname.match(route.path);
        const isMatch = match !== null;
        if (isMatch) { arr.splice(1); }
        return {
            route,
            isMatch,
            params: match?.groups
        };
    }, null);

    if (routeMatch) {
        routeMatch.route.view(routeMatch.params);
    } else {
        console.error("No match found");
    }
};
