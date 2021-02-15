[docs-url]: https://seancroach.github.io/ts-opaque/modules.html
[downloads-badge]: https://img.shields.io/npm/dt/ts-opaque?logo=npm
[opaque-types-url]: https://codemix.com/opaque-types-in-javascript/
[github-ci-badge]: https://img.shields.io/github/workflow/status/seancroach/ts-opaque/CI?logo=github
[github-ci-url]: https://github.com/seancroach/ts-opaque/actions?query=workflow%3A%22CI%22
[license-url]: https://github.com/seancroach/ts-opaque/blob/latest/license
[release-url]: https://www.npmjs.com/package/ts-opaque

# ts-opaque

[![Build Status][github-ci-badge]][github-ci-url] [![Downloads][downloads-badge]][release-url]

_Easy-to-use library that implements [opaque types][opaque-types-url] in TypeScript!_

## Installation

Install `ts-opaque` through npm:

```
$ npm install ts-opaque
```

## Motivation

An opaque type, in TypeScript, is a type whose true structure is obfuscated to the compiler at compile-time. These types can make your code more type safe, secure, easier to refactor, and faster!

While Flow has an `opaque` keyword for creating opaque types, TypeScript does not; this package is my solution.

## Usage

```ts
import Opaque from "ts-opaque";

interface User {
  readonly id: Opaque<number, User>;
  name: string;
}

interface Post {
  readonly id: Opaque<number, Post>;
  readonly authorId: User["id"];
  title: string;
  body: string;
}

let myUser: User = {
  // Error, type 'number' is not assignable to type 'Opaque<number, User>'
  id: 1,
  name: "John Doe",
};

myUser = {
  id: 1 as User["id"],
  name: "John Doe",
};

let myPost: Post = {
  // Error, type 'number' is not assignable to type 'Opaque<number, Post>'
  id: 1,
  // Error, type 'number' is not assignable to type 'Opaque<number, User>'
  authorId: 1,
  title: "ts-opaque",
  body: "It's a pretty cool package.",
};

myPost = {
  id: 1 as Post["id"],
  authorId: myUser.id,
  title: "ts-opaque",
  body: "It's a pretty cool package.",
};
```

There are other types and helper function `ts-opaque` exports as well! Check out the API below.

## API

- [`Opaque`](https://github.com/seancroach/ts-opaque/blob/latest/source/Opaque.ts) - Create an opaque type.

### Helper Types

- [`BaseType`](https://github.com/seancroach/ts-opaque/blob/latest/source/BaseType.ts) - Get the base type of an opaque type.
- [`BrandType`](https://github.com/seancroach/ts-opaque/blob/latest/source/BrandType.ts) - Get the brand type of an opaque type.

### Helper Functions

- [`create`](https://github.com/seancroach/ts-opaque/blob/latest/source/create.ts) - Cast a value to an opaque type.
- [`widen`](https://github.com/seancroach/ts-opaque/blob/latest/source/widen.ts) - Widen an opaque type to its base type.

## Related Works

Others have made fantastic packages to implement opaque types in TypeScript. While these implementations are flawless in their functionality, `ts-opaque` brands its opaque types with symbol keys, hiding them directly from your IDE's intellisense or its equivalent. `ts-opaque` is also distributed with helper functions and types to manipulate and use opaque types easily. Spread some love to these works:

- [`ts-brand`](https://github.com/kourge/ts-brand)
- [`type-fest`](https://github.com/sindresorhus/type-fest)

## License

This package is available as open source under the terms of the [MIT License][license-url].
