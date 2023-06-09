# Desafío de Tripulaciones (Data) - Project <a href="https://lahuelladelagua.netlify.app" target="blank">Blue</a>
<img src="https://github.com/IgnacioGB1990/Data_Desafio/assets/55360078/f9c42553-192e-4d8e-a1b1-ca452c81cd59" alt="be" />

<!--
<a href="https://lahuelladelagua.netlify.app/" > <img src="https://github.com/IgnacioGB1990/Data_Desafio/assets/55360078/f9c42553-192e-4d8e-a1b1-ca452c81cd59" alt="be" /> </a>
-->

The **goal** of this project is to calculate the water footprint of Spanish consumers and help them **reduce it** by giving them tailored advice.

We decided to classify consumers into **two groups** and applied **unsupervised machine learning algorithms** suited for this task.





## Project Summary - Water Footprint 💧:

Based on a meticulous tailored <a target="_blank" href="https://form.typeform.com/to/zCsmiPAp">survey</a> designed by the Data Team, we managed to gather over **+1,000 surveys in 3 days** to get valuable insights of Spanish consumers water footprint.

Our Machine Learning model was oriented towards an **unsupervised classification** problem.

After trying and investigating the most appropriate algorithms we decided to opt for **K-means**.

We found out the following inconvenients in other models:
* **PCA:** initial preprocessing had to be made and complicated the process to deploy the model to AWS. 
* **DBSCAN:** the model had to be fitted for each new data inserted.

We initially decided to omit 2 out of the 15 survey questions as features, purely by intuition, to end up with 13 columns/features.

In order to make a more technical approach, we opted to **create an algorithm (took 71 mins!) to find out every possible combination** with a threshold of 5 features and ended up with 7,099 different possible combinations. We tested each combination in order to find the best possible outcome by measuring the **inertia and silhouette scores with 2 clusters.** Our optimal combination was reduced to 5 features. 


## Monitoring the data 📊:

The **first step** before creating a ML model is to **monitor our data**. Monitoring allows us to assess the **quality and cleanliness** of the dataset, helps ensure that the dataset contains **all the necessary variables and features required for training**, allows us to understand the **distribution of the data across different variables** and helps in evaluating the **performance of the ML model during training and testing phases**. We used the <a href="https://www.evidentlyai.com/" target="blank">Evidently</a> library for Python to create the monitoring architecture and measure **drift.**

**Drift** refers to a change in the statistical properties of the data over time. It occurs when the underlying data distribution used to train a machine learning **model changes** in some way, leading to a **degradation** in model performance.

![Monitoring](https://github.com/IgnacioGB1990/Data_Desafio/assets/122172490/e0e66fc6-2cc4-4aef-b445-808b41f36879)
![Monitoring2](https://github.com/IgnacioGB1990/Data_Desafio/assets/122172490/de1609c5-bc6d-46e9-8ab0-0d9650d39f93)

## Cluster Classification Results 👥:

**Cluster 0 - Less water conscious:**
* Greater concern for economic savings
* No water recycling
* They recycle paper, glass, and plastic
* Regular meat consumption
* They do not have a garden

**Cluster 1 - More water conscious:**
* Greater concern for the ecosystem and water saving 
* Water recycling
* Do not usually recycle paper, glass and plastic
* Regular meat consumption
* They do not have a garden

## Data 📈:

The rough task of extracting data of water footprint due to the lack of specified information lead the Data Team to **design a survey** in order to reach valuable data of Spanish consumers and make an unsupervised ML model.

The survey had to be **user-friendly**, so the answer buttons should have been with words, mostly. Due to the fact that the model needed to have numerical features, the Data Team managed to **convert the answers** to numbers defining a bunch of **functions with calculations**. We made a research and based our calculations from several papers from UNESCO and researchs in USA. This calculus for converting data are made with the **latest and best available data** we found at this time. In some cases, we have used data that looked at personal water use based on individual behaviors. In other cases, we took data to calculate individual water use. This effort points out that there is a lack of consistent, high quality water-use data collected globally, so the results must be viewed with this in mind.

Some of the places we gather information:

* <a href="https://www.watercalculator.org/wp-content/uploads/2020/04/WFC-Methodology-August-2020.pdf" target="blank">Water Calculator</a>
* <a href="https://www.watercalculator.org/wp-content/uploads/2020/04/WFC-Methodology-August-2020.pdf" target="blank">Showerheads</a>
* <a href="https://www.watercalculator.org/wp-content/uploads/2020/04/WFC-Methodology-August-2020.pdf" target="blank">Kitchen Laundry Guide</a>
* <a href="https://www.watercalculator.org/wp-content/uploads/2020/04/WFC-Methodology-August-2020.pdf" target="blank">Circle of Blue</a>
* <a href="https://www.watercalculator.org/wp-content/uploads/2020/04/WFC-Methodology-August-2020.pdf" target="blank">Pubs ACS</a>
* <a href="https://www.watercalculator.org/wp-content/uploads/2020/04/WFC-Methodology-August-2020.pdf" target="blank">2016/17 facts and figures</a>


<!--
~~~
- https://www.watercalculator.org/wp-content/uploads/2020/04/WFC-Methodology-August-2020.pdf
- https://www.epa.gov/watersense/showerheads
- https://www.epa.gov/sites/default/files/2017-10/documents/ws-commercialbuildings-waterscore-residential-kitchen-laundry-guide.pdf
- https://www.circleofblue.org/wp-content/uploads/2016/04/WRF_REU2016.pdf
- https://pubs.acs.org/doi/full/10.1021/es800367m
- https://www.epa.gov/sites/default/files/2019-11/documents/2016_and_2017_facts_and_figures_data_tables_0.pdf
~~~
-->
Finally, we made a **clean dataframe** with all the insights of the survey and **calculations of the water footprint and the costs** of the footprint per person.


## Tableau 📊:

A comprehensive analysis has been performed on the users' interests according to their age, using  collected data from the questionnaire. This analysis has been displayed through a dashboard located within the designated Tableau folder. This analysis shows that, in general, **young people are more concerned about economic issues than older people.**

## Deploy ML Model and Database (RDS) to AWS ☁️:

Our API:

~~~
http://PUBLIC_AWS_IP/api/k-means/prediction?data=2&data=0&data=1&data=0&data=0&data=0
~~~

Does 2 things once a user fills a survey in our Web App:

1. **Predict consumer cluster.**


2. **Store information in an RDS Database.**

## Members:

* Noya
* Daiana
* Sebas
* Jimena
* Daniel
* Tony
* Nacho
