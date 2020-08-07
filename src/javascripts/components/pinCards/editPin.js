import pinData from '../../helpers/data/pins';
import pinCards from './pinCards';
import pinOptions from './pinOptions';

const editPinForm = () => {
  pinData.getPinById($('#existingPins').val())
    .then((pin) => {
      $('#pinName').val(pin.data.name);
      $('#pinImg').val(pin.data.image);
      $('#pinLink').val(pin.data.url);
    });
};

const updateEditedPin = () => {
  const pinId = $('#existingPins').val();
  const updatedPin = {
    name: $('#pinName').val(),
    image: $('#pinImg').val(),
    url: $('#pinLink').val(),
  };
  pinData.updatePin(pinId, updatedPin)
    .then(() => {
      pinCards.buildPins();
      pinOptions.buildPinsForEditor();
    });
};

const updateEditedPinListener = () => {
  $('#submit-pin').click(updateEditedPin);
};

const pinEditSelectorChanged = () => {
  $('#existingPins').on('change', () => {
    editPinForm();
  });
};

export default { updateEditedPinListener, pinEditSelectorChanged };
