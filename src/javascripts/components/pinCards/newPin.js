import pinData from '../../helpers/data/pins';
import pinCards from './pinCards';

const addNewPin = () => {
  const newPinObj = {
    name: $('#pinName').val(),
    image: $('#pinImg').val(),
    url: $('#pinLink').val(),
  };
  pinData.addNewPin(newPinObj)
    .then(() => {
      pinCards.buildPins();
    });
};

const newPinSelector = () => {
  $('#submit-pin').click(addNewPin);
};

export default { newPinSelector };
