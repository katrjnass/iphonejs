const tabFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change')
    const nameTab = document.querySelector('.card-details__title')
    const priceTab = document.querySelector('.card-details__price')
    const memoryTab = document.querySelector('.card-details__description-item.description__memory')
    const imageTab = document.querySelector('.card__image_item')
    const siteTitle = document.querySelector('title')
    const tabsOption = [
        {
            name: 'Graphite',
            memory: '128',
            price: 60000,
            image: 'img/iPhone-graphite.webp'

        },
        {
            name: 'Silver',
            memory: '256',
            price: 65000,
            image: 'img/iPhone-silver.webp'
        },
        {
            name: 'Sierra Blue',
            memory: '512',
            price: 70000,
            image: 'img/iPhone-sierra_blue.webp'
        }
    ]
    const changeTitle = (indexClickedTab) => {
        siteTitle.textContent = tabs[indexClickedTab].textContent
    }
    const changeInfo = (indexClickedTab) => {
        nameTab.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOption[indexClickedTab].memory}GB ${tabsOption[indexClickedTab].name}`
        memoryTab.textContent = `Встроенная память (ROM) ${tabsOption[indexClickedTab].memory}ГБ`
        priceTab.textContent = `${tabsOption[indexClickedTab].price}₽`
        imageTab.setAttribute('src', tabsOption[indexClickedTab].image)
    }
    const changeActiveClass = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active')
            if (index === indexClickedTab) {
                tab.classList.add('active')
            }
        })

    }
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveClass(index)
            changeInfo(index)
            changeTitle(index)
        })
    })

    changeInfo(0)
    changeTitle(0)
}
tabFunc()