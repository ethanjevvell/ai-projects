# Mastering Nim Game Using Q-Learning AI

This program implements a Q-learning AI to play the game of Nim, a simple two-player game where players take turns removing objects from piles. The player who removes the last object loses. We'll create a Python program to train the AI and then let the AI compete against a human player.

### Program Overview:

The program consists of two main classes: `Nim` and `NimAI`. The `Nim` class represents the game state and handles the game logic. The `NimAI` class implements the Q-learning algorithm to learn the optimal strategy for playing the game.

### Q-Learning Theory

Q-learning is a reinforcement learning algorithm that helps an agent learn the optimal policy for a given environment. The agent learns by iteratively updating the Q-values (state-action values) using the following core equation:

![Image not loaded properly](/equations/qlearningfull.png)

Let’s break this down:

![Image not loaded properly](/equations/qlearning1.png)

This represents the Q value, or the value of the state we’re currently in, which we can think of as the expected cumulative reward of taking action a in state s and then following an optimal policy. Notice that we use this term three times in the Q-learning equation. Since the value of a state also depends on what states can follow it (and what rewards those states are associated with), we want to add the current Q value to some expression that represents that future reward:

![Image not loaded properly](/equations/qlearning2.png)

How can we determine this future value? We know that we receive some reward, r, for simply having taken action a. We then want to add to that reward the maximum Q value (itself still an estimate) of the states available to us. Assuming our model is optimized correctly, it should seek the highest reward; in this case, the highest reward comes from the value of an action and the maximum value of the actions that can come after it.

![Image not loaded properly](/equations/qlearning3.png)

We can introduce a discount factor, γ, which controls how much we want to take future rewards into consideration:

![Image not loaded properly](/equations/qlearning4.png)

Notice, however, that the formula so far does not account for whether those future values are actually better or not than the current Q value. Thus, we want to make sure that that future reward is ultimately higher than the state we’re in. Otherwise, what’s the point of taking an action that leads to a lower estimated Q value?

![Image not loaded properly](/equations/qlearning5.png)

Now our agent is saying: “I want to take a move that will get me both a good immediate reward, as well as lead to states and actions that appear to present higher rewards. But I don’t want to take actions that will ultimately lead to lower estimated total rewards.”

Finally, we introduce α, a learning coefficient, which determines how fast we want the model to take into consideration new estimates:

![Image not loaded properly](/equations/qlearningfull.png)

When α is set to one, the value of the current state is completely overwritten, since the two terms of Q(s_t, a_t) cancel each other out. When α is set to 0, the agent learns nothing. We want to find a balance between these.
