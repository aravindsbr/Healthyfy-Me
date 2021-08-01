# **Healthify Me - An app to predict the healthiness of a person in %** 

Healthify Me is an AI application that predicts the % of healthiness of a person based on the person's various health factors such as 
Age, Max. Heartbeat rate,Blood Pressure level, Cholestrol level, Blood Sugar level and ECG level.

## Environment Setup :

i. Install python 3.7 and set the necessary paths into the PATH variable.

ii. Install jupyter notebook using the command : pip install jupyterlab

iii. Run the jupyter notebook in the localhost using the command : jupyter notebook

iv. Install all the packages mentioned in the requirements.txt

v. The required environment is up and all set to run the code in jupyter notebook.

## Problem Description :

A dataset is formed by taking into consideration some of the information of 300 individuals. The problem is : based on the given information about each individual we have to calculate the percentage of their health and suggestion diet, medication and workout based on their health status.

## Dataset :
The dataset consists of 300 individuals data.

The columns used in the dataset are:

**Mid** - Individual's identification number.

**Age** - displays the age of the individual.

**Sex** - displays the gender of the individual using the following format : 1 = male 0 = female.

**HBR** - displays the max heart rate achieved by an individual.

**Blood Pressure** -  displays the resting blood pressure value of an individual in mmHg (unit).

**Cholestrol** - displays the serum cholestrol in mg/dl (unit).

**Blood Sugar** - compares the fasting blood sugar value of an individual with 120mg/dl. If fasting blood sugar > 120mg/dl then : 1 (true) else : 0 (false).

**ECG** -  0 = normal 1 = having ST-T wave abnormality 2 = left ventricular hyperthrophy.

**Percentage of Healthiness** - displays individual's health percentage based on the above mentioned health parameters.

**Target** - Categorize individuals into 5 stages based on the health percentage.

>**Stage 0** - Health percentage - 50%-60%

>**Stage 1** - Health percentage - 60%-70%

>**Stage 2** - Health percentage - 70%-80%

>**Stage 3** - Health percentage - 80%-90%

>**Stage 4** - Health percentage - 90%-100%

# Model Training and Prediction :

We can train our prediction model by analyzing existing data because we already know the health percentage of each individuals. This process is also known as supervision and learning. The trained model is then used to predict if users suffer from heart disease. The training and prediction process is described as follows:

## Splitting:

First, data is divided into two parts using component splitting. In this experiment, data is split based on a ratio of 80:20 for the training set and the prediction set. The training set data is used in the logistic regression component for model training, while the prediction set data is used in the prediction component.

## Classification models used:

The following classification models are used - Logistic Regression, Random Forest Classfier, SVM, Naive Bayes Classifier, Decision Tree Classifier, LightGBM, XGBoost

**Logistic Regression :** Logistic regression is a statistical model that in its basic form uses a logistic function to model a binary dependent variable, although many more complex extensions exist. In regression analysis, logistic regression (or logit regression) is estimating the parameters of a logistic model (a form of binary regression).

**Random Forest Classfier :** A random forest is a meta estimator that fits a number of decision tree classifiers on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting. The sub-sample size is controlled with the max_samples parameter if bootstrap=True (default), otherwise the whole dataset is used to build each tree.

**SVM :** Support-vector machines are supervised learning models with associated learning algorithms that analyze data used for classification and regression analysis. Given a set of training examples, each marked as belonging to one or the other of two categories, an SVM training algorithm builds a model that assigns new examples to one category or the other, making it a non-probabilistic binary linear classifier (although methods such as Platt scaling exist to use SVM in a probabilistic classification setting).

**Naive Bayes Classifier :** Naïve Bayes classifiers are a family of simple "probabilistic classifiers" based on applying Bayes' theorem with strong (naïve) independence assumptions between the features. They are among the simplest Bayesian network models.

**Decision Tree Classifier :** Decision tree learning is one of the predictive modelling approaches used in statistics, data mining and machine learning. It uses a decision tree (as a predictive model) to go from observations about an item (represented in the branches) to conclusions about the item's target value (represented in the leaves).

**LightGBM :** LightGBM is a gradient boosting framework that uses tree based learning algorithms. 

**XGBoost :** XGBoost is used for supervised learning problems, where we use the training data (with multiple features) xi to predict a target variable yi. Before we learn about trees specifically, let us start by reviewing the basic elements in supervised learning.

## Prediction:

The two inputs of the prediction component are the model and the prediction set. The prediction result shows the predicted data, actual data, and the probability of different results in each group.

## Evaluation:

The confusion matrix, also known as the error matrix, is used to evaluate the accuracy of the model.
