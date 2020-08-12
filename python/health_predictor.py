import pandas as pd

# import warnings filter
from warnings import simplefilter

# ignore all future warnings
simplefilter(action='ignore', category=FutureWarning)
# import warnings filter
from warnings import simplefilter

# ignore all future warnings
simplefilter(action='ignore', category=FutureWarning)

#'C://Users/praveen.ram.kannan/Desktop/WFH/asset/Healthy Me/Healthyfy_Me.csv'
# D:/ai-healthy-me/resources/Healthyfy_Me.csv
df = pd.read_csv('Healthyfy_Me.csv')

df.columns = ['Mid', 'age', 'sex', 'hbr', 'bp', 'chol',
              'sugar', 'ecg', 'Percent', 'target']

### 1 = male, 0 = female
#checks null cells in a csv
df.isnull().sum()

df['target'] = df.target.map({-1: 0, 0: 50, 1: 60, 2: 70, 3: 80, 4: 90})
df['sex'] = df.sex.map({0: 'female', 1: 'male'})

import matplotlib.pyplot as plt
import seaborn as sns

# barplot of age vs sex with hue = target
sns.catplot(kind='bar', data=df, y='age', x='sex', hue='target')
plt.title('Distribution of age vs sex with the target class')
plt.show()

df['sex'] = df.sex.map({'female': 0, 'male': 1})

######### Pie chart #########
#print(df['target'])
count_1,count_2,count_3,count_4,count_5 = 0,0,0,0,0

for i in df['target']:
    if (i >= 50) & (i <=59):
        count_1 = count_1 + 1
    if (i >= 60) & (i <=69):
        count_2 = count_2 + 1
    if (i >= 70) & (i <=79):
        count_3 = count_3 + 1
    if (i >= 80) & (i <=89):
        count_4 = count_4 + 1
    if (i >= 90) & (i <=100):
        count_5 = count_5 + 1
        
#print(df[((df['target']>=90) & (df['target']<=100))].count())
        
firms = ['60-69','70-79','80-89','90-100']
market_share = [count_2,count_3,count_4,count_5]
Explode = [0,0.1,0,0]  
plt.pie(market_share,explode=Explode,labels=firms,shadow=True,startangle=45,autopct='%1.1f%%')
plt.axis('equal')
plt.title("People's health % chart\n")
plt.show()

################################## data preprocessing
#(returns all values, all values expect target)
X = df.iloc[:, :-1].values
#(returns all values, all values expect target)
y = df.iloc[:, -1].values

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

from sklearn.preprocessing import StandardScaler as ss

sc = ss()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

#########################################   SVM   #############################################################
from sklearn.svm import SVC

classifier = SVC(kernel='rbf')
classifier.fit(X_train, y_train)

# Predicting the Test set results
y_pred = classifier.predict(X_test)

print('Prediction Results :', y_pred)

from sklearn.metrics import confusion_matrix

cm_test = confusion_matrix(y_pred, y_test)
# print ('Confusion Matrix'+ cm_test)

y_pred_train = classifier.predict(X_train)
cm_train = confusion_matrix(y_pred_train, y_train)

print()
print('Accuracy for training set for svm = {}'.format((cm_train[0][0] + cm_train[1][1]) / len(y_train)))
print('Accuracy for test set for svm = {}'.format((cm_test[0][0] + cm_test[1][1]) / len(y_test)))

#########################################   Naive Bayes  #############################################################
X = df.iloc[:, :-1].values
y = df.iloc[:, -1].values

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

from sklearn.naive_bayes import GaussianNB

classifier = GaussianNB()
classifier.fit(X_train, y_train)

# Predicting the Test set results
y_pred = classifier.predict(X_test)

from sklearn.metrics import confusion_matrix

cm_test = confusion_matrix(y_pred, y_test)

y_pred_train = classifier.predict(X_train)
cm_train = confusion_matrix(y_pred_train, y_train)

print()
print('Accuracy for training set for Naive Bayes = {}'.format((cm_train[0][0] + cm_train[1][1]) / len(y_train)))
print('Accuracy for test set for Naive Bayes = {}'.format((cm_test[0][0] + cm_test[1][1]) / len(y_test)))

#########################################   Decision Tree  #############################################################
X = df.iloc[:, :-1].values
y = df.iloc[:, -1].values

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
from sklearn import tree

classifier = tree.DecisionTreeClassifier()
classifier.fit(X_train, y_train)

# Predicting the Test set results
y_pred = classifier.predict(X_test)

from sklearn.metrics import confusion_matrix

cm_test = confusion_matrix(y_pred, y_test)

y_pred_train = classifier.predict(X_train)
cm_train = confusion_matrix(y_pred_train, y_train)

print()
print('Accuracy for training set for Decision Tree = {}'.format((cm_train[0][0] + cm_train[1][1]) / len(y_train)))
print('Accuracy for test set for Decision Tree = {}'.format((cm_test[0][0] + cm_test[1][1]) / len(y_test)))
# Plot the decision tree
tree.plot_tree(classifier)

#########################################  Random Forest  #############################################################
X = df.iloc[:, :-1].values
y = df.iloc[:, -1].values

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

from sklearn.ensemble import RandomForestClassifier

classifier = RandomForestClassifier(n_estimators=10)
classifier.fit(X_train, y_train)

# Predicting the Test set results
y_pred = classifier.predict(X_test)

from sklearn.metrics import confusion_matrix

cm_test = confusion_matrix(y_pred, y_test)

y_pred_train = classifier.predict(X_train)
cm_train = confusion_matrix(y_pred_train, y_train)

print()
print('Accuracy for training set for Random Forest = {}'.format((cm_train[0][0] + cm_train[1][1]) / len(y_train)))
print('Accuracy for test set for Random Forest = {}'.format((cm_test[0][0] + cm_test[1][1]) / len(y_test)))

###############################################################################
# applying lightGBM
import lightgbm as lgb

d_train = lgb.Dataset(X_train, label=y_train)
params = {}

clf = lgb.train(params, d_train, 100)
# Prediction
y_pred = clf.predict(X_test)
# convert into binary values
for i in range(0, len(y_pred)):
    if y_pred[i] >= 0.5:  # setting threshold to .5
        y_pred[i] = 1
    else:
        y_pred[i] = 0

from sklearn.metrics import confusion_matrix

cm_test = confusion_matrix(y_pred, y_test)

y_pred_train = clf.predict(X_train)

for i in range(0, len(y_pred_train)):
    if y_pred_train[i] >= 0.5:  # setting threshold to .5
        y_pred_train[i] = 1
    else:
        y_pred_train[i] = 0

cm_train = confusion_matrix(y_pred_train, y_train)
print()
print('Accuracy for training set for LightGBM = {}'.format((cm_train[0][0] + cm_train[1][1]) / len(y_train)))
print('Accuracy for test set for LightGBM = {}'.format((cm_test[0][0] + cm_test[1][1]) / len(y_test)))

###############################################################################
# applying XGBoost

# from sklearn.model_selection import train_test_split
# X_train, X_test, y_train, y_test = train_test_split(X, target, test_size = 0.20, random_state = 0)

from xgboost import XGBClassifier

xg = XGBClassifier()
xg.fit(X_train, y_train)
y_pred = xg.predict(X_test)

from sklearn.metrics import confusion_matrix

cm_test = confusion_matrix(y_pred, y_test)

y_pred_train = xg.predict(X_train)

for i in range(0, len(y_pred_train)):
    if y_pred_train[i] >= 0.5:  # setting threshold to .5
        y_pred_train[i] = 1
    else:
        y_pred_train[i] = 0

cm_train = confusion_matrix(y_pred_train, y_train)
print()
print('Accuracy for training set for XGBoost = {}'.format((cm_train[0][0] + cm_train[1][1]) / len(y_train)))
print('Accuracy for test set for XGBoost = {}'.format((cm_test[0][0] + cm_test[1][1]) / len(y_test)))
