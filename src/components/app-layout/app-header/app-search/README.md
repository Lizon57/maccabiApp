
# AppSearch cmp

## Motivation & Context
AppSearch cmp will provide text input to allow user preform search on the app.


## In app use
Currently, AppOptionBar renders once:
1. **AppHeader** - Renders at top left corner of the header (neither up-to-laptop and laptop-wider screens).

## Contains
AppSearch contains 1 section:
 1. **Input** - An input to insert the desire search.

## Style
### Important viewport changes:
* **app-header--app-search__container** - When focus-within the search, the input will grow wider (from laptop-wide only)