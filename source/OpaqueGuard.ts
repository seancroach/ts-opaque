import type { AnyOpaque } from "./AnyOpaque";
import type { BaseType } from "./BaseType";

/**
 * `OpaqueGuard` is a generic type that takes an opaque type `OpaqueType` as
 * its sole type parameter; `OpaqueGuard` represents any function that takes
 * a value `value` whose type is assignable to the given opaque type's base
 * type and returns if the given value is a valid canidate to be assignable
 * to the given opaque type.
 *
 * @template OpaqueType The opaque type the value `value` will be narrowed to.
 */
export type OpaqueGuard<OpaqueType extends AnyOpaque> =
	/**
	 * @param value The value to be tested.
	 */
	(value: BaseType<OpaqueType>) => value is OpaqueType;
