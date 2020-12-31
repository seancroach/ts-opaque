import type { AnyOpaque } from "./AnyOpaque";
import type { BaseType } from "./BaseType";

/**
 * `KeyofOpaque` is a generic type alias that takes an opaque type `OpaqueType`
 * as its sole type parameter; `KeyofOpaque` obtains the `keyof` types of the
 * opaque type's base type.
 *
 * @template OpaqueType
 * The opaque type whose base type's keys are to be obtained.
 */
export type KeyofOpaque<
	OpaqueType extends AnyOpaque
> = keyof BaseType<OpaqueType>;
