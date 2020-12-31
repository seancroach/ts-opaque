import { expectAssignable } from "tsd";
import type { Symbols } from "../source";

declare const base: typeof Symbols.base;
declare const brand: typeof Symbols.brand;

expectAssignable<symbol>(base);
expectAssignable<symbol>(brand);
