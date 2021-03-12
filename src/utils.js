export const checkWinner = (board) => {

  const isWinner = data => data === 'XXX' || data === 'OOO';

  const iterateBoard = (start, end, step) => {
    if (board[start] === "-") return false;
    let temp = board[start];
    for (let i = start + step; i <= end; i += step){
      temp += board[i];
    }
    return isWinner(temp);
  }

  const rows = (start, end) => iterateBoard(start, end, 1);
  const cols = (start, end) => iterateBoard(start, end, 3);

  return [
    rows(0, 2),
    rows(3, 5),
    rows(6, 8),
    cols(0, 6),
    cols(1, 7),
    cols(2, 8),
    iterateBoard(0, 8, 4),
    iterateBoard(2, 6, 2)
  ].some((x) => x === true);
};

export const checkDraw = (board) => !board.some(x => x === '-');