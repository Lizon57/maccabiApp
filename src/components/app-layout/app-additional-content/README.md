# AppAditionalContent cmp

## Motivation & Context

AppAditionalContent cmp will provide client some extra content related to the page / app.
The container takes the sides of content place, and grows / shrink according to the ammount of pixels that AppFooter takes in acctual viewport.

## In app use

Currently, AppAditionalContent renders twice:

- At block-start (at Hebrew - right sided).
- At block-end (at Hebrew - left sided).

## Props

AppAditionalContent accept JSX element as a props.child, which will be render whitin the container.
