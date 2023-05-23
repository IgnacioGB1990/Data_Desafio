# Data - Desafio de Tripulaciones


## Project Summay - Water Footprint:

Based on a meticulous tailored survey designed by the Data Team, we managed to gather over **+1,000 surveys** to get valuable insights of Spanish consumers water footprint. 

Our Machine Learning model was oriented towards an **unsupervised classification** problem.

After trying and investigating the most popular algorithms we decided to opt for **K-means**.

We found out the following inconvenients in other models:
* **PCA:** initial preprocessing had to be made and complicated the process to deploy the model to AWS. 
* **DBSCAN:** the model had to be fitted for each new data inserted.

We initially decided to omit 2 out of the 15 survey questions as features, purely by intuition, to end up with 13 columns/features.

In order to make a more technical approach, we opted to **create an algorithm (took 71 mins!) to find out every possible combination** with a threshold of 5 features and ended up with 7,099 different possible combinations. We tested each combination in order to find the best possible outcome by measuring the **inertia and silhouette scores with 2 clusters.**





## Tasks:

* Use Git/Github commands.
* Get Data using Web Scraping and through API´s.
* Storing Data in non-relational and relational databases.
* Use SQL to retrieve info from database.
* EDA, feature engineering and apply ML models.
* Create API to manage data or ML predictions. 





## Members:

* Noya
* Daiana
* Sebas
* Jimena
* Daniel
* Tony
* Nacho
