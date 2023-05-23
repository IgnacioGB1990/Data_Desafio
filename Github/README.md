## Create Repository

1. Create folder in your computer "Nacho"
2. Drag folder a vs code.
3. Open terminal (drag from bottom to top)
4. Git init ( tenemos policia)
5. Go to Github and create repository
6. Create link between your computer and github


~~~
git status
~~~

~~~
git add .
~~~

~~~
git commit -m "My Commit Message"
~~~



## Create your own branch:


1. Create a folder in your computer : Data_Desafio
2. Open terminal and go inside folder Data_Desafio

~~~
git clone https://github.com/IgnacioGB1990/Data_Desafio.git
~~~

3. Create your own branch and move to it:
~~~
git checkout -b my_name
~~~


4. Create folder with your name inside folder **members** and add readme.md with your github url (see my example)
~~~
git add .
~~~

~~~
git commit -m "my_name added github url"
~~~

~~~
git push --set-upstream origin my_name
~~~

## Push changes to develop in order to see ALL changes at once in one branch (develop):

1. Push changes from your branch in your terminal
2. Go to GitHub
3. Select your branch
4. Contribute
5. Open Pull Request
6. Create Pull Request
7. Merge Pull Request to "develop" branch (default)


## Copy certain file from develop to your branch:
1. Make sure you are in your branch

> **Note**
> If the file is in a folder:

~~~
git checkout develop -- path/to/file
~~~

> **Note**
> Assuming files are not in folder:

~~~
git checkout develop file_to_copy.ipynb
~~~