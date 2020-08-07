import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBoards = () => utils.getter('boards');

const addNewBoard = (newBoardObj) => axios.post(`${baseUrl}/boards.json`, newBoardObj);

const getBoardById = (id) => axios.get(`${baseUrl}/boards/${id}.json`);

const updateBoard = (boardId, updatedBoard) => axios.put(`${baseUrl}/boards/${boardId}.json`, updatedBoard);

const deleteBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

const getSelectedBoardById = (id) => axios.get(`${baseUrl}/boards/${id}.json`);

export default {
  getBoards, deleteBoard, getSelectedBoardById, addNewBoard, getBoardById, updateBoard,
};
