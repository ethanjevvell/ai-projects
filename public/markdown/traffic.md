# Traffic Sign Recognition using Convolutional Neural Networks

This Python program uses a Convolutional Neural Network (CNN) implemented with TensorFlow to classify traffic signs. The program loads data, preprocesses images, constructs a CNN model, trains the model on training data, and evaluates the model's performance on testing data.

## Convolutional Neural Networks

Convolutional Neural Networks (CNNs) are a class of deep learning models designed for processing grid-like data, such as images. A typical CNN consists of multiple layers, including convolutional layers, pooling layers, and fully connected layers. The main building blocks of CNNs are the convolution and pooling operations.

### Convolution

Convolution is a mathematical operation that combines two functions (in this case, an image and a kernel) to produce a third function that represents how the shape of one is modified by the other. In the context of image processing, convolution helps to detect features such as edges, corners, and textures.

### Pooling

Pooling is a downsampling operation that reduces the spatial dimensions of the feature maps. Pooling layers are used to reduce the number of parameters and computations in the network and to provide some degree of translation invariance. The most common types of pooling are max pooling and average pooling.

## Model Parameters

The CNN model in this program can be tweaked by changing several parameters that influence its performance and accuracy:

1. **Number of convolutional layers**: Increasing the number of convolutional layers can capture more complex features in the images but may also lead to overfitting and increased computational complexity.
2. **Kernel size**: The kernel size determines the size of the local receptive field. Larger kernels can capture more global information but may also increase the number of parameters in the model.
3. **Number of filters**: The number of filters in each convolutional layer determines the number of feature maps produced by the layer. Increasing the number of filters can improve the model's capacity to capture different features but may also increase its complexity.
4. **Activation function**: The activation function introduces non-linearity into the model. Common activation functions include ReLU, sigmoid, and tanh. The choice of activation function can affect the model's performance and convergence speed.
5. **Pooling method**: The choice between max pooling and average pooling can affect the model's ability to capture local information and provide translation invariance.
6. **Dropout rate**: Dropout is a regularization technique that helps to prevent overfitting. The dropout rate determines the fraction of neurons that are randomly dropped during training. Adjusting the dropout rate can improve the model's generalization performance.
7. **Number of epochs**: The number of epochs determines the number of times the model iterates through the entire dataset during training. Increasing the number of epochs can improve the model's performance but may also lead to overfitting.
8. **Batch size**: The batch size affects the number of samples used for each update during training. Larger batch sizes can lead to faster convergence but may require more memory and computational resources.
9. **Learning rate**: The learning rate is a hyperparameter that controls the step size used to update the model's weights during optimization. Adjusting the learning rate can affect the model's convergence speed and final performance.

My model achieved around 97% accuracy. One future project idea is to programmatically generate several hundred networks and graph their performance to help determine what parameters give the most bang for your buck.
