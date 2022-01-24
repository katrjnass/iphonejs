const sendForm = () => {
    const delivBtn = document.querySelector('.card-details__button_delivery')
    const modal = document.querySelector('.modal')
    const modalTitle = modal.querySelector('.modal__title')
    const cardDetailsTitle = document.querySelector('.card-details__title')
    const modalclosebtn = modal.querySelector('.modal__close')
    const modalform = modal.querySelector('form')

    delivBtn.addEventListener('click', () => {
        modal.style.display = 'flex'
        modalTitle.textContent = cardDetailsTitle.textContent
    })
    modalclosebtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
    modalform.addEventListener('submit', (event) => {
        event.preventDefault()
        const labels = modal.querySelectorAll('.modal__label')
        const messagesArray = {}
        labels.forEach(label => {
            const span = label.querySelector('span')
            const input = label.querySelector('input')
            messagesArray[span.textContent] = input.value

        })
        const clearForm = () => {
            labels.forEach(label => {
                const span = label.querySelector('span')
                const input = label.querySelector('input')
                input.value = ''
                console.log(input.value)
            })
            modal.style.display = 'none'
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(messagesArray),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => {
                clearForm()
            })
    })

}
sendForm()