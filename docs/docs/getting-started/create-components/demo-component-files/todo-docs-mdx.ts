export const docs = `<!-- This is the component's documentation.
It is rendered in the component's 'Overview' tab, in Bit's UI.
Since it is a React component, it uses the MDX format
to integrate Markdown with JSX.  -->

---
description: A to-do app component.
---

import { ToDo } from './to-do';

A component that adds to-do items to a list.

### Basic usage

\`\`\`js
import { Todo } from '@my-org/tasks.apps.to-do';

() => <ToDo />;
\`\`\`

### Setting an initial to-do item

Set an initial to-do item using the \`initialTodo\` prop (try it out, in the live playground below):

\`\`\`js live
<ToDo initialTodo="my first item!" />
\`\`\`
`;
