# How to Setup the Project 
- Download the zip file of the project.
- Unzip it wherever you want.
- Open the folder using Visual Studio Code.
- Open new terminal.
- Run 

npm install

after change .env.example to .env 

- After that run 

npm start


Github link- https://github.com/Titus777/ae1-database/tree/master

Heruko link- https://dashboard.heroku.com/apps/immense-beach-65836

program can be found on(http://localhost:2222/home)
after you the run the program

Introduction

The main objective of this assessment is for an application to be able to create, read, update, and delete (CRUD) operations on one or more datasets. I’ve decided to base my application on anime recommendations, this is because I’ve been watching anime since at a young age, and it holds a special place in my heart till this today. One of the main reasons I have made this website is because not many search engines from a decade ago had any website of this type of information. Another main reason is that I found it hard to find an anime that were to my taste. As a result, I had to browse through many animes to see what suited me best. I made personal notes on each anime I’ve came across on websites, the type of information noted down included the ratings, genre, episodes etc.

 Therefore, I concluded to make a website that contained all these factors to make it easier for amateur anime fans to have an enjoyable start to anime as it is getting popular as years go by, not having this information could make new anime fans loose interest if the genre is not to their liking, and therefore anime would gradually loose the audience. 

The information the user can look at are the following: Anime ID, Anime Name, Genre, Type, Rating and Members. It will be shown in a form of a table. The users will be able to add animes on the website so that other users can find this website helpful, the users can update the animes for example if the animes has more episodes then you can edit it and will be updated on the website.


System Overview

The user will be able to interact with website because I used EJS and CSS to make the website, for example I’ve placed buttons, forms, pages, and visual elements (shape, colour, space, texture) to interact with the user. Furthermore, I’ve added a background so that website is visually pleasing and not boring. Within my code I was able to connect the page by adding a HREF tag. So, when the user presses the add anime button it takes them to the add anime page, where a form will appear. I was able to position these classes by using CSS, having previous experience in this area was helpful and it was easy to do. 

Below is the titles I have chosen,
Anime ID- show the ID of the anime,
Name-the title of the anime,
Genre-the user can see what fits their taste such as adventure, action etc,
Type- if it’s a movie, tv show or special episodes,
Episodes-how many episodes each anime has,
Rating-the rating of each anime and users can see what the most popular anime is,
Members-how many people watch each anime,
Actions-this helps the users to edit and delete the animes if there wrong information.


Key Design Decisions

The website can do what a crud application supposed to do which is too create, read, update and delete. I have done all those steps. 
As you can see I have added a background so that it gives an anime vibe/feeling when entering the website.




 ![image](https://user-images.githubusercontent.com/72074715/150546580-f4e917bb-6369-4f93-981f-4ffe0960a68f.png)

Adding the anime
 ![image](https://user-images.githubusercontent.com/72074715/150546606-d452ebd2-7049-45da-b7f2-77cd6c302abc.png)

See that the data has been added and read the list 
 ![image](https://user-images.githubusercontent.com/72074715/150546645-aa47b663-66b1-4ada-858d-f23e73832367.png)

Can see that it has been updated on mongo aswell
 ![image](https://user-images.githubusercontent.com/72074715/150546667-aaa28ead-7793-4d93-a611-8b7f02d84af3.png)

You can see that I have changed the episode from 148 to 146



Security and Scalability 

I didn’t put a login system because I didn’t have enough time but if I did I would have. Any user can edit the data and delete it they want because I had said before there aren’t many websites like I’ve made, and it is helpful to the anime fans and new anime fans as well. I think that security isn’t too secure because users can put inappropriate things and ruin the website but If I had more time, I would edit the backend and made sure no one can do those type of things.


Conclusion 

To sum up this project, I have learned a lot about this module and have gained a new skill. I have previously learned about node js and express but mongodb was new to me. MongoDB is used to store data in json documents, it helped me work with data much easier especially for this project. While doing this project I had a hard time doing javascript but doing this project helped me improve it, it is still lacking in some areas, but I am improving little by little which I am happy with. I had many resources to help me such as the teachers lecture and notes and Youtube. I was able to make the whole project working, there were times I couldn’t make anything work but I pulled through and everything turned out the way I wanted it to. Furthermore there a lot of stuff I wanted to add but couldn’t such as having a ascending and descending so that the user can see whats the most popular anime and what has the most episodes ect.


