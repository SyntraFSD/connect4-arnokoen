var mobileDropdown = document.querySelector(".inactive");
var hamburger = document.querySelector(".Header-links--mobile-hamburger");
hamburger.addEventListener("click", function () {
  mobileDropdown.classList.toggle("inactive");
});
var board = [['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty']];

function drawBoard() {
  board.forEach(function (row, rowIndex) {
    var rowElement = document.createElement('div');
    var board = document.querySelector('#board');
    rowElement.classList.add('row');
    row.forEach(function (col, colIndex) {
      var colElement = document.createElement('div');
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
//# sourceMappingURL=index.js.map