
// ------------------------- MODEL

const mainElement = document.querySelector('main');
const drawMessage = document.querySelector('.drawMessage');

let htmlBoard = null;
let state = null;

// ------------------------- UPDATE

function nState(state){
  return JSON.parse(JSON.stringify(state));
}

function initGameState() {
  return {
    turn: 'yellow',
    winner: false,
    winnerColor: null,
    full: false,
    board: [['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ],
  };
}

function toggleColor(turn) {
  if (state.turn === 'yellow') {
    return 'red';
  } else {
    return 'yellow';
  }
  /*
  htmlBoard.classList.remove('yellow');
  htmlBoard.classList.add('red'); */
}

function firstEmptyRow(col) {
  return col.reduce(function (acc, value, index) {
    if (acc === false && value === 'empty') {
      return index;
    }
    return acc;
  }, false);
}

function dropStone(colElement, state) {
  const newState = nState(state);
  const colIndex = parseInt(colElement.dataset.index);
  const rowIndex = firstEmptyRow(state.board[colIndex]);
  if (rowIndex === false) {
    return false;
  } else {
    newState.board[colElement.dataset.index][rowIndex] = newState.turn;
    console.log(state.board);
    return newState;
  }
}

function fullCheck(board) {
  const boardFull = board.reduce(function (acc, col) {
    if (acc) {
      return col.slice(-1)[0] !== 'empty';
    }
    return acc;
  }, true);
  return boardFull;
}

function fullCheckChecker(state) {
  if (fullCheck(state.board) === true) {
    state.full = true;
  }
  return state;
}

// ------------------------- VIEW

function generateBoardHtml(board) {
  return board.reduce(function (colsHtml, col, colIndex) {
    let colHtml = '<div class="col" data-index="' + colIndex + '">';
    colHtml += col.reduce(function (rowsHtml, row, rowIndex) {
      return '<div class="row ' + row + '"></div>' + rowsHtml;
    }, '');
    colHtml += '</div>';
    return colsHtml + colHtml;
  }, '');
}

function drawBoard(board, turn, htmlElement, boardElement) {
  if (!boardElement) {
    boardElement = document.createElement('div');
  }

  boardElement.id = 'board';
  boardElement.classList.add(turn);
  boardElement.innerHTML = generateBoardHtml(board);
  htmlElement.appendChild(boardElement);
  return boardElement;
}

function stateMessage(state) {
  if (state.full === true) {
    return 'gelijk';
  } else if (state.winner === true) {
    return 'winner ' + state.winnerColor;
  }

  return '';
}

// ------------------------- EVENT


htmlBoard.addEventListener('click', function (event) {

  if (event.target.matches('.col,.row')) {
    const colElement = event.target.closest('.col');
    const newBoard = dropStone(colElement, state);

    if (newBoard) {
      state.board = newBoard;
      state.full = fullCheck(state.board);
      state.turn = toggleColor(turn);
      drawMessage.textContent = stateMessage(state);
      drawBoard(state.board, state.turn, mainElement, htmlBoard);
    } else if (state.full === true) {
      initGameState();
      drawBoard(state.board, state.turn, mainElement, htmlBoard);
      drawMessage.textContent = stateMessage(state);
    }
  }
});

window.addEventListener('load', function () {
  state = initGameState();
});

htmlBoard = drawBoard(state.board, state.turn, mainElement);

//# sourceMappingURL=game.js.map
