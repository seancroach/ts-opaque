import { expectType } from "tsd";
import { Opaque, widen } from "../source";

declare const opaqueNumber: Opaque<number>;
expectType<number>(widen(opaqueNumber));

declare const opaqueString: Opaque<string>;
expectType<string>(widen(opaqueString));
