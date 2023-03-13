import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
  constructor(className) {
    super(className);
  }
  
  open(data) {
    const imagePopup = this._popupElement.querySelector(".popup-cat-image");
    imagePopup.src = data.image;
    super.open();
  }
  
}
