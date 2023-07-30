let currentPage = "home"

document.querySelector(".links a.consejos").addEventListener("click", () => {
    currentPage = "consejos"
    $(".home").fadeOut(250, () => {
        $("div.consejos").fadeIn(250, () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    })
})

document.querySelector("div.consejos nav a.volver").addEventListener("click", function () {
    currentPage = "home"
    $("div.consejos").fadeOut(250, () => {
        $(".home").fadeIn(250, () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    })
})

document.querySelector(".links a.donations").addEventListener("click", () => {
    currentPage = "donations"
    $(".home").fadeOut(250, () => {
        $("div.donations").fadeIn(250, () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    })
})

document.querySelector("div.donations nav a.volver").addEventListener("click", function () {
    currentPage = "home"
    $("div.donations").fadeOut(250, () => {
        $(".home").fadeIn(250, () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    })
})