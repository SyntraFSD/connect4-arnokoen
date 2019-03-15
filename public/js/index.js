// ------------------------- MODEL
var mainElement = document.querySelector('main');
var messageElement = document.querySelector('.drawMessage');
var htmlBoard = null;
var state = null; // ------------------------- UPDATE

function nState(state) {
  return JSON.parse(JSON.stringify(state));
}

function initGameState() {
  return {
    turn: 'yellow',
    winner: false,
    winnerColor: null,
    full: false,
    board: [['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty']]
  };
}

function toggleColor(color) {
  if (color === 'yellow') {
    return 'red';
  } else {
    return 'yellow';
  }
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
  var newState = nState(state);
  var colIndex = parseInt(colElement.dataset.index);
  var rowIndex = firstEmptyRow(state.board[colIndex]);

  if (rowIndex === false) {
    return false;
  } else {
    newState.board[colElement.dataset.index][rowIndex] = newState.turn;
    console.log(state.board);
    return newState;
  }
}

function fullCheck(board) {
  var boardFull = board.reduce(function (acc, col) {
    if (acc) {
      return col.slice(-1)[0] !== 'empty';
    }

    return acc;
  }, true);
  return boardFull;
}

function hasFourInARow(colArray) {
  console.log(colArray.reduce(function (acc, color, index, col) {
    if (index !== 0) {
      if (acc >= 4) {
        return acc;
      }

      if (color === col[index - 1] && color !== 'empty') {
        return acc + 1;
      }
    } else {
      return 1;
    }
  }, 0));
} // ------------------------- VIEW


function generateBoardHtml(board) {
  return board.reduce(function (colsHtml, col, colIndex) {
    var colHtml = '<div class="col" data-index="' + colIndex + '">';
    colHtml += col.reduce(function (rowsHtml, row) {
      return '<div class="row ' + row + '"></div>' + rowsHtml;
    }, '');
    colHtml += '</div>';
    return colsHtml + colHtml;
  }, '');
}

function drawTurn(boardElement, turn) {
  boardElement.classList.add(turn);
  boardElement.classList.remove(toggleColor(turn));
}

function stateMessage(state) {
  if (state.full === true) {
    return 'gelijk ';
  } else if (state.winner === true) {
    return 'winner ' + state.winnerColor;
  }

  return '';
}

function drawMessage(state) {
  messageElement.textContent = stateMessage(state);
}

function drawBoard(state, htmlElement, boardElement) {
  if (!boardElement) {
    boardElement = document.createElement('div');
    boardElement.id = 'board';
  }

  drawTurn(boardElement, state.turn);
  boardElement.innerHTML = generateBoardHtml(state.board);
  htmlElement.appendChild(boardElement);
  drawMessage(state);
  return boardElement;
} // ------------------------- EVENT


window.addEventListener('load', function () {
  state = initGameState();
  htmlBoard = drawBoard(state, mainElement);
  htmlBoard.addEventListener('click', function (event) {
    if (event.target.matches('.col,.row')) {
      var colElement = event.target.closest('.col');
      var newState = dropStone(colElement, state);

      if (newState) {
        state = newState;
        state.full = fullCheck(state.board);
        state.turn = toggleColor(state.turn);
        drawBoard(state, mainElement, htmlBoard);
      } else if (state.full === true) {
        state = initGameState();
        drawBoard(state, mainElement, htmlBoard);
      }
    }
  });
});
hasFourInARow(['red', 'red', 'red', 'red', 'empty', 'empty']);
//# sourceMappingURL=index.js.map