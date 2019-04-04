Feature: Search

  Scenario: I as a movies fan want to be able to view a list of current popular movies and read more about some movie.
    When I click on magnifying glass button
    And I fill the search field with "Ninja"
	Then A list of movies related to "Ninja" is displayed
