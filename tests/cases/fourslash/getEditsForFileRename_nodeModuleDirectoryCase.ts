/// <reference path='fourslash.ts' />

// @Filename: /a/b/file1.ts
////import { foo } from "foo";

// @Filename: /a/node_modules/foo/index.d.ts
////export const foo = 0;

verify.getEditsForFileRename({
    oldPath: "/a/b",
    newPath: "/a/B",
    newFileContents: {},
});
