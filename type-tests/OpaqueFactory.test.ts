import { expectAssignable } from "tsd";
import type { Opaque, OpaqueFactory } from "../source";

declare function opaqueFactoryLike(value: number): Opaque<number>;
expectAssignable<OpaqueFactory<Opaque<number>>>(opaqueFactoryLike);
