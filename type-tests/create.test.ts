import { expectType } from "tsd";
import { Opaque, create } from "../source";

type OpaqueNumber = Opaque<number>;
declare const number: number;
expectType<OpaqueNumber>(create<OpaqueNumber>(number));

type OpaqueString = Opaque<string>;
declare const string: string;
expectType<OpaqueString>(create<OpaqueString>(string));
