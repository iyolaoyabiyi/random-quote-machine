# Random Quote Machine

## Overview
This is a **Random Quote Generator App** created as a solution for the **freeCodeCamp Frontend Development Libraries** project. The app dynamically fetches and displays random quotes, providing an engaging way for users to explore various quotes and share their favorites on Twitter.

## Features
- Fetches quotes from a `quotes.json` file.
- Displays a random quote when the "New Quote" button is clicked.
- Ensures all quotes are shown once before repeating, maintaining variety.
- Provides an option to share the displayed quote on Twitter.

## How It Works
1. **Quote Fetching**: The app fetches quotes from a local `quotes.json` file and initializes a copy (`unseenQuotes`) to keep track of unused quotes.
2. **Quote Display**: When the "New Quote" button is clicked, the app:
   - Selects a random quote.
   - Removes the selected quote from the list to prevent immediate repetition.
3. **Twitter Sharing**: The displayed quote is set as the content of a Twitter share link, allowing users to share it directly.

## How to Run
1. Clone the repository or download the project files.
2. Ensure `quotes.json` is in the root directory.
3. Open `index.html` in a web browser.
4. Click the "New Quote" button to view and share quotes.

## Dependencies
- jQuery (included via CDN).
- Bootstrap (included via CDN)

## License
This project is free to use and distribute under the [MIT License](https://opensource.org/licenses/MIT).
