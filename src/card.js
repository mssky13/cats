class Card {
    #data;
    #selectorTemplate;

    #getTemplate(){
        const template = document.querySelector(this.#selectorTemplate).content.querySelector('.card');
        return template
    }

    constructor(data, selectorTemplate) {
        this.#data = data;
        this.#selectorTemplate =selectorTemplate;
    }

    getElement() {
        this.#element = this.#getTemplate().cloneNode(true);
        const cardTitleElement = this.#element.querySelector('.card__name');
        const cardImageElement = this.#element.querySelector('.card__image');
        const cardLikeElement = this.#element.querySelector('.card__like');

        cardTitleElement.textContent = this.#data.name
        cardImageElement.src = this.#data.img_link

        //наполнять карточку
        return this.#element;
    }


}