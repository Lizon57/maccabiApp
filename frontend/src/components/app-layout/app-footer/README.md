# AppFooter cmp

![AppFooter example (viewport is smaller than extra small)](https://i.ibb.co/xM9T0VD/Screenshot-2023-01-02-at-17-44-00.png)
![AppFooter example (viewport is wider than extra small)](https://i.ibb.co/ZhbtpKQ/Screenshot-2023-01-02-at-17-42-43.png)

## Motivation & Context

AppFooter cmp will provide additional information which is important enought to be in each page, but isn't important enought to be on AppHeader cmp.

## In app use:

Currently, AppFooter should be render only once, as it's part of app layout grid.

## Contains:

AppFooter contains 2 sections:

1.  **Internal app links** - Provides user links to important pages of the app itself:

- Who are we?
- Join or donate to maccabipedia.
- Report a bug.

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
