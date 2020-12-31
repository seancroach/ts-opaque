import { expectAssignable } from "tsd";
import type { AnyOpaqueFactory, Opaque, OpaqueFactory } from "../source";

declare const opaqueNumberFactory: OpaqueFactory<Opaque<number>>;
expectAssignable<AnyOpaqueFactory>(opaqueNumberFactory);

declare const opaqueStringFactory: OpaqueFactory<Opaque<string>>;
expectAssignable<AnyOpaqueFactory>(opaqueStringFactory);
