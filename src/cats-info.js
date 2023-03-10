export class CatsInfo {
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

        setData(cardInstance) {
            this._cardInstance = cardInstance;
            this._data = this._cardInstance.getData()

        }

        #getTemplate(){   //or _getTemplate?
            const template = document.querySelector(this.#selectorTemplate).content.children[0];
            return template
        }

        

        getElement() {
            this.element = this._getTemplate().cloneNode(true);

            this.buttonEdited = this.element.querySelector('.cat-info__edited');
            this.buttonSaved = this.element.querySelector('.cat-info__saved');
            this.buttonLiked = this.element.querySelector('.cat-info__favourite');
            this.buttonDeleted = this.element.querySelector('.cat-info__deleted');

            this.catImage = this.querySelector('.cat-info__image');
            this.catId = this.querySelector('.cat-info__id');
            this.catName = this.querySelector('.cat-info__name');
            this.catRate = this.querySelector('.cat-info__rate');
            this.catAge = this.querySelector('.cat-info__age-val');
            this.catAgeText = this.querySelector('.cat-info__age-text');
            this.catDesc = this.querySelector('.cat-info__desc');

            this.setEventListener();

            return this.element;
            
        }

        setEventListener()

}