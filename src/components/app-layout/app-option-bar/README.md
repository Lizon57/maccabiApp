# AppOptionBar cmp

## Motivation & Context

AppOptionBar cmp will provide links for important pages or related-sub-pages.

## In app use

Currently, AppOptionBar renders twice:

1. **Up to laptop wide** - Will render as fixed bar at page (absolute) bottom.
2. **From lap top wide** - As part of LaptopWidePlusAppHeader cmp, just before search cmp.

## Contains

AppOptionBar contains 2 sections:

1.  **Category icon** - An icon by react-icon's pkg.
2.  **Dropdown** - List of links related to the currently selected category.

## Data

All necessary data comes from data.ts, and it includes:

- List of categories (title, icon)
- In-dorpdown-link (text, path)

## Style

### Z-index map

| selector                                    | Z-index | Orientation                                                            |
| ------------------------------------------- | :-----: | ---------------------------------------------------------------------- |
| div.app-layout--app-option-bar\_\_container |  9000   | Only on up-to-laptop-wide, use to show the bar over everything of app. |

### Important viewport changes:

- **div.app-layout--app-option-bar\_\_container** - Unset position (fixed, on page's bottom) and background color (black).
- **li.category-container** - Change dropdown position, change background color and color when hovering.
- **ul.links-list-container** - Add psuedo ::before element to keep dropdown render when hovering
