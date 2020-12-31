import { expectType } from "tsd";
import type { KeyofOpaque, Opaque } from "../source";

declare const keys: KeyofOpaque<
	Opaque<{
		keyOne: "valueOne";
		keyTwo: "valueTwo";
	}>
>;
expectType<"keyOne" | "keyTwo">(keys);
