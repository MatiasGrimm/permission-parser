<h1>Permission parser</h1>

<h2> Usage</h2>

1. First install the package using `npm i`
2. Go to main.ts
3. import definePermissions
4. definePermissions takes an array of permission (found in types folder) as argument.
5. Use getPermission() to parse number to string & string to number etc.

<h2> Example </h2>

<i> main.ts </i>

<p>import { definePermissions, getPermissions } from 'permission-parser';</p>

```typescript
definePermissions([
  { access: 1, name: "Read" },
  { access: 2, name: "Write" },
  { access: 4, name: "Delete" },
  { access: 8, name: "Modify" },
]);
```

```typescript
getPermissions(15); // Returns [1, 2, 4, 8]
```

```typescript
getPermissions([1, 2, 4, 8]); // Returns ["Read", "Write", "Delete", "Modify"]
```

```typescript
getPermissions(["Read", "Write", "Delete", "Modify"]); // Returns [1, 2, 4, 8]
```
