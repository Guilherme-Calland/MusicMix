Feature: As a professor
         I want to register students
         So that I can manage their learning goals

Scenario: Registering musician
Given I am at the login page
When I try to register the musician with username "guilherme" and password "123"
Then I can see the profile page