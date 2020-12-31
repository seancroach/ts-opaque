import { expectType } from "tsd";
import type { BrandType, Opaque } from "../source";

declare const brand: BrandType<Opaque<unknown, "brand">>;
expectType<"brand">(brand);
