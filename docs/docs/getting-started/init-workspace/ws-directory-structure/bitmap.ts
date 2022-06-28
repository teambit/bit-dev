export const bitmap = `/**
* The bitmap file maps components to their directories in the workspace. It is maintained by Bit and should not be modified manually.
* 
* The example below shows three components, the first two components are already versioned. They have a 'version' and a 'scope' property. 
* A scope or 'remote scope', is a collaboration server that hosts and manages components. 
* Notice how their remote scopes are different. A single workspace can maintain components that are stored in different remote scopes.
* 
* The last component is a new one. It does not yet have a version. Note its 'config' property, which is used to register pre-versioned component configuration. 
*/

{
    "ui/registration-form": {
        "scope": "my-org.my-shop",
        "version": "0.1.6",
        "mainFile": "index.ts",
        "rootDir": "my-scope/ui/registration-form"
    },
    "ui/button": {
        "scope": "my-org.my-design-system",
        "version": "2.0.5",
        "mainFile": "index.ts",
        "rootDir": "my-design-system/ui/registration-form"
    },  
    "services/register-user": {
        "scope": "",
        "version": "",
        "defaultScope": "my-org.my-shop",
        "mainFile": "index.ts",
        "rootDir": "my-scope/services/register-user",
        "config": {
            // component config is registered here
        }
    }
}`;
