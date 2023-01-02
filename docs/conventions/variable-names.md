# Variable names conventions

## In component file

### UPPER_CASE at "Global scope"

Every var (number, string or whatever) declare at the global scope of component, isn't redeclare when component rerender.\
In order to beware that a variable won't change during the component rerender, we will use UPPER_CASE convention at the variable name.\
Note: Those vars have no dependency or related info from the props, hooks etc...\
![UPPER_CASE example](https://i.ibb.co/MV8cYBp/Screenshot-1.png)
