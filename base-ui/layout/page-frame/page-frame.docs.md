---
description: CSS components for readable columns.
labels: ['grid', 'column', 'center', 'layout', 'css']
---

import { centerColumn, wideColumn, textColumn } from '@teambit/base-ui.layout.page-frame';

CSS components for readable columns.

`centerColumn` - main display width for most content, including images and text.

`wideColumn` - 'extra wide' display width, e.g. when putting large elements side by side.

`textColumn` - display width for readable areas. (headlines, paragraphs, etc)

## Example

```tsx live=true
() => <div>
	<div className={centerColumn}>
		normal content
		
		<div className={textColumn}>nice title</div>
		<div className={textColumn}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Suspendisse et sodales diam, sed sodales tellus.
			Nam sodales interdum dolor, eget euismod purus.
		</div>
	<div>
</div>
```
