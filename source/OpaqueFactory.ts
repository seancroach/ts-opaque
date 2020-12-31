import type { AnyOpaque } from "./AnyOpaque";
import type { BaseType } from "./BaseType";

/**
 * `OpaqueFactory` is a generic type that takes an opaque type `OpaqueType` as
 * its sole type parameter; `OpaqueFactory` represents any function that takes
 * a value `value` whose type is assignable to the given opaque type's base
 * type and returns a value whose type is `OpaqueType`.
 *
 * @template OpaqueType The opaque type the constructed value will be.
 */
export type OpaqueFactory<OpaqueType extends AnyOpaque> =
	/**
	 * @param value The value to be casted to `OpaqueType`.
	 */
	(value: BaseType<OpaqueType>) => OpaqueType;
