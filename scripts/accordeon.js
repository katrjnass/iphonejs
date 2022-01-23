const accordeonFunc = () => {
    const chItem = document.querySelectorAll('.characteristics__item')

    chItem.forEach((item, index) => {
        const chButton = item.querySelector('.characteristics__title')
        const chInfo = item.querySelector('.characteristics__description')

        const closeTab = () => {
            chItem.forEach((item) => {
                const chInfo = item.querySelector('.characteristics__description')
                const chButton = item.querySelector('.characteristics__title')
                if (chInfo.classList.contains('open')) {
                    chInfo.classList.remove('open')
                    chButton.classList.remove('active')
                    chInfo.style.height = ''
                }
            })
        }

        chButton.addEventListener('click', () => {
            if (chInfo.classList.contains('open')) {
                chInfo.style.height = ''

            } else {
                closeTab()
                chInfo.style.height = chInfo.scrollHeight + 'px'
            }
            chInfo.classList.toggle('open')
            chButton.classList.toggle('active')
        })
    })
}
accordeonFunc()