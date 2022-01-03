# Mono repo setup 
Minimal monorepo setup with yarn workspaces.

## Important notes
- Enable types in package.json of main folder (in this case *back* because every type and function will be served from that folder)
- Any new package/folder will contain namepspace as followed
  ```@kl/{*name of package*}```