export class Card {
    #data;
    #selectorTemplate;
    #element;
    #handleClickCatImage;
    #getTemplate(){
        const template = document.querySelector(this.#selectorTemplate).content.querySelector('.card');
        return template
    }

    constructor(data, selectorTemplate, handleClickCatImage, handleCatTitle, handleCatImage) {
        this.#data = data;  // # or _?
        this._handleCatTitle = handleCatTitle;
        this.#selectorTemplate = selectorTemplate;
        this.#handleClickCatImage = handleClickCatImage;
        this._handleCatImage = handleCatImage;
    }

    getElement() {
        this.#element = this.#getTemplate().cloneNode(true);
        this.cardTitleElement = this.#element.querySelector('.card__name');
        this.cardImageElement = this.#element.querySelector('.card__image');
        this.cardLikeElement = this.#element.querySelector('.card__like');

        if(!this.#data.favourite) {
            this.cardLikeElement.remove()
        }

        this.cardLikeElement.addEventListener('click', () => {
            this.#handleClickCatImage(this.#data.image);
        })
       
        this.cardTitleElement.textContent = this.#data.name
        this.cardImageElement.src = this.#data.image

        this.setEventListener();
        return this.#element;
    }

    getData() {
        return this._data; // # or _?
    }

    getId() {
        return this._data._id; // # or _?
    }

    setData(newData) {
        this._data = newData; // # or _?
    }

    deleteView() {
        this.#element.remove(); // #?
        this.#element = null; // #?
    }

    setEventListener() {
        this.cardTitleElement.addEventListener('click', () => this._handleCatTitle(this))
        this.cardImageElement.addEventListener('click', () => this._handleCatImage(this._data)) // # or _?
    }

}