# AppFooter cmp

## Motivation & Context

AppFooter cmp will provide additional information which is important enought to be in each line, but isn't important enought to bee on AppHeader cmp.

## In app use:

Currently, AppFooter should be render only once, as it's fixed element which sticks to app's buttom.

## Contains:

AppFooter contains 2 sections:

1.  **Internal app links** - Provides user links to important pages of the app itself:

- Donate money for us.
- Become an editor.
- Who are we?

2.  **Social networks links** - Provides user links to our social networks pages:

- Facebook
- Twitter
- Instagram
- Youtube

## Style

### Z-index map:

| selector                             | Z-index | Orientation                                                                                          |
| ------------------------------------ | :-----: | ---------------------------------------------------------------------------------------------------- |
| span.title                           |    5    | Social networks section title - use to prevent overthrought line display on top of the section title |
| span.social-networks-icons-container |    5    | Social networks icons container - use to prevent overthrought line display on top of the icons       |

### Important viewport changes:

- **div.social-networks-links-container** Changes from flex-column to flex-row at extra small viewport wide.
