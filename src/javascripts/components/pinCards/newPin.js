import pinData from '../../helpers/data/pins';
import pinCards from './pinCards';
import pinOptions from './pinOptions';

const addNewPin = () => {
  const newPinObj = {
    name: $('#pinName').val(),
    image: $('#pinImg').val(),
    url: $('#pinLink').val(),
  };
  pinData.addNewPin(newPinObj)
    .then(() => {
      pinCards.buildPins();
      pinOptions.buildPinsForEditor();
    });
  $('.deleteButtonContainer').removeClass('hidden');
};

const newPinSelector = () => {
  $('#submit-pin').click(addNewPin);
};

export default { newPinSelector };
