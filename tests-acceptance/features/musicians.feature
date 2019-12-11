Feature: As a musician
<<<<<<< HEAD
         I want to register myself 
=======
         I want to register myself
>>>>>>> 9131839f1290f3270912f24c5b97010c3fde5042
         So that I can find out about events and find other musicians

Scenario: Registering musician
Given I am at the login page
When I try to register the musician with username "guilherme" and password "123"
Then I can see the profile page