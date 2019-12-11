Feature: As a musician
    I want to have access to my profile
    So that I can view and edit my informations

Scenario: Editing my name
Given I am at the profile page
When I enter the option to edit profile
When I try to change my name to "Ricardo"
When I accept my changes
Then my profile name is changed to "Ricardo"

Scenario: Editing my email
Given I am at the profile page
When I enter the option to edit profile
When I try to change my email de "rich@gmail"
When I accept my changes
Then my profile email is changed to "rich@gmail"

Scenario: Add song to my repertoire
Given I am at the profile page
When I enter the option to edit profile
When I add the song "Nova Era"
When I accept my changes
Then "Nova Era" is added to my repertoire

Scenario: Add bands to the bands I'm a part of
Given I am at the profile page
When I enter the option to edil profile
When I add a new band "Faringes da paixão"
When I accept my changes
Then "Faringes da paixao" is added to my bands list
