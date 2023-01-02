# AppSearch cmp

![AppSearch example of initial state](https://i.ibb.co/qxtys0V/Screenshot-2023-01-02-at-18-01-57.png)
![AppSearch example of focus-within state](https://i.ibb.co/nkgTy57/Screenshot-2.png)
![AppSearch example of dirty state](https://i.ibb.co/XS2m1TM/Screenshot-1.png)

## Motivation & Context

AppSearch cmp will provide text input to allow client preform search on the app.
AppSearch use common commponent SearchInput for UI.

## In app use

Currently, AppSearch renders once:

1. **AppHeader** - Renders at top left corner of the header (neither up-to-laptop and laptop-wider screens).

## Style

### Important viewport changes:

- **app-header--app-search\_\_container** - When focus-within the search, the input will grow wider (if client's viewport is wider than medium mobile).
