import pinsData from '../../helpers/data/pins';
import utils from '../../helpers/utils';
// import boardPinsData from '../../helpers/data/boardPinsData';

import './pinCards.scss';

const buildPins = () => {
  pinsData.getPins()
    .then((pins) => {
      console.warn('it works', pins);
      let domString = '';
      pins.forEach((pin) => {
        domString += `
        <div class="cardExample">
        <div class="deleteButtonContainer hidden" id="deleteButtonContainer">
          <button class="deleteCardButton" id="deleteCardButton"><i class="far fa-times-circle"></i></button>
        </div>
        <a href="${pin.url}">
        <img class="cardHeaderImg" src="${pin.image}">
        <div class="cardTitleContainer">
        <h1 class="cardTitle">${pin.name}</h1>
      </div>
    </a>
      </div>
      `;
      });
      utils.printToDom('#cardsArea', domString);
    })
    .catch((err) => console.error('broken', err));
};

export default { buildPins };
