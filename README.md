# React Portfolio

This portfolio is powered by React and SCSS. I've also used iTyped and Material Icons. This portfolio houses links to all my projects, testimonials, as well as an email functionality if you want to get a hold of me!

## Description

This portfolio uses modern UI designs and encompases component based design with each section of the page being a particular component. By utilizing SCSS, I was able to utilize an advanced form of CSS to create conditions, loops, and global variables that especially helped for mobile responsive design. 

Some notable features of this portfolio:
- Side Menu CSS Transform: When user clicks on the top-right of the screen to open the side-menu, we can set an &.active to act as a conditional to whether if active is true, our hamburger icon will transform to an "X" 
- Arrow Down Animation in Intro Component: When intro component is rendered, the arrow-down icon is continuosly fading in an out, this is becacuse we added keyframes to the image which for every 2 seconds, we set the opacity to 0 
- Slider Feature: In our Works Component, I created a slider in which it uses translate(X) to move different components on the view page. We use a useState as the parameter for our translateX() styling, and based on the arrows onClick function, we can view different cards based on what is clicked

To Do for the Future:
- Instead of having all the data in this repo, we can create an express server with REST APIs to fetch data from MongoDB so that the data is in a database rather than having it statically on file.
