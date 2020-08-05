import boardsData from '../../helpers/data/boards';
import utils from '../../helpers/utils';

// import utils from '../../helpers/utils';

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
        console.warn(boardName);
        utils.printToDom('#selectedBoardHeader', boardName);
      });
  }
};

const displayBoardSelectNameClicker = () => {
  $('.boardOptions').click(setSelectedBoardId);
  $('.boardOptions').click(setBoardHeader);
};

export default { displayBoardSelectNameClicker };
