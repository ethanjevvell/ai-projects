# Minesweeper

This Minesweeper AI program is divided into several parts, including a representation of the Minesweeper game itself, a Sentence class for logical statements about the game, and the MinesweeperAI class which contains the AI player logic. The MinesweeperAI class attempts to make safe moves based on its knowledge and resorts to random moves when it cannot infer any safe moves.

The Minesweeper class represents a Minesweeper game with randomly placed mines. It contains methods for checking whether a cell is a mine, finding the number of nearby mines, and checking whether the game is won.

The Sentence class is a logical statement about a Minesweeper game, consisting of a set of board cells and a count of the number of mines in those cells. Sentences can be updated with new information by marking a cell as a mine or marking it as safe.

The MinesweeperAI class is the AI player logic for the game. It keeps track of the moves made, known safe cells, known mines, and a list of sentences representing the AI's knowledge base. The AI uses this knowledge to make safe moves or random moves if no safe moves can be inferred.

The AI's knowledge is represented using a list of Sentence objects, where each Sentence is a logical statement of the form:

`{cells} = count`

Here, `cells` is a set of board cells, and `count` is the number of mines in those cells. The AI updates its knowledge base by adding new sentences and marking cells as safe or mines based on the information it gathers during the game.

The AI uses the following methods to update its knowledge and make moves:

`add_knowledge(cell, count)`: Updates the AI's knowledge base when given the number of neighboring mines for a safe cell. It marks the cell as a move that has been made, marks it as safe, and adds a new sentence to the knowledge base. Then, it marks any additional cells as safe or mines if it can be concluded from the knowledge base and adds any new sentences that can be inferred from the existing knowledge.

`make_safe_move()`: Returns a safe cell to choose on the Minesweeper board. The move must be known to be safe and not already a move that has been made. This function uses the knowledge in self.mines, self.safes, and self.moves_made but does not modify any of those values.

`make_random_move()`: Returns a random move to make on the Minesweeper board, choosing among cells that have not already been chosen and are not known to be mines.

The AI attempts to make safe moves by using the information in its knowledge base, and if no safe moves can be inferred, it resorts to making random moves.
