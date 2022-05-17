const hummus = {
    title: "Hummus",
    ingredients: [
        "250 g grão de bico cozido",
        "60 mL suco de limão",
        "60 mL tahini",
        "1 dente de alho pequeno",
        "30 mL de azeite",
        "1/2 colher de chá de cominho",
        "Sal a gosto",
    ],
    directionsList: "",
    image: { src: '/cookbook/static/images/hummus.jpg' },
    routerPath: "hummus"
}

const cheddarSauce = {
    title: "Molho de Cheddar",
    ingredients: [
        "57 g manteiga",
        "30 g farinha",
        "225 queijo Cheddar",
        "480 mL leite",
        "225 g macarrão"
    ],
    directionsList: "Colocar manteiga numa panela",
    image: { src: '/cookbook/static/images/cheddar.jpeg' },
    routerPath: "cheddar-sauce"

}
const nhoqueDeBatata = {
    title: "Nhoque de Batata",
    ingredients: [
        "500 g batata asterix",
        "100 g de parmesão",
        "100 g farinha",
        "Sal, pimenta do reina e noz moscada a gosto",
    ],
    directionsList: "",
    image: { src: '/cookbook/static/images/gnocchi.jpg' },
    routerPath: "nhoque-de-batata"
}

const paoDeQueijo = {
    title: "Pão de queijo",
    ingredients: [
        "600 mL de água",
        "1 xícara chá de óleo",
        "1 1/2 xícara chá leite",
        "2 colheres sopa de sal",
        "1 kg polvilho azedo (ou 1/2 kg doce e 1/2 kg azedo)",
        "6 ovos",
        "300 g parmesão ralado",
    ],
    directionsList: "",
    routerPath: "pao-de-queijo"
}

const quesoSauceDip = {
    title: "Molho de queso",
    ingredients: [
        "130 g queijo industrializado (polenghi)",
        "40 mL água",
        "50 mL leite",
        "1 colher sopa jalapeño picado",
        "1/2 colher sopa jalapeño conserva",
        "1/2 colher sopa suco jalapeño",
        "Sal a gosto",
        "Comindo a gosto",
    ],
    directionsList: "",
    routerPath: "molho-de-queijo"
}

const massaDeCoxinha = {
    title: "Massa de coxinha",
    ingredients: [
        "1 xícara de água",
        "1 1/2 xicara de leite",
        "1 1/2 colher de manteiga",
        "2 batatas cozidas e amassadas",
        "Tempero (caldo knorr)",
        "Farinha até a massa nao grudar",
    ],
    directionsList: "",
    routerPath: "massa-de-coxinha"
}

const massaDePizza = {
    title: "Massa de pizza",
    ingredients: [
        "3 xícaras de farinha",
        "10 g fermento biológico",
        "1 col chá sal",
        "1 1/4 xícara água morna",
        "1/8 xícara de azeite",
        "Farinha para polvilhar superfície",
        "Azeite para untar tigela"
    ],
    directionsList: "",
    routerPath: "massa-de-pizza"
}

const pipocaDoce = {
    title: "Pipoca doce",
    ingredients: [
        "70 g pipoca",
        "30 g nescau",
        "50 g açucar",
        "10 mL água",
        "15 g óleo",
    ],
    directionsList: "",
    routerPath: "pipoca-doce"
}

const panquecaAmericana = {
    title: "Panqueca americana",
    ingredients: [
        "195 g de farinha",
        "2 col sopa açúcar",
        "1 col sopa fermento",
        "1/2 colher chá sal",
        "295 mL leite",
        "1 ovo",
        "4 col sopa manteiga amolecida",
        "1 col chá baunilha",
    ],
    directionsList: "",
    routerPath: "panqueca-americana"
}

const muffinDeBanana = {
    title: "Muffin de banana",
    ingredients: [
        "50 g manteiga sem sal",
        "100 g açúcar",
        "1 ovo",
        "2 bananas pequenas",
        "1/2 col chá baunilha",
        "3/4 cup farinha",
        "1/4 col chá sal",
        "1/2 col chá bicarbonato",
        "Chocolate opcional"
    ],
    directionsList: "",
    routerPath: "muffin-de-banana"
}

const boloDeCenoura = {
    title: "Bolo de cenoura",
    ingredients: [
        "4 ovos",
        "240 mL de óleo",
        "200 g de cenoura",
        "400 g de açúcar",
        "320 g farinha",
        "1 col sopa de fermento",
    ],
    directionsList: "",
    routerPath: "bolo-de-cenoura"
}

const cookie = {
    title: "Cookie",
    ingredients: [
        "90 g açúcar",
        "135 g açúcar mascavo",
        "100 mL manteiga derretida",
        "1 ovo",
        "1 col chá baunilha",
        "160 g farinha",
        "1/2 colher chá sal",
        "1 barra chocolate meio amargo",
        "1 barra chocolate ao leite",
    ],
    directionsList: "",
    routerPath: "cookie"
}

const boloDeNozes = {
    title: "Bolo de nozes",
    ingredients: [
        "1 1/4 xic farinha (remover 1 1/2 colher sopa",
        "2 2/1 colher sopa amido de milho",
        "1 xic açúcar",
        "3/8 xic óleo",
        "1 1/4 col chá fermento",
        "1.2 col chá baunilha",
        "1/4 col chá sal",
        "2 ovos",
        "1/2 xic leite",
    ],
    directionsList: "",
    routerPath: "bolo-de-nozes"
}


const allRecipes = [
    hummus,
    cheddarSauce,
    paoDeQueijo,
    nhoqueDeBatata,
    massaDeCoxinha,
    massaDePizza,
    quesoSauceDip,
    pipocaDoce,
    panquecaAmericana,
    muffinDeBanana,
    boloDeCenoura,
    cookie,
    boloDeNozes
]


function getRecipe(recipes, recipeId) {
    return recipes.find((recipe) => {
        return recipeId === recipe.routerPath
    })
}

export { allRecipes, getRecipe }
