import pins from '../../helpers/data/pins';

const buildPins = () => {
  pins.getPins()
    .then((response) => console.error('it works', response.data))
    .catch((err) => console.error('broken', err));
};

export default { buildPins };
