const getData = () => {
    const list = document.querySelector('.cross-sell__list')
    const btn = document.querySelector('.cross-sell__add')
    let count = 1
    let stack = 4
    const render = (data) => {
        list.innerHTML = ''
        data.forEach((item) => {
            list.insertAdjacentHTML('beforeend', `
            <li>
                <article class="cross-sell__item">
                    <img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
                    <h3 class="cross-sell__title">${item.name}</h3>
                    <p class="cross-sell__price">${item.price}₽</p>
                    <button type="button" class="button button_buy cross-sell__button">Купить</button>
                </article>
            </li>
            `)
        })
    }
    const sliceArray = (data, index) => {
        return data.slice(0, index)
    }
    const changeData = (data) => {
        const newIndex = stack * count
        render(sliceArray(data, newIndex))
        if (data.length > newIndex) {

            count++
        } else {
            btn.style.display = 'none'
        }
    }
    const runFetch = () => {
        fetch('/cross-sell-dbase/dbase.json')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .then((data) => {
                changeData(data)
            })
    }
    btn.addEventListener('click', runFetch)
    runFetch()

}
getData()