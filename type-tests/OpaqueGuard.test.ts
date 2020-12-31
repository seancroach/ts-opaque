import { expectAssignable } from "tsd";
import type { Opaque, OpaqueGuard } from "../source";

declare function opaqueGuardLike(value: number): value is Opaque<number>;
expectAssignable<OpaqueGuard<Opaque<number>>>(opaqueGuardLike);
