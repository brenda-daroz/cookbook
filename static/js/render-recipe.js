const h = require("hyperscript")


function recipeComponent(recipe) {
    return h('div.receita__container#receita__container',
        h('h2.recipe__title',
            h('span', recipe.title)),
        h('div.ingredients__container',
            h('div.ingredientes',
                h('div.title__list--ingredientes',
                    h('h3.ingredients__title', 'Ingredientes'),
                    h('ul.ingredients__list', renderIngredients(recipe.ingredients))),
                h('img.img__recipe', recipe.image)),
            h('div.directions__container',
                h('h3.directions__title', 'Modo de preparo'),
                h('p.directions__list', recipe.directionsList))))
}

function renderRecipe(component) {
    document.getElementById("main").replaceChildren(component)
}



function renderIngredients(ingredients) {
    const newList = [];
    for (let index = 0; index < ingredients.length; index++) {
        const element = ingredients[index];
        newList.push(h('li', element));

    }
    return newList;
}


export { recipeComponent, renderRecipe }