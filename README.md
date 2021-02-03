![](/ga_cog.png)

# Project #1: The Game

## Attendance
We will be holding stand ups with instructors at **6:45PM EST (Tuesday/Wednesday) and 11:00AM EST (Saturday)** to have a daily check on the progress your application.

There are no full day classes during project weeks, but we expect you to be working on your project from at least **6:30PM - 10:45PM EST (Tues/Wed)** and at least **10AM - 6PM EST (Sat)** during class days and be available during that time for TA hours or any meetings with instructors as needed. You are STILL required to show up to Outcomes during project weeks.   

We also will **still have some attendance checks** during project week, as follows:

  - **Wednesday, February 3rd**: You're required to meet up with your instructor at whatever time you schedule to approve your project idea.
  - **Daily (Each Class Day)**: You attendance will be taken during **STANDUP meetings starting Saturday, February 6th**. 
  - **Saturday, February 13th**: Project presentation day! You're required to be in the class zoom starting at 10:00 AM EST

_Failure to make an attendance check will result in an unexcused absence for both morning and afternoon for that day_.

## Meetings with instructors
_You will signup for project approvals [here](https://docs.google.com/spreadsheets/d/1pZZWPsqmSsOVjjCHSBfeCQdq2XZpsRjig4ppWNW6Tws/edit#gid=0)._

**Wednesday, February 3rd - Mandatory**<br>
You will meet with an instructor to get your app idea approved. Be sure to write out what features you will need to build in order to meet MVP and some stretch goal ideas.

### Overview

Let's start out with something fun—**a game!**

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges** – since you've already gotten your feet wet with a few small apps, it's up to you to come up with a fun and interesting game to build.

**You will be working individually for this project**, but we'll be guiding you along the process and helping as you go. Show us what you've got!


---

### Proposal

**Your Project must be approved before you start coding.** Your instructor will need to see and approve your user stories and wireframes, and will want you to have an idea of the organization of your app before your start.  This may require you to go back to the drawing board.  The instructor will help you make sure that you scoped out an achievable MVP (simple enough that you think you could get it built well ahead of the deadline) well-defined, along with a few nice-to-haves and stretch goals.  Your user stories should generally fall into these categories.


### Technical Requirements

Your app must:

* HAVE ITS OWN REPO, under your github.com account (not a fork).

* ...render a game in the browser using **JavaScript** (you may use jQuery if you like) for DOM manipulation, with separate files for HTML, CSS, and JavaScript, as we have done in class

* ...switch turns between two players. If your game doesn't make sense for two players talk to your local instructor about it, exceptions can be made for sufficiently challenging one player games.

* ...implement logic for winning & visually display which player won (or lost)**

* ...follow the principles we've shown you:
  * **KISS** ("Keep It Simple Stupid" -- i.e. don't create overly complex solutions to problems when simpler ones will work) and
  * **DRY** (Don't Repeat Yourself)** principles
  * Modularity:
    * e.g. a function should do just one thing and do it well

* ...reflect an understanding of the importance of separation of concerns:
  * Your event listeners/handlers should collect input from the user, not do game logic. Game logic goes in the `game` object.
  * Your game should be controlled by a `game` object that has properties to store any data that's important to your game, and methods to control the game flow (that call each other and/or are called by the event listeners/handlers)
  * Classes: if you have, say, 100, or even 8 aliens that you are shooting or bubbles that you are popping or mushrooms that you are collecting or cards that you are showing (or whatever) in your game, and they all have the same basic structure and functionality, consider instantiating classes for them
  * Again, a function should do one thing and do it well.  A function that prints the scoreboard should simply print the scoreboard, not try to figure out who is winning.

* ...be deployed online, where the rest of the world can access it (we will show you
how)

* ...use **semantic markup** for HTML and CSS (adhere to best practices)

* ...be reasonably complex (this will be planned out in your proposal, and followed up in "stand-ups" each project day)

---

### Necessary Deliverables


* Wireframes and User Stories included in a `README.md` file at the top level of your repo.

  * **Wireframes** - Basically draw out what your game will look like—every different way it could look.  You can use paper or any wireframe tool you find online.  Smartphone snapshots of a whiteboard drawing are fine.

  * **User Stories** - Wording should center around how a user interacts with your game, for example:
    1. The user clicks the start button and the level starts
    2. When the user hits the `f` a fire ball is catapulted at the opponent
    3. When the user presses a direction key, the hero moves in that direction
    4. When the user clicks a card it flips over
    * NOTE: User stories are **not** a paragraph or two generally describing the game.  You must think through each thing the user can do and what it will cause to happen in the game.  It should look more like a _bulleted list_.

* A working MVP (minimum viable product) that is the absolute bare minimum functionality for you game. You will be expected to complete your MVP first before adding fancy features.  You should be able to define which User Stories constitute an MVP.  Your instructor will help you with this during the project proposal phase.

* A **working game, built by you**, hosted publicly on the internet, where players can play and win and lose.

* A **link to your hosted working game** in the URL section of your Github repo

* A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project.

* **The `README.md` file** in the top level of your repo should have an explanation of what the project is and why you made it, your user stories and wireframes, explanations of the technologies used and the approaches taken, installation instructions, unsolved problems, and forthcoming features.  

* You will present your project to the class on Friday October 9th.

---

### Suggested Ways to Get Started

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!

* **Use your Development Tools** (console.log, element inspector, etc) to debug and solve problems.  Your instructor will have you console.log() things if you have not tried that approach.

* During the day, work through problems in class & **ask questions when you need to!** We're here to help prevent you from burning through your time with wild goose chases, or help you gain insight into how to pivot if you're trying to do too much (this is common with new developers), or make sure you're on track to reach your goals.  But _come to us_!! You need to own your educational journey.

* **Commit early, commit often.**  Don’t be afraid to break something because you can always go back in time to a previous version. There should be _at least_ a few dozen commits.

* **Consult documentation** (MDN, jQuery API, etc.) to better understand the tools you're using.

* **Plan to write code that you know you will remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. Write 26 lines of code that helps you solve a problem, even if you only come out of it with 2 useful lines of code that solve your problem precisely.  Even though it might feel weird to delete code you worked hard on for an hour, if it helped you get a solution to a problem, it was time well spent.

---

### A few from earlier cohorts

https://kmikitin.github.io/Quarto/ <br>
https://charlotteprevost.github.io/project-1/ <br>
https://sierramoore.github.io/vampire-game/ <br>
https://scrummish.github.io/Space-Invaders-2018/ <br>
https://webermn15.github.io/Scorch_a-scorched-earth-clone/ <br>
https://nathanlamontsmith12.github.io/battle-doodles/ <br>
https://anthonyjlower.github.io/canvas-football-game/ <br>
https://cswormstedt.github.io/project1/ <br>
https://billiam1211.github.io/DuckHunt/ <br>
https://theprosumer.github.io/theprosumer.io/project1/<br>
https://jccraigw.github.io/project1_Desktop/ <br>
(same as above, mobile friendly): https://jccraigw.github.io/project1/ <br>
https://obajuluwa3.github.io/3-Card-Monte/ <br>
https://wesmarberry.github.io/Memory-Lane-Game/ <br>
https://joebir.github.io/chess-trainer/ <br>
https://dhinzo.github.io/polka-match/ <br>


---

### Sample Project Ideas

##### Blackjack
Make a one player game where people down on their luck can lose all their money by guessing which card the computer will deal next!

##### Concentration
Sometimes just called "Memory", it's a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. If you get all the matching cards, you've won!

##### Self-scoring Trivia
Test your wits & knowledge with whatever-the-heck you know about (so you can actually win). Guess answers, have the computer tell you how right you are!

---

### Extra challenge...

* See if you can research and use at least one thing/technology/resource we didn't explicitly study in class.  Some API? Some sweet library? Skeleton or Bootstrap? VelocityJS? Firebase? Canvas? Three.js? D3? CSS Keyframes/Animation? jQuery UI? Note: Phaser is _not_ allowed, and **outside library use is strictly subject to instructor approval**.

---

### Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[Github Pages](https://pages.github.com)** _(for deploying and hosting your game)_

---

### Project Feedback + Evaluation

Your instructor will review your project with you 1-on-1 during the afternoon of the day it's presented.  To pass, your project must:

* Meet the MVP definition agreed upon with your instructor during your project proposal.

* Meet the technical requirements specified in this document.

It should also

* Have a commit history that reflects careful building of one feature at a time, with _at least_ several commits each day.

* Demonstrate proficiency with the material covered in Unit 1.

As a general guide, a passing project might typically average 2/3 in these categories:

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as modularity, semantics, and formatting? Did you comment your code as your instructors have in class?

* __Deployment__: Did you deploy your application to a public url using GitHub Pages?

* __Total__: Your instructors will give you a total score on your project between:

    Score | Expectations
    ----- | ------------
    **0** | _Incomplete._
    **1** | _Does not meet expectations._
    **2** | _Meets expectations, good job!_
    **3** | _Exceeds expectations, great job!_

This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores would be the individual ones__ above, which can help you identify where to focus your efforts for the next project!
