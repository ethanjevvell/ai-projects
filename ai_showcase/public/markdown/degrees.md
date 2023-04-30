# Solving the "Six Degrees of Kevin Bacon"

In the parlor game "Six Degrees of Kevin Bacon," people try to connect two actors/actresses by the shortest path possible. If we're trying to find the shortest path between Actor A and Actor C, for instance, we would observe that Actor A starred in a film with Actor B, and Actor B starred in another film with Actor C. Given IMDB's database of movie stars spanning decades, the task for this project was to find the shortest path between two stars.

---

## Approach

The main approach to solving this problem is using a breadth-first search (BFS) algorithm. BFS is chosen as it guarantees finding the shortest path between the source and target actors, even if it may be slower than a depth-first search (DFS) in some cases.

### Data Structures

I utilized the following data structures in my solution:

- `QueueFrontier`: A queue that keeps track of the nodes to be explored. It represents the frontier in the BFS algorithm.
- `Node`: A custom class that stores the current state (movie and its actors), a reference to the parent node, and the action taken to reach the current state.

### Shortest Path Algorithm

In the `shortest_path` function, I first initialized the starting node with the source actor and added it to the frontier. The main loop of the function iterates as long as the frontier is not empty, meaning there are still nodes to explore. Inside the loop, I followed these steps:

---

**1**. Removed the current node from the frontier.

**2**. Checked if the current node's state contains the target actor. If so, returned the solution.

**3**. Generated the next possible actions based on the current state.

**4**. Iterated through the next actions and added new nodes to the frontier if they haven't been explored yet.

To generate the next possible actions, I used the `actions` function, which returns a set of movie-cast pairs that can be reached from the current state. Additionally, I implemented helper functions `goal`, `returnSolution`, and `results` to simplify the code and improve readability.

```python
def shortest_path(source, target):
    """
    Returns the shortest list of (movie_id, person_id) pairs
    that connect the source to the target.

    If no possible path, returns None.

    STATE: A movie and its various actors
    ACTION: Move to a movie from one of those actors

    """

    shortestPath = []

    initialState = (None, source)
    startNode = Node(initialState, None, actions(initialState))
    frontier = QueueFrontier()
    explored = []

    currentNode = startNode
    frontier.add(currentNode)

    while True:
        # If there's no solution, return None
        if frontier.empty():
            return None

        currentNode = frontier.remove()

        if goal(currentNode, target):
            returnSolution(currentNode, target)

        nextActions = actions(currentNode.state)

        for action in nextActions:
            node = Node(
                results(currentNode.state, action),
                currentNode,
                action
            )

            if goal(node, target):
                return returnSolution(node, target)

            if node.state not in explored and not frontier.contains_state(node.state):
                frontier.add(node)

        explored.append(currentNode.state)
```

### Key Takeaway

BFS may be slow, but it is **guaranteed** to find the shortest path in a classic search problem.
