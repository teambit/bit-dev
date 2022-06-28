export const aboutNodeModuleDir = `The node_modules directory contains external dependencies (installed packages and components),
as well as Workspace Component Links.

Workspace Component Links are packages that are generated for components maintained in that workspace.
They enable components to consume other components using absolute paths (the component's package name),
instead of the relative path to their source files. 

For example, the following import is agnostic to the location of a components source files,
and even to whether it is imported as a component or installed as a package (in a Bit or non-Bit project).

import { registrationForm } from '@my-org/my-scope.ui.registration-form';

In contrast, the following import will fail once the consuming component is used in a different project:

import { registrationForm } from './my-scope/ui/registration-form';
`;
