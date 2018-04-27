Feature: Add todo

   Feature Description

@AddTodoScenario
Scenario: Add new todo
Given I am on TODO home page
When I type in todoInput "New Todo"
Then I hit Enter
Then "New Todo" appears in the todoList