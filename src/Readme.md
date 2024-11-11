This project is a simple to-do list application built with Next.js, using React context for state management. Let's go through each file and explain their purpose and flow.

# Folder Structure Overview:

## context folder: 
Manages global state for to-do items, using context.

## components 
folder: Contains the UI components for displaying and managing to-do items.

## app folder:
Contains the main App component, which is the root of the application.



---

# Context Folder

## 1. TodoContext.ts

This file defines and exports the context and types for managing the to-do list. Here’s a breakdown:

Todo Type: Describes the shape of a to-do item, with id, todo (task description), and completed status.

TodoContextType: Specifies the context structure, which includes an array of todos and functions for adding, updating, deleting, and toggling completion of to-do items.

TodoContext: A context created using createContext, initialized with a default value (a placeholder to-do and empty functions).

useTodo Hook: Custom hook that makes it easier to access the TodoContext.

TodoProvider: A provider that supplies the TodoContext values to child components.


## 2. index.ts

This file re-exports the key elements from TodoContext.ts, making it simpler to import them elsewhere in the app.


---

# Components Folder

## 1. TodoForm.tsx

This component is the form that allows users to add new to-do items.

State and useTodo Hook: The todo state stores the input value, and useTodo is used to access the addTodo function from TodoContext.

Form Handling:

The add function prevents the default form submission and ensures the todo field isn’t empty.

Creates a new to-do item with a unique ID and calls addTodo to add it to the global state.

Resets the input field after submission.



## 2. TodoItem.tsx

This component displays each individual to-do item with options to edit, delete, and toggle completion status.

Props: Receives a todo object (of type Todo) as a prop.

State:

isTodoEditable: Tracks whether the to-do is in edit mode.

todoMsg: Stores the to-do text (used in edit mode).


Functions:

editTodo: Updates the to-do text in the global state.

toggleCompletedHandler: Toggles the completion status by calling toggleCompleted.


UI:

Checkbox to mark completion.

Editable text input field (based on isTodoEditable).

Buttons for edit/save and delete.



## 3. index.ts

This file re-exports TodoForm and TodoItem for simpler imports in the main App.tsx file.


---

# App Folder

## App.tsx

The main component that brings together all the functionality of the to-do app.

State and Todo Functions: Maintains the todos array in its state and defines the functions to modify it:

addTodo: Adds a new to-do by setting a unique ID.

updateTodo: Updates the todo text for a specific item by id.

deleteTodo: Removes a to-do item by filtering it out of the list.

toggleCompleted: Toggles the completed status for a to-do item.


## Local Storage:

On mount, loads saved to-dos from localStorage (if any).

Every time the todos state changes, saves the updated list to localStorage.


Provider: Wraps the TodoProvider around the application’s main content to pass down the todos and related functions globally.

Rendering:

Displays a header, the TodoForm, and a list of TodoItem components, one for each to-do.




---

# Flow of the Application

## 1. App Initialization:

When the app loads, App retrieves any saved to-dos from localStorage and sets them as the initial todos state.

The TodoProvider supplies the todos and CRUD functions to child components.



## 2. Adding a To-Do:

User enters text in TodoForm and submits.

TodoForm calls addTodo, which updates the todos state.

The new list is saved to localStorage, and the to-do appears in the list.



## 3. Updating/Completing a To-Do:

Each TodoItem allows editing or marking as completed.

When toggled, toggleCompleted updates the state, and the item visually reflects the change (strikethrough for completed).

When edited, updateTodo changes the text.

Changes are saved to localStorage.



## 4. Deleting a To-Do:

Clicking delete on a TodoItem removes it from the state via deleteTodo.

The updated list is saved to localStorage, and the item disappears from the view.





---

This project effectively manages a to-do list, with data persistence via local storage, and leverages React context for a modular and reusable structure. The context centralizes state and logic, making components simpler and the codebase cleaner.

