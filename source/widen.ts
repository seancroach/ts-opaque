import type { Opaque } from "./Opaque";
import type { BaseType } from "./BaseType";

/**
 * `widen` is a generic helper function that takes an opaque type `OpaqueType`
 * as its sole type parameter as well as a value `value` whose type is
 * assignable to the given opaque type; `widen` returns the given value casted
 * to the given opaque type's base type.
 *
 * Likewise, to narrow a value to an opaque type, use `create`.
 *
 * *Note:* At runtime, the given value is not modified in any way. What `widen`
 * returns is literally the same value as `value`.
 *
 * @template OpaqueType The opaque type to be widened.
 * @param value
 * The value that is to be casted to the given opaque type's base type.
 */
export function widen<OpaqueType extends Opaque<unknown>>(
  value: OpaqueType
): BaseType<OpaqueType> {
  return value;
}
