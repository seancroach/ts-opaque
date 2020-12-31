import type { Opaque } from "./Opaque";

/**
 * `AnyOpaque` is a type alias for any `Opaque` type created through
 * `ts-opaque`. As such, any opaque type is assignable to this type.
 */
export type AnyOpaque = Opaque<unknown>;
