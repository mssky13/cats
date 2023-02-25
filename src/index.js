const cardsContainer = document.querySelector('.cards');
const btnOpenPopup = document.querySelector('.btn');
const formCatAdd = document.querySelector('#popup-form-add');

const popupAdd = new Popup('popup-add');
const popupImage = new PopupWithImage('popup-cat-image');

function serializeForm(elements) {
    const formData = {};

    elements.forEach(input => {
        if (input.type === 'submit' || input.type === 'button') return
        if (input.type === 'checkbox') {
            formData[input.name] = input.checked;
        }
        if (input.type !== 'checkbox') {
            formData[input.name] = input.value;
        }
    })

    return formData;
}

function handleFormAddCat(e) {
    e.preventDefault();
    const elementsFormCat = [...formCatAdd.elements];
    const formData = serializeForm(elementsFormCat);
    console.log(formData);
    const newElement = new Card(formData, '#card-template', handleClickCatImage);
    cardsContainer.prepend(newElement.getElement());

    popupAdd.close();
}

function handleClickCatImage(dataSrc) {
    popupImage.open(dataSrc)
}

formCatAdd.addEventListener('submit', handleFormAddCat)

btnOpenPopup.addEventListener('click', (e) => {
    e.preventDefault();
    popupAdd.open()
})

cats.forEach(catData => {
    const newElement = new Card(catData, '#card-template', handleClickCatImage);
    cardsContainer.append(newElement.getElement());
});

popupAdd.setEventListener();
popupImage.setEventListener();

//console.log(newElement);

// const template = document.querySelector('#card-template'); //Element

// const newCatElement = template.content.querySelector('.card'); 

// cardsContainer.append(newCatElement.cloneNode(true))  // в конец
// cardsContainer.prepend(newCatElement.cloneNode(true)) prepend - перед контентом
             //cloneNode(true) - труе для того, чтобы клонирование было глубоким, будет скопированы все ссылки внутри)

