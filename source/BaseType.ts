import type Opaque from "./index";
import type { Symbols } from "./Symbols";

/**
 * `BaseType` is a generic type that takes an opaque type `OpaqueType` as its
 * sole type parameter; `BaseType` obtains the given opaque type's base type.
 *
 * Similarly, to obtain the opaque type's brand's type, use `BrandTypeOf`.
 *
 * @template OpaqueType The opaque type whose base type is to be obtained.
 */
export type BaseType<
  OpaqueType extends Opaque<unknown>
> = OpaqueType[typeof Symbols.base];
