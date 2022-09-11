# AppAditionalContent cmp

## Motivation & Context

AppAditionalContent cmp will provide client some extra content related to the page / app.
The container takes the sides of content place, and grows / shrink according to the ammount of pixels that AppFooter takes in acctual viewport.

## In app use:

Currently, AppAditionalContent renders twice:

- At block-start with some page data (TOC, for example)
- At block-end with some app data (Scroll to top btn, for example)

## Contains:

AppAditionalContent accept JSX element as a props.child, which will be render whitin the container
