Feature: As a musician
         I want to search events
         So that I can see my favourite bands

Scenario: Search an existing event
Given I am at search event page
When I try to search an event with name "Festa de ano novo"
Then I can see a event with name "Festa de ano novo" and more informations about the event

Scenario: Search a non-existing event
Given I am at search event page
When I try to search an event with name "Farra da Ana"
Then I can see a message that tells me that 

Scenario: Display all events on the screen
Given I am at search event page
Given the events "Rock'n Rio" and "Lollapalooza" are subscribed
When I try to list all existing events
Then I can see a list of events