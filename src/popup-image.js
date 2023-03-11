import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
  constructor(className) {
    super(className);
  }
  
  open(data) {
    const imagePopup = this._popupElement.querySelector(".popup__image");
    imagePopup.src = data.Image; //image or Image?
    super.open();
  }
  
}
