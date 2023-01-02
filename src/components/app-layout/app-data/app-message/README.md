# AppMessage cmp
![Successful edit article message example](https://i.ibb.co/VwxqxBR/Screenshot-2023-01-02-at-12-50-57.png)

## Motivation & Context

AppMessage cmp will provide a UI for message sent from the app to the client (such as "Edit action succsses").

## In app use

AppMessage UI renders according to client's viewport width.
If client's viewport width is smaller than 1400px, messages list will render beneath app header.
If client's viewport is wider than 1400px, message list will render at content-block-end (for Hebrew: left side).

## Messages source

The list of messages needed to be display comes from appState slicer (at store).

## How to add / remove message

In order to add new app message, use the useAppMessage hook.
The hook will add the message to store, and will remove it after 5 sec.
