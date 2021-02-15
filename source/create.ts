import type { Opaque } from "./Opaque";
import type { BaseType } from "./BaseType";

/**
 * `create` is a generic helper function that takes an opaque type `OpaqueType`
 * as its sole type parameter as well as a value `value` whose type is
 * assignable to the given opaque type's base type; `create` returns the given
 * value casted to the opaque type.
 *
 * Likewise, to widen a value whose type is opaque, use `widen`.
 *
 * *Note:* At runtime, the given value is not modified in any way. What
 * `create` returns is literally the same value as `value`.
 *
 * @template OpaqueType The opaque type to cast the given value `value` to.
 * @param valueThe value that is to be casted to the given opaque type.
 */
export function create<OpaqueType extends Opaque<unknown>>(
  value: BaseType<OpaqueType>
): OpaqueType {
  return value as OpaqueType;
}
