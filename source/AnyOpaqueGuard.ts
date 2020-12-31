import type { AnyOpaque } from "./AnyOpaque";

/**
 * `AnyOpaqueGuard` is a type alias for any `OpaqueGuard`. As such, any opaque
 *  guard type is assignable to this type.
 */
export type AnyOpaqueGuard =
	/**
	 * @param value The value to be tested.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(value: any) => value is AnyOpaque;
