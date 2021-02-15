import test from "ava";
import { Opaque, create } from "../source";

test("'create() does not augment the value given to it at runtime", (t) => {
  const originalValue = { my: "value" } as const;
  const opaqueValue = create<Opaque<typeof originalValue>>(originalValue);
  t.is(originalValue, opaqueValue);
});
