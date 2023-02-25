class Popup {
    #popupElement;
    #selectorPopup;
    //закрытие окна по клавише Esc
    #handleEscUp = (evt) => {
        if(evt.key === 'Escape') {
            this.close();
        }
    }
        constructor(selectorPopup) {
            this.#popupElement = document.querySelector(`.${classPopup}`);
            this.#classPopup = classPopup;
        }
    
        open() {
            this.#popupElement.classList.add(`${this.#classPopup}_active`);
            document.addEventListener('keyup', this.#handleEscUp) 
            //addEventListener - ставим слушателя событий (какой слушатель, каку. функцию нужно выполнить)
        }
    
        close() {
            this.#popupElement.classList.remove(`${this.#classPopup}_active`);
            document.removeEventListener('keyup', this.#handleEscUp)
        }
    
        // не 'click':
        setEventListener(){
            this.#popupElement.addEventListener('mousedown', evt => {
                if(evt.target.classList.contains(this.#classPopup) || !!evt.target.closset('popup__close')) {
                    this.close()
                }
            })
        }
    }