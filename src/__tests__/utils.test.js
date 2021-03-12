import { checkDraw, checkWinner } from "../utils";

test.each`
  gameBoard                                        | result
  ${["-", "-", "-", "-", "-", "-", "-", "-", "-"]} | ${false}
  ${["X", "-", "-", "X", "-", "-", "X", "-", "-"]} | ${true}
  ${["-", "X", "-", "-", "X", "-", "-", "X", "-"]} | ${true}
  ${["-", "-", "X", "-", "-", "X", "-", "-", "X"]} | ${true}
  ${["X", "X", "-", "-", "-", "-", "-", "-", "-"]} | ${false}
  ${["X", "X", "X", "-", "-", "-", "-", "-", "-"]} | ${true}
  ${["X", "-", "-", "-", "X", "-", "-", "-", "X"]} | ${true}
  ${["-", "-", "X", "-", "X", "-", "X", "-", "-"]} | ${true}
`("checkWinner state $gameBoard should be $result", ({ gameBoard, result }) => {
  expect(checkWinner(gameBoard)).toBe(result);
});

test.each`
  gameBoard     | result
  ${["-", "O"]} | ${false}
  ${["X", "O"]} | ${true}
`("checkDraw state $gameBoard should be $result", ({ gameBoard, result }) => {
  expect(checkDraw(gameBoard)).toBe(result);
});
