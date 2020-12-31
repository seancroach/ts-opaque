import { expectAssignable } from "tsd";
import type { AnyOpaqueGuard, Opaque, OpaqueGuard } from "../source";

declare const opaqueNumberGuard: OpaqueGuard<Opaque<number>>;
expectAssignable<AnyOpaqueGuard>(opaqueNumberGuard);

declare const opaqueStringGuard: OpaqueGuard<Opaque<string>>;
expectAssignable<AnyOpaqueGuard>(opaqueStringGuard);
