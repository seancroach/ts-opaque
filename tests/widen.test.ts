import test from "ava";
import { widen, Opaque } from "../source";

test("widen() does not augment the value given to it at runtime", (t) => {
	const originalValue = { my: "value" } as const;
	const opaqueValue = originalValue as Opaque<typeof originalValue>;
	const widenedValue = widen(opaqueValue);
	t.is(widenedValue, opaqueValue);
});
