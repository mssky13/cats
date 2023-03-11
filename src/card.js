export class Card {
    #data;
    #selectorTemplate;
    #element;
    #handleClickCatImage;
    #getTemplate(){
        const template = document.querySelector(this.#selectorTemplate).content.querySelector('.card');
        return template
    }

    constructor(data, selectorTemplate, handleClickCatImage, handleCatTitle, handleCatImage, handleLikeCard) {
        this._data = data;  // # or _?
        this._handleCatTitle = handleCatTitle;
        this.#selectorTemplate = selectorTemplate;
        this.#handleClickCatImage = handleClickCatImage;
        this._handleCatImage = handleCatImage;
        this._handleLikeCard = handleLikeCard;
    }

    
    _updateViewLake() {
        if(this._data.favourite) {
            this.cardLikeElement.classList.add('card__like_active');
        } else {
            this.cardLikeElement.classList.remove('card__like_active');
        }
    }

    _setLikeCat = () => {
        this._data.favourite = !this._data.favourite;
        this._handleLikeCard(this._data, this); // просто this?
    }

    getElement() {
        this.#element = this.#getTemplate().cloneNode(true);
        this.cardTitleElement = this.#element.querySelector('.card__name');
        this.cardImageElement = this.#element.querySelector('.card__image');
        this.cardLikeElement = this.#element.querySelector('.card__like');

        this.cardLikeElement.addEventListener('click', () => {
            this.#handleClickCatImage(this._data.image);
        })

        this.updateView();

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

    updateView() {
        this.cardTitleElement.textContent = this._data.name;
        this.cardImageElement.src = this._data.image; //мои коты в базе под ключом image, в видео - img_link

        this._updateViewLake();
    }

    deleteView() {
        this.#element.remove(); // #?
        this.#element = null; // #?
    }

    setEventListener() {
        this.cardTitleElement.addEventListener('click', () => this._handleCatTitle(this))
        this.cardImageElement.addEventListener('click', () => this._handleCatImage(this._data)) // # or _?
        this.cardLikeElement.addEventListener('click', this._setLikeCat);
    }

}