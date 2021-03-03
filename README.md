# Calculator

This my take on the classic *Javascript Calculator* project. The project has been built as part of [The Odin Project](https://theodinproject.com/home) full stack curriculum that am currently undertaking.

As for the project, it is a responsive calculator app which has all the basic operations covered. The calculator has full keyboard support as well so you're not limited to just clicking. The project helped me utilise existing skills and learn new ones in `css`, `css-grid`, `javascript`, `event-handling` and `dom-manipulation`.

Expressions are evaluated as you type them in, so long and complex expressions with operators of different precedence level may not work as you expect them to. For example `12 + 7 - 5 * 3` yields `42`. This is by design as `eval()` or similar functions has not been used. I may update this project in the future inorder to implement a custom parser for evaluating such expressions.

## Key Bindings

|  Key  | Binding |
| :---: |:-------:|
| 0 - 9 |  0 - 9  |
|   ÷   |    /    |
|   ×   |    *    |
|   +   |    +    |
|   -   |    -    |
|   =   |  Enter  |
|   C   |    c    |
|   AC  |    a    |