import { expectAssignable } from "tsd";
import type { AnyOpaque, Opaque } from "../source";

declare const opaqueNumber: Opaque<number>;
expectAssignable<AnyOpaque>(opaqueNumber);

declare const opaqueString: Opaque<string>;
expectAssignable<AnyOpaque>(opaqueString);
