import type { Opaque } from "./Opaque";
import type { Symbols } from "./Symbols";

/**
 * `BrandType` is a generic type that takes an opaque type `OpaqueType` as
 * its sole type parameter; `BrandType` obtains the opaque type's brand's
 * type.
 *
 * Similarly, to obtain the opaque type's base type, use `BaseTypeOf`.
 *
 * @template OpaqueType The opaque type whose brand's type is to be obtained.
 */
export type BrandType<
  OpaqueType extends Opaque<unknown>
> = OpaqueType[typeof Symbols.brand];
