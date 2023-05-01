# K-Nearest Neighbors and Perceptron Learning in E-commerce

This Python program demonstrates the use of the k-nearest neighbors (KNN) classifier for predicting customer behavior in an e-commerce setting. The program takes a CSV file containing customer data and uses the KNN classifier to predict whether a customer will generate revenue for the business or not. The model is evaluated using sensitivity (True Positive Rate) and specificity (True Negative Rate) metrics.

## K-Nearest Neighbors Classifier

The KNN algorithm is a simple and effective supervised machine learning technique used for classification and regression tasks. It works by finding the `k` most similar instances (neighbors) to a given data point and using the majority class label of these neighbors as the predicted class label. The similarity between instances is typically measured using a distance metric, such as Euclidean distance.

## Perceptron Learning

Perceptron learning is a related linear classification algorithm that iteratively updates its weights by learning from the training data. The update rule for the weights is as follows:

![Image not loaded properly](/equations/perceptronlearning.png)

where $w_t$ is the weight vector at time $t$, $\eta$ is the learning rate, $y_t$ is the true label, $\hat{y_t}$ is the predicted label, and $x_t$ is the input feature vector.

However, the KNN classifier used in this program does not involve perceptron learning, as KNN is a non-parametric, instance-based learning algorithm that does not require weight updates during the learning process.

## Program Overview

The `main()` function checks for command-line arguments and loads the data using the `load_data()` function. The data is then split into training and test sets using the `train_test_split()` function from the `sklearn.model_selection` module.

The `train_model()` function creates a KNeighborsClassifier object from the `sklearn.neighbors` module with `n_neighbors=1` and fits the model using the training data. The model's predictions are obtained using the `predict()` method.

The `evaluate()` function calculates the sensitivity and specificity of the model by comparing the true labels with the predicted labels.

## Data Preprocessing

The `load_data()` function reads the CSV file, extracts the features (evidence) and labels, and cleans the data. It uses dictionaries to map categorical data to numerical values, such as months, visitor types, and revenue. The data is then cast to the appropriate data types (float or int) as required.

## Evaluation Metrics

The performance of the classifier is assessed using the True Positive Rate (sensitivity) and True Negative Rate (specificity). Sensitivity measures the proportion of actual positive cases that were correctly predicted, while specificity measures the proportion of actual negative cases that were correctly predicted. These metrics provide insights into the classifier's ability to accurately predict customer behavior in the e-commerce setting.

In conclusion, this program demonstrates the use of the KNN classifier for predicting customer behavior in an e-commerce environment. Although perceptron learning is not employed in this particular program, it is another powerful learning algorithm used for linear classification tasks.
