# AppHeader's BranchChip cmp

![BranchChip example (as part of UpToLaptopAppHeader) with none filtered out](https://i.ibb.co/7N1pZ6D/Screenshot-2023-01-02-at-18-23-26.png)
![BranchChip example (as part of UpToLaptopAppHeader) with some filtered out](https://i.ibb.co/JFbn4pv/Screenshot-2023-01-02-at-18-23-44.png)
![BranchChip example (as part of LaptopWidePlusAppHeader) with no hovering](https://i.ibb.co/xzym0cg/Screenshot-2023-01-02-at-18-22-51.png)
![BranchChip example (as part of LaptopWidePlusAppHeader) with hovering, none filtered out](https://i.ibb.co/tH4ZxFJ/Screenshot-2023-01-02-at-18-23-04.png)
![BranchChip example (as part of LaptopWidePlusAppHeader) with hovering, some filtered out](https://i.ibb.co/C5H973h/Screenshot-2023-01-02-at-18-23-15.png)

## Motivation & Context

BranchChipList (using BranchChipPreview) cmp will provide client a UI of his active display branches settings.
Using this UI, client can filter (in & out) branches.

## In app use

Currently, BranchChip renders once:

1. **AppHeader** - Renders at SideMenu cmp (if client's viewport is smaller than laptop wide). - Renders at TopRight corner of the header (if client's viewport is wider than laptop wide).
