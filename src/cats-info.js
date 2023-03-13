import { generateRating, printNumerals } from "./utils.js";

export class CatsInfo {
    #selectorTemplate;
    constructor(
        selectorTemplate,
        handleEditCatInfo,
        handleLikeCat,
        handleDeleteCat
        ) {
            this.#selectorTemplate = selectorTemplate;
            this._handleEditCatInfo = handleEditCatInfo;
            this._handleLikeCat = handleLikeCat;
            this._handleDeleteCat = handleDeleteCat;
            this._data = {};
        }

    _updateViewLake() {
        if(this._data.favourite) {
            this.buttonLiked.classList.add('cat-info__favourite_active');
        } else {
            this.buttonLiked.classList.remove('cat-info__favourite_active');
        }
    }

    setData(cardInstance) { 
        this._cardInstance = cardInstance;
        this._data = this._cardInstance.getData();
        this.catImage.src = this._data.image;
        this.catDesc.textContent = this._data.description;
        this.catName.textContent = this._data.name;
        this.catAge.textContent = this._data.age;
        this.catId.textContent = this._data.id;

        this.catAgeText.textContent = printNumerals(this._data.age, [
            "год",
            "года",
            "лет"
        ]);

        this.catRate.innerHTML = generateRating(this._data.rate);

        this._updateViewLake();
    }
    
    _setLikeCat = () => {
        this._data.favourite = !this._data.favourite;
        this._updateViewLake();
        this._handleLikeCat(this._data, this._cardInstance);

    }

    #getTemplate(){ 
        const template = document.querySelector(this.#selectorTemplate).content.children[0];
        return template
    }

    _toggleContentEditable = () => {
        this.buttonEdited.classList.toggle('.cat-info__edited_hidden');
        this.buttonSaved.classList.toggle('.cat-info__saved_hidden');

        this.catDesc.ContentEditable = !this.catDesc.isContentEditable;
        this.catName.ContentEditable = !this.catName.isContentEditable;
        this.catAge.ContentEditable = !this.catAge.isContentEditable;
    }

    _savedDataCats = () => {
        this._toggleContentEditable();

        this._data.name = this.catName.textContent;
        this._data.age = Number(this.catAge.textContent);
        this._data.description = this.catDesc.textContent;

        this.handleEditCatInfo(this._cardInstance, this._data);
    }

    getElement() {
        this.element = this.#getTemplate().cloneNode(true);

        this.buttonEdited = this.element.querySelector('.cat-info__edited');
        this.buttonSaved = this.element.querySelector('.cat-info__saved');
        this.buttonLiked = this.element.querySelector('.cat-info__favourite');            
        this.buttonDeleted = this.element.querySelector('.cat-info__deleted');

        this.catImage = this.element.querySelector('.cat-info__image');
        this.catId = this.element.querySelector('.cat-info__id');
        this.catName = this.element.querySelector('.cat-info__name');
        this.catRate = this.element.querySelector('.cat-info__rate');
        this.catAge = this.element.querySelector('.cat-info__age-val');
        this.catAgeText = this.element.querySelector('.cat-info__age-text');
        this.catDesc = this.element.querySelector('.cat-info__desc');

        this.setEventListener();

        return this.element; 
    }

    setEventListener() {
        this.buttonDeleted.addEventListener("click", () =>
          this._handleDeleteCat(this._cardInstance)
        );

        this.buttonEdited.addEventListener('click', this._toggleContentEditable);
        this.buttonSaved.addEventListener('click', this._savedDataCats);
        this.buttonLiked.addEventListener('click', this._setLikeCat);
    }

}