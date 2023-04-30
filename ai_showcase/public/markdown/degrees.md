# Solving the Six Degrees of Kevin Bacon Problem

In this project, I tackled the Six Degrees of Kevin Bacon problem, which involves finding the shortest path between two actors through the movies they have starred in. I implemented a function called `shortest_path` that returns the shortest path from one actor to another through the movies they starred in.

$$
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
$$

## Approach

The main approach to solving this problem is using a breadth-first search (BFS) algorithm. BFS is chosen as it guarantees finding the shortest path between the source and target actors.

### Data Structures

I utilized the following data structures in my solution:

- `QueueFrontier`: A queue that keeps track of the nodes to be explored. It represents the frontier in the BFS algorithm.
- `Node`: A custom class that stores the current state (movie and its actors), a reference to the parent node, and the action taken to reach the current state.

### Shortest Path Algorithm

In the `shortest_path` function, I first initialized the starting node with the source actor and added it to the frontier. The main loop of the function iterates as long as the frontier is not empty, meaning there are still nodes to explore. Inside the loop, I followed these steps:

1. Removed the current node from the frontier.
2. Checked if the current node's state contains the target actor. If so, returned the solution.
3. Generated the next possible actions based on the current state.
4. Iterated through the next actions and added new nodes to the frontier if they haven't been explored yet.

To generate the next possible actions, I used the `actions` function, which returns a set of movie-cast pairs that can be reached from the current state. Additionally, I implemented helper functions `goal`, `returnSolution`, and `results` to simplify the code and improve readability.

### Lessons Learned

Through this project, I learned the importance of selecting the right algorithm for the problem at hand. The breadth-first search algorithm is an effective choice for finding the shortest path between actors. Additionally, I realized the importance of carefully designing data structures to efficiently store and manage information during the search process.

Overall, this project provided valuable insights into the implementation of search algorithms and the use of data structures to solve a real-world problem.
