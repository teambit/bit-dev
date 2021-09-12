---
description: A standard, accessible and customizable Button
labels: ['button', 'ui', 'base', 'aria']
---

import { Button } from './button';

Base, non-styled and standard Button. Designed for consistency, accessability and customization. Supports mouse, keyboard, and touch interactions, focus behavior, and ARIA props for both native button elements and custom element types.

On the surface level, building a custom styled Button might seem simple. In reality, there are different issues that emerge such as custom element support (e.g. `a` and `span` elements), mouse and touch event handling and up until keyboard bindings.

### Red button example


```ts live=true
<Button style={{ 'background': 'red' }}>Click here!</Button>
```
