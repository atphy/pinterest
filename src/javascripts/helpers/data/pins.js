import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPins = () => utils.getter('pins');

const addNewPin = (newPinObj) => axios.post(`${baseUrl}/pins.json`, newPinObj);

const getPinById = (id) => axios.get(`${baseUrl}/pins/${id}.json`);

const updatePin = (pinId, updatedPin) => axios.put(`${baseUrl}/pins/${pinId}.json`, updatedPin);

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

export default {
  getPins, deletePin, addNewPin, getPinById, updatePin,
};
