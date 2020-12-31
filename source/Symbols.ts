/**
 * `Symbols` is a namespace holding all the symbols used internally within
 * `ts-opaque`. Exposed for convenience, although should not need be used in
 * most cases.
 */
// This is mainly so typedoc doesn't register these variables as global
// constants.
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Symbols {
	/**
	 * `base` is a unique symbol to be used as a property key in opaque types where
	 * said opaque type's underlying base type is stored.
	 *
	 * *Note:* At runtime, `base` does not exist. ***Do not use `base` as a runtime
	 * value.***
	 */
	export declare const base: unique symbol;

	/**
	 * `brand` is a unique symbol to be used as a property key in opaque types
	 * where said opaque type's brand is stored.
	 *
	 * *Note:* At runtime, `brand` does not exist. ***Do not use `brand` as a
	 * runtime value.***
	 */
	export declare const brand: unique symbol;
}

export type { Symbols };
