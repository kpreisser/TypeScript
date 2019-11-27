/// <reference path="fourslash.ts" />
////9007199254740991;
////-9007199254740991;
////9007199254740992;
////-9007199254740992;
////9007199254740993;
////-9007199254740993;
////9007199254740994;
////-9007199254740994;
////0x19999999999998;
////-0x19999999999998;
////0x19999999999999;
////-0x19999999999999;
////0x20000000000000;
////-0x20000000000000;
////0x20000000000001;
////-0x20000000000001;
////2e52;
////2e53;
////2e54;
////1e00000000010;

verify.codeFix({
  description: ts.Diagnostics.Convert_to_a_bigint_numeric_literal.message,
  index: 0,
  newFileContent:
`9007199254740991;
-9007199254740991;
9007199254740992n;
-9007199254740992;
9007199254740993;
-9007199254740993;
9007199254740994;
-9007199254740994;
0x19999999999998;
-0x19999999999998;
0x19999999999999;
-0x19999999999999;
0x20000000000000;
-0x20000000000000;
0x20000000000001;
-0x20000000000001;
2e52;
2e53;
2e54;
1e00000000010;`
});

verify.codeFixAll({
  fixAllDescription: ts.Diagnostics.Convert_all_to_bigint_numeric_literals.message, 
  fixId: "useBigintLiteral",
  newFileContent:
`9007199254740991;
-9007199254740991;
9007199254740992n;
-9007199254740992n;
9007199254740993n;
-9007199254740993n;
9007199254740994n;
-9007199254740994n;
0x19999999999998;
-0x19999999999998;
0x19999999999999;
-0x19999999999999;
0x20000000000000n;
-0x20000000000000n;
0x20000000000001n;
-0x20000000000001n;
2e52;
2e53;
2e54;
1e00000000010;`
});
