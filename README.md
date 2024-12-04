Do you want to see this site in your local host??
1/ npm init -y
2/check the package.json file is created
3/ Install the neccesary dependencies
4/ check the node_modules file is created and the packaje.json is updated with the new dependencies
5/ create an index.js in the project's folder .

PROYECT SUMMARY

This project involves creating a news blog application using NODE.JS, EXPRESS, EJS, and SEQUELIZE.

ENTITIES:

Article -(Tracks author, title, content, image, creation date, and modification date).
Author -(Tracks first name, last name, email, password, creation date, and modification date).
Comment -(Tracks author, article, content, creation date, and modification date.)
Initial Data -(Seed the database with sample articles, comments, and authors for testing.)

ROUTES AND FUNCTIONALITIES

1 / HOME PAGE ([GET] /):

Displays a list of articles.
Clicking the logo redirects to the home page.
Clicking an article title redirects to its detail page.
Clicking the admin button redirects to the admin page.

2 / ADMIN PAGE ([GET] /admin):

Lists all articles with options to edit or delete.
Clicking edit redirects to the edit form for the article.
Clicking delete removes the article.
Clicking create redirects to the article creation form.

3 / ARTICLE DETAIL ([GET] /articles/{id}):

Displays article details and a comment form.
Lists comments for the article.

4/ CREATE ARTICLE ([GET] /articles/create):

Form to create a new article.
Form includes title, content, image URL, and author dropdown.
On submission, the form data is sent to [POST] /articles.

5 / SUBMIT NEW ARTICLE ([POST] /articles):

Receives form data and creates a new article in the database.
Redirects to the admin page.

6 / EDIT ARTICLE FORM ([GET] /articles/edit/{id}):

Form to edit an existing article.
Pre-filled with the article's current data.
On submission, the form data is sent to [POST] /articles/edit/{id}.

7 / UPDATE ARTICLE ([POST] /articles/edit/{id}):

Receives form data and updates the article in the database.

8 / DELETE ARTICLE ([GET] /articles/destroy/{id}):

Deletes the specified article from the database.
Redirects to the admin page.

9 / ADD COMMENT ([POST] /comments):

Receives form data and creates a new comment for an article.
Reloads the article detail page.
