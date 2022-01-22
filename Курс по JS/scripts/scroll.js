const links = document.querySelectorAll('.header-menu__item a');
seamless.polyfill();
links.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault()

        const id = element.getAttribute('href').substring(1)
        const section = document.getElementById(id)

        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: "smooth",
                block: "start",
            })
        }
    })
})
const link = document.querySelector('.card-details__link-characteristics');
link.addEventListener('click', (event) => {
    event.preventDefault()

    const id_link = link.getAttribute('href').substring(1)
    const section_characteristic = document.getElementById(id_link)
    seamless.elementScrollIntoView(section_characteristic, {
        behavior: "smooth",
        block: "center",
    })
})
