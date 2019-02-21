const mobileDropdown = document.querySelector(".inactive");
const hamburger = document.querySelector(".Header-links--mobile-hamburger");
const mainElement = document.querySelector("main");



hamburger.addEventListener("click", function () {
  mobileDropdown.classList.toggle("inactive");
});

const state = {
  turn: 'yellow',
  board: [
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
  ],
};

function generateBoardHtml(board) {
  return board.reduce(function (html, col, colIndex) {
    let colHtml = '<div class="col" data-index="' + colIndex + '">';
    colHtml += col.reduce(function (rowsHtml, row, rowIndex) {
      return rowsHtml + '<div class="row ' + row + '"></div>';
    }, '');
    colHtml += '</div>';
    return html + colHtml;
  }, '');
}

function drawBoard(board, turn, htmlElement) {
htmlElement.innerHTML="";
  const boardElement = document.createElement('div');
  boardElement.id = 'board';
  boardElement.classList.add(turn);
  boardElement.innerHTML = generateBoardHtml(board);
  htmlElement.appendChild(boardElement);
}

function changeTurn(state){
  let newState = state;
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
  const newState = state;
  const checkEmptyTile = boardColumn.reduce(function (emptyIndex, row, rowIndex) {
    if (emptyIndex === false) {
      if (row === 'empty') {
        return rowIndex;
      }
    }
    return emptyIndex;
  }, false);
  return checkEmptyTile;
}

function checkColumn(event,state) {
  let newState = state;
  if (event.target.matches('.col') || event.target.matches('.row')){
    const colElement = event.target.closest('.col');
    const colElementDataset = colElement.dataset.index;
    console.log(colElementDataset);
    const boardColumn = newState.board[colElementDataset];
    console.log(boardColumn);
    const indexToFill = checkEmpty(state, boardColumn);
    const board = document.querySelector('#board');
    drawBoard(state.board, state.turn, mainElement);
  }
}

mainElement.addEventListener('click', function (event) {
  checkColumn(event,state);
});
drawBoard(state.board, state.turn, mainElement);

