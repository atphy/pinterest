import boardsData from '../../helpers/data/boards';
import utils from '../../helpers/utils';

let selectedBoardId = '';

const setSelectedBoardId = (e) => {
  selectedBoardId = e.target.closest('.boardOptions').id;
};

const setBoardHeader = () => {
  if (selectedBoardId === '') {
    utils.printToDom('#selectedBoardHeader', 'All Pins');
  } else {
    boardsData.getSelectedBoardById(selectedBoardId)
      .then((response) => {
        const boardName = response.data.name;
        utils.printToDom('#selectedBoardHeader', boardName);
      });
  }
};

const setEditBoxValue = () => {
  $('#existingBoards').val(selectedBoardId);
};

const displayBoardSelectNameClicker = () => {
  $('.boardOptions').click(setSelectedBoardId);
  $('.boardOptions').click(setBoardHeader);
  $('.boardOptions').click(setEditBoxValue);
  $('.boardOptions').on('click', () => {
    if ($('#existingBoards').val()) {
      $('#delete-board').removeClass('hidden');
    } else {
      $('#delete-board').addClass('hidden');
    }
  });
};

export default {
  displayBoardSelectNameClicker, selectedBoardId, setBoardHeader,
};
