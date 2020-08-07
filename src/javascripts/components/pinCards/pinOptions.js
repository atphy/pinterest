import pinsData from '../../helpers/data/pins';
import utils from '../../helpers/utils';

const buildPinsForEditor = () => {
  pinsData.getPins()
    .then((pins) => {
      let domString = '<option value="">--New Pin--</option>';
      pins.forEach((pin) => {
        domString += `
          <option value="${pin.id}">${pin.name}</option>
        `;
      });
      utils.printToDom('#existingPins', domString);
    })
    .catch((err) => console.error('broken', err));
};

export default { buildPinsForEditor };
