# Tic Tac Toe Player using Minimax Algorithm

This Python program implements a Tic Tac Toe player that uses the Minimax algorithm to make optimal moves. The program includes functions for handling game state, determining legal actions, and computing the utility of a game state.

## Minimax Algorithm

The Minimax algorithm is a recursive decision-making algorithm that evaluates the best possible move for a player in a zero-sum game (such as Tic Tac Toe). It assumes that both players play optimally and aims to minimize the potential loss for the worst-case scenario. The Minimax algorithm can be represented by the following equations:

$$
maxValue(state) = \max_{a \in actions(state)} minValue(result(state, a))
$$

$$
minValue(state) = \min_{a \in actions(state)} maxValue(result(state, a))
$$

The `maxValue()` function evaluates the maximum utility for player X, while the `minValue()` function evaluates the minimum utility for player O. The algorithm recursively explores the game tree, alternating between maximizing and minimizing player turns until terminal states are reached.

## Program Overview

The program includes several functions for handling the game state:

- `initial_state()`: Returns the starting state of the Tic Tac Toe board.
- `player(board)`: Determines which player has the next turn on the board.
- `actions(board)`: Returns a set of all possible actions (i, j) available on the board.
- `result(board, action)`: Returns the board that results from making a move (i, j) on the board.
- `winner(board)`: Returns the winner of the game if there is one.
- `terminal(board)`: Determines if the game is over.
- `utility(board)`: Returns the utility value for a terminal state (+1 for X win, -1 for O win, 0 for a draw).

The `minimax(board)` function is the core of the program. It returns the optimal action for the current player on the board by calling the `maxValue()` and `minValue()` functions.

## Evaluation and Decision Making

The Minimax algorithm evaluates the game states by assigning utility values to each terminal state. In Tic Tac Toe, a utility of +1 is assigned to a state where X wins, -1 for an O win, and 0 for a draw. The algorithm recursively explores the game tree, maximizing the utility for player X and minimizing the utility for player O until the terminal states are reached.

Minimax works for tic-tac-toe because the state space is relatively small. Imagine, now, that we applied minimax to chess, a game where there are dozens of possible moves per state, where each of those states branches into dozens of other moves. Clearly, this becomes computationaly untenable, so larger-scale applications of minimax utilize some form of Alpha-Beta pruning combined with clever heuristics to cut down on the number of branches the algorithm must explore.
