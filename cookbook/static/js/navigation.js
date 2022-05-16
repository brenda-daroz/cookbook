
function closeNav(e) {
    const arrayList = e.composedPath();

    for (let index = 0; index < arrayList.length; index++) {
        const element = arrayList[index];
        if (element.classList?.contains('main')) {

            document.body.classList.remove("nav__open");
            break;
        }
    }
}


function toggleNav() {
    document.body.classList.toggle("nav__open")
}


function init() {
    document.querySelector(".nav__close").addEventListener("click", () => {
        toggleNav();
    });


    const receitasDocesButton = document.querySelector(".doces__button");
    const receitasDocesList = document.querySelector(".doces__list");

    receitasDocesButton.addEventListener('click', () => {
        receitasDocesList.classList.toggle("a--ativo");
    });


    const receitasSalgadasButton = document.querySelector(".salgados__button");
    const receitasSalgadasList = document.querySelector(".salgados__list");

    receitasSalgadasButton.addEventListener('click', () => {
        receitasSalgadasList.classList.toggle("a--ativo");
    });

    // const menu = document.querySelector(".side__nav");
    const body = document.querySelector("body");
    // const main = document.querySelector("main");

    body.addEventListener("click", closeNav);

}



export default { init }