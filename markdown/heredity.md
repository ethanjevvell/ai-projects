# Heredity Probability Model

This heredity probability model calculates the probability of inheriting certain genetic traits using a dataset of family trees.

### 1. Data Modeling and Loading

The program effectively models gene and trait data in a dictionary, making it simple to store and access information. The `load_data` function reads the data from a CSV file and creates a dictionary containing information about each person, their parents, and their trait status.

### 2. Joint Probability Calculation

The program calculates joint probabilities using the `joint_probability` function. This function takes into account the number of genes a person has, the probability of inheriting the gene from their parents, and the probability of having the trait given the number of genes. The function employs conditional probability and various probability rules to compute the joint probability for a specific combination of people with genes and traits.

### 3. Bayesian Networks

The heredity probability model also incorporates the concept of Bayesian networks, a graphical model that represents the probabilistic relationships among a set of variables. In this program, the Bayesian network is used to model the dependency of a person's gene inheritance and trait presence on their parents' genes. By using conditional probabilities and the rules of probability, we can update our beliefs about the probability of inheriting genes and traits as we gather more information from the family tree.

The program calculates joint probabilities using the chain rule of probability:

![Image not loaded properly](/equations/chainrule.png)

Where $G_i$ represents the number of genes a person $i$ has, $Parents(G_i)$ represents the gene information of the person's parents, and $T_i$ represents the

### 4. Probability Update and Normalization

The `update` function adds the calculated joint probability to the existing probability distributions for each person, considering the number of genes and whether they have the trait. Subsequently, the `normalize` function is used to ensure that the probability distributions for each person sum up to 1, which is crucial for maintaining accurate probability values.

### 5. Program Efficiency and Areas for Improvement

The program effectively calculates the probabilities of gene inheritance and trait presence; however, it might struggle with large datasets or complex family trees. The program's performance can potentially be improved by implementing more efficient algorithms for iterating through various combinations or utilizing parallel processing techniques to speed up calculations.
