import { expectType } from "tsd";
import type { BaseType, Opaque } from "../source";

declare const base: BaseType<Opaque<number>>;
expectType<number>(base);
