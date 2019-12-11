Feature: As a musician 
    I want to create events
    So that I can display my events on my profile and allow others to search for them

Scenario: create an event
Given I'm at the profile page on edit mode
When I try to register "Festa de ano novo" as event name, "31/12/2019" as date and "Roberto Carlos" as bands
Then I'm still at the profile page 
Then I see the event created on my event's list

Scenario: create an event with duplicated name
Given I'm at the profile page on edit mode
Given event with name "Festa de ano novo" is already registered
When I try to register "Festa de ano novo" as event name, "31/12/2019" as date and "Roberto Carlos" as bands
Then I can see a message that tells me the event already exists
