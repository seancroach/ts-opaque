import type { AnyOpaque } from "./AnyOpaque";

/**
 * `AnyOpaqueFactory` is a type alias for any `OpaqueFactory`. As such, any
 * opaque factory is assignable to this type.
 */
export type AnyOpaqueFactory =
	/**
	 * @param value The value to be casted to an opaque type.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(value: any) => AnyOpaque;
