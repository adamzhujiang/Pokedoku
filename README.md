
Pokedoku
=====================

## Description

Pokedoku is a fun single player game where the user completes a sudoku like puzzle with pokemon categories instead of numbers. Categories can include different typings (grass, fire, water, etc), whether or not the pokemon can mega-evolve or level up using an item, amongst other features. To win, the user must use all 9 attempts they have to fully complete all 9 squares. If the user guesses incorrectly, they can still fill up the square as much as they can with their remaining attempts, but they will not be able to complete it fully or win the game.

I chose to create this game based off the original popular fan made game from pokedoku.com. I am a big Pokemon fan, and Pokedoku is a game I enjoy playing regularly.

## Technologies Used

-	HTML5
-	CSS
-	JavaScript

## Approach Taken

I began with the most basic premise, to create a 3x3 square and manually within the HTML created some basic categories that I want to validate against (things such as Fire/Flying for Charizard, etc). I then created a dataset within the form of a JS object that I could validate against. I ran into some trouble with the validation logic because I wanted to create a dynamic and systematic way for the validation to happen, but after meeting with my instructor we both agreed it would be easier to manually code out the validation for each category. Within my Javascript, there is a validation for every type, etc.

When I then wanted to create different modes of playing, this presented a few challenges because my validation logic was based on the hard coded HTML of the page. Through some tricky manipulation, I was able to figure out a way to iterate through each category row and column and dynamically update the column and row headers. This allowed the validation to work again.

Truthfully, the game had many nuances that I initially didn't think I would have to account for. For example, when a users guess is correct, I needed to place the text into the cell, increase the attempt count by 1, increase the points by 1, and visually highlight to the user that all of these things happened on the front end. Overall, it was a good excercise in how thoughtful one needs to be in order to effectively build any sort of web project.

## Instructions on how to play

Play the game using this link here!

[Link to Game](https://adamzhujiang.github.io/Pokedoku/)

## Screenshots

Screenshot of Pokedoku!
![alt text](https://github.com/adamzhujiang/Pokedoku/blob/main/Pokedoku%20Screenshot.png "Game Screenshot")

Screenshot of logic used to dynamically update column and row headers
![alt text](https://github.com/adamzhujiang/Pokedoku/blob/main/Grid%20Logic.jpeg "Grid Logic")

## Unsolved Problems
Incorporating a drop down for pokemon selection to ensure a smoother user experience.

Additionally, for the "random" game mode, I do not have any logic that prevents the user from seeing combinations of categories that do not exist. For example, Ice and Normal is not a type that exists, but under the randomizing function, it is entirely possible that this would be a category users would run into. A good future state would be to add this validation, so it doesn't create awkward experiences.
