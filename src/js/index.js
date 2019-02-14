const mobileDropdown = document.querySelector(".inactive");
const hamburger = document.querySelector(".Header-links--mobile-hamburger");


hamburger.addEventListener("click", function () {
  mobileDropdown.classList.toggle("inactive");
});

const board = [
  ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
];

function drawBoard() {
  board.forEach(function (row, rowIndex) {
    const rowElement = document.createElement('div');
    const board = document.querySelector('#board');
    rowElement.classList.add('row');
    row.forEach(function (col, colIndex) {
      const colElement = document.createElement('div');
      colElement.classList.add('col', col);
      colElement.dataset.rowIndex = rowIndex;
      colElement.dataset.colIndex = colIndex;
      rowElement.appendChild(colElement);
    });
    board.appendChild(rowElement);
  });
}
console.log("hjgdj");
drawBoard();
