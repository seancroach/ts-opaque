import type { Symbols } from "./Symbols";

/**
 * `Opaque` is a generic type alias that takes a base type `BaseType` and an
 * optional brand type `BrandType`, that defaults to 'unknown', as its type
 * parameters; `Opaque` represents an opaque type, a type that is assignable to
 * its base type but its base type is not directly assignable to the opaque type.
 *
 * An opaque type is also assignable to any opaque type with assignable base
 * types and brand types; an opaque type is not mututally assignable with
 * another opaque type derived from the same base type given that their brand
 * types are not mutually assignable.
 *
 * It is crucual that brands are handled well. A common practice is to assign
 * `BrandType` to the name of the type; another encouraged practice is to
 * define an opaque type in terms of its surrounding interface, forming a
 * recursive type.
 *
 * The brand type of an opaque type can be anything.
 */
// While it might be more desirable for `BaseType` to default to `unknown`, it
// may introduce semantic errors since it's almost never desirable from the
// package consumer's perspective; this error would also be "silent" too.
export type Opaque<BaseType, BrandType = unknown> = BaseType & {
  readonly [Symbols.base]: BaseType;
  readonly [Symbols.brand]: BrandType;
};
