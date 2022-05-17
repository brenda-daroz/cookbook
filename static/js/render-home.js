const h = require("hyperscript")

function renderHome() {
    const homePage = h('div.home#home',
        h('article.article__destaque',
            h('h2.destaques.right',
                h('span', 'Destaques')),
            h('img.img__destaque', { src: '/static/images/cake-1194779_1280.jpeg' })),
        h('article.article__latest',
            h('h2.latest.right',
                h('span', 'Ultimos posts')),
            h('img.img__latest', { src: '/static/images/burger.jpeg' }),
            h('p', 'Hamburguer'),
            h('img.img__latest', { src: '/static/images/cupcakes-5447570_1280.jpeg' }),
            h('p', 'Cupcake'),
        ))

    document.getElementById("main").replaceChildren(homePage)
}

export default renderHome