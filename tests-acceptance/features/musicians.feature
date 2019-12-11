Feature: As a musician
         I want to register myself 
         So that I can find out about events and find other musicians

Scenario: Registering musician
Given I am at the login page
When I try to register the musician with username "guilherme" and password "123"
Then I can see the profile page