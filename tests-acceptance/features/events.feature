Feature: As a musician 
    I want to create events
    So that I can display my events on my profile and allow others to search for them

Scenario: create an event
Given I'm at the profile page on edit mode
When I click edit profile 
When I type event's name, date and bands
When I click create 
Then I'm still at the profile page 
Then I see the event created on my event's list

Scenario: create an event with duplicated name
Given I'm at the profile page on edit mode
When I click edit profile
When I type event's name, date and bands (with an event name that already exists)
When I click create
Then I'm still at the profile page 
Then I receive a message "Event already exists"