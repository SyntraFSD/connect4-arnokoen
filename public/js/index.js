var mobileDropdown = document.querySelector(".inactive");
var hamburger = document.querySelector(".Header-links--mobile-hamburger");
var mainElement = document.querySelector("main");
hamburger.addEventListener("click", function () {
  mobileDropdown.classList.toggle("inactive");
});
var state = {
  turn: 'yellow',
  board: [['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty']]
};

function generateBoardHtml(board) {
  return board.reduce(function (html, col, colIndex) {
    var colHtml = '<div class="col" data-index="' + colIndex + '">';
    colHtml += col.reduce(function (rowsHtml, row, rowIndex) {
      return rowsHtml + '<div class="row ' + row + '"></div>';
    }, '');
    colHtml += '</div>';
    return html + colHtml;
  }, '');
}

function drawBoard(board, turn, htmlElement) {
  var boardElement = document.createElement('div');
  boardElement.id = 'board';
  boardElement.classList.add(turn);
  boardElement.innerHTML = generateBoardHtml(board);
  htmlElement.appendChild(boardElement);
}

function changeTurn(state) {
  var newState = state;

  if (newState.turn === 'yellow') {
    newState.turn = 'red';
  } else {
    newState.turn = 'yellow';
  }

  return newState;
}
/*const blabla = state.board.reduce(function(acc, col, colIndex){
  if (acc === false){
    if (col === 'empty') {
      return colIndex;
    }
  }
  return acc + colIndex;
}, false);
console.log(blabla);*/


function checkEmpty(state, boardColumn) {
  var newState = state;
  var checkEmptyTile = boardColumn.reduce(function (emptyIndex, row, rowIndex) {
    if (emptyIndex === false) {
      if (row === 'empty') {
        return rowIndex;
      }
    }

    return emptyIndex;
  }, false);
  console.log(checkEmptyTile);
}

function checkColumn(event) {
  var newState = state;

  if (event.target.matches('.col') || event.target.matches('.row')) {
    var colElement = event.target.closest('.col');
    var colElementDataset = colElement.dataset.index;
    console.log(colElementDataset);
    var boardColumn = newState.board[colElementDataset];
    console.log(boardColumn);
    checkEmpty(state, boardColumn);
    console.log(fillColumn());
  }
}

function fillColumn(emptyIndex, rowIndex) {}

mainElement.addEventListener('click', checkColumn);
drawBoard(state.board, state.turn, mainElement);
//# sourceMappingURL=index.js.map