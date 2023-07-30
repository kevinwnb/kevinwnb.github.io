let endorsmentType

document.querySelectorAll("section#inicio .arrow").forEach(e => {
    e.addEventListener("click", function () {
        $("html").animate({
            scrollTop: $("section#proyectos").offset().top - 70
        }, 0);
    })
})

document.querySelectorAll(".navbar .nav-link").forEach(item => {
    item.addEventListener("click", (event) => {
        $("html").animate({
            scrollTop: $("section#" + event.target.id.substring(5)).offset().top - 70
        }, 0);
    });
});

$("#btnScrollToContactMe").click(function () {
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $("html, body").animate({
        scrollTop: $("section#contactMe").offset().top
    }, 500);
});


//change active link via scroll
window.onscroll = () => {
    var current = "";

    document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll("a.nav-link").forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
            a.classList.add("active");
        }
    });

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 150) {
        document.querySelector(".navbar .nav-link.active").classList.remove("active");
        document.querySelector("#link-contact").classList.add("active");
    }
};

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})



function setEndorsmentType(event) {
    endorsmentType = event.target.id
}

function endorsar(e) {
    e.preventDefault()
    let nombre = document.querySelector('.formulario-endorsar input[name="nombre"]').value
    let email = document.querySelector('.formulario-endorsar input[name="email"]').value
    let comentario = document.querySelector('.formulario-endorsar input[name="comentario"]').value

    fetch('api/endorsar.php', {
        method: 'POST',
        body: JSON.stringify({
            nombre: nombre,
            email: email,
            comentario: comentario,
            tipo: endorsmentType
        })
    })
        .then(res => res.json())
        .then(data => {
            document.querySelector(".modal .formulario-endorsar").classList.add("d-none")
            document.querySelector(".modal .msg").classList.remove("d-none")
            document.querySelector(".formulario-endorsar").reset()
            setTimeout(function () {
                var modal = bootstrap.Modal.getInstance(document.getElementById('modal'))
                modal.hide()
                document.querySelector("#modal").addEventListener("hidden.bs.modal", function () {
                    document.querySelector(".modal .formulario-endorsar").classList.remove("d-none")
                    document.querySelector(".modal .msg").classList.add("d-none")
                })
            }, 2000);
        })
}
