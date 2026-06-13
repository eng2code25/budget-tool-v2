# Monthly Budget Tracker (React)

## What this does

A simple budget tracking application built with React to practice managing data, user input, filtering, and local storage persistence.

The application allows users to record income and expenses, edit transactions, delete entries, search records, and filter transactions by category.

---

## Features

### Income Management

* Add income transactions
* Edit income entries
* Delete income entries
* Categorize income (Salary, Dividend)

### Expense Management

* Add expense transactions
* Edit expense entries
* Delete expense entries
* Categorize expenses (Groceries, Bills, Rent, Others)

### Search & Filtering

* Search transactions by:

  * Type
  * Date
  * Remarks
    
* Filter transactions by:

  * Show All
  * Income Only
  * Expenses Only

### Persistence

* Save transactions using localStorage
* Automatically restore transactions after page refresh

### Transaction Management

* View all transactions in a summary table
* Edit existing records
* Delete unwanted records
* Dynamic UI updates using React state

---

## What I Learned

* React hook fundamentals (useState, useEffect)
* State-driven UI rendering
* Controlled form inputs
* Event handling in React
* CRUD application patterns
* Working with arrays using map() and filter()
* Creating and updating objects in state
* Search and filtering logic
* Local storage persistence
* Managing multiple related pieces of state
* Breaking larger problems into smaller logical steps

---

## Notes

This project was built to move beyond a basic notes application and practice working with more structured data.

Instead of storing simple text notes, transactions are stored as objects containing multiple fields such as type, date, amount, and remarks. This introduced additional challenges around editing records, filtering data, and keeping React state synchronized with local storage.

The project helped reinforce how React applications are built around state updates, user interactions, and dynamic rendering rather than direct DOM manipulation.
