import { expectAssignable, expectNotAssignable } from "tsd";
import type { Opaque } from "../source";

declare const number: number;
declare const opaqueNumber: Opaque<number>;
declare const tokenizedOpaqueNumber: Opaque<number, "Token">;

expectAssignable<number>(opaqueNumber);
expectAssignable<number>(tokenizedOpaqueNumber);

expectNotAssignable<Opaque<number>>(number);
expectNotAssignable<Opaque<number, "Token">>(number);

expectAssignable<Opaque<number>>(tokenizedOpaqueNumber);
