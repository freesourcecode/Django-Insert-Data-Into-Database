# Django Insert Data Into Database with Source Code

The Django Insert Form Data Into Database is easy to manipulate by the user, first the user will input their first name, last name and address into the form after filling up.

The user will click the submit button and the data that being executed will store in the table above.

## How does Django store data in database?

Use keyword parameters to the model class to construct an object, then execute save() to store it to the database.

Behind the scenes, an INSERT SQL statement is executed. The database is not accessed by Django until you specifically execute save(). 

There is no return value for the save() method.

## Where is data stored in Django?

By default, Django uses the MEDIA ROOT and MEDIA URL settings to locally store files.

The next examples are predicated on your use of these defaults.

However, Django offers means for you to create unique file storage systems, giving you total control over where and how Django stores data

## Reminders

To perform this python django project make sure that you have knowledge in the following:

* CSS
* HTML
* Javascript
* Database Management

### In This Django Insert Form Data Into MySQL Database Consist Of The Following Method:

* **blog** – In this method which is the main feature of this project.
* **server** – In this method which is the main method of this project.

## How to create a Django Insert Form Data Into Database?

Here are the steps on how to create the **Django Insert Data Into Database**.

1. **Open file**.

Open “pycharm professional” after that click “file” and click “new project”.

![image](https://github.com/user-attachments/assets/9ed76861-d521-4f3c-8146-3cfdfb230265)

2. **Choose Django**.

After click “new project“, choose “Django” and click.

3. **Select file location.**

Select a file location wherever you want.

4.** Create application name**.

Name your application.

5. **Click create**.

Finish creating project by clicking “create” button.

6. Start of coding.

You are free to copy the following codes below in the given modules and method required.


## The List Of Module Given Below Are Under The “Blog” Method

* **The Code Given Below Is For The “views.py” Module – you can add the following code below into your “views.py” under the “Blog” method.**

```
from django.shortcuts import render, redirect
from .models import Member

# Create your views here.
def index(request):
    members = Member.objects.all()
    return render(request, 'blog/index.html', {'members': members})

def insert(request):
    member = Member(firstname=request.POST['firstname'], lastname=request.POST['lastname'], address=request.POST['address'])
    member.save()
    return redirect('/')

```

In this module which is the index module of the Blog method.

* **The Code Given Below Is For The “urls.py” Module – you can add the following code below into your “urls.py” under the “Blog” method.**

```
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^insert$', views.insert, name='insert'),
]
```



In this module which is the URL configuration module under Blog method.

### 📌 Here's the full documentation for the [Django Insert Data Into Database](https://itsourcecode.com/free-projects/python-projects/django-insert-data-into-database-with-source-code/)


Read or visit the other interesting programming language used in insert data into database.

* **[Simple Insert and Show Data from Database in PHP and MYSQL](https://itsourcecode.com/free-projects/php-project/simple-insert-data-database-php/)**
* **[Insert and Display Data in PHP & MYSQL Without Refreshing Page](https://itsourcecode.com/free-projects/php-project/insert-and-display-data-in-php-mysql-without-refreshing-page/)**
* **[PHP Insert Multiple Records Into MYSQL](https://itsourcecode.com/free-projects/php-project/php-insert-multiple-records-into-mysql/)**
* **[MySQL Insert, Multiple Insert, and Last Inserted Query in PHP](https://itsourcecode.com/free-projects/php-project/mysql-insert-query/)**
* **[Insert and Load Data In PHP without Refreshing the Page](https://itsourcecode.com/free-projects/php-project/insert-load-record-without-refreshing-page/)**
