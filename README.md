<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sparsearray2iteratorRight

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator from a sparse array-like object, iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-to-sparse-iterator-right
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var sparsearray2iteratorRight = require( '@stdlib/array-to-sparse-iterator-right' );
```

#### sparsearray2iteratorRight( src\[, mapFcn\[, thisArg]] )

Returns an iterator which iterates from right to left over each element in a sparse array-like `object`.

<!-- eslint-disable no-sparse-arrays -->

```javascript
var it = sparsearray2iteratorRight( [ 1, , , 4 ] );
// returns <Object>

var v = it.next().value;
// returns 4

v = it.next().value;
// returns 1

var bool = it.next().done;
// returns true
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

To invoke a function for each `src` value, provide a callback function.

<!-- eslint-disable no-sparse-arrays -->

```javascript
function fcn( v ) {
    return v * 10.0;
}

var it = sparsearray2iteratorRight( [ 1, 2, , 4 ], fcn );
// returns <Object>

var v = it.next().value;
// returns 40.0

v = it.next().value;
// returns 20.0

// ...
```

The invoked function is provided three arguments:

-   **value**: iterated value.
-   **index**: iterated value index.
-   **src**: source array-like object.

<!-- eslint-disable no-sparse-arrays -->

```javascript
function fcn( v, i ) {
    return v * (i+1);
}

var it = sparsearray2iteratorRight( [ 1, 2, , 4 ], fcn );
// returns <Object>

var v = it.next().value;
// returns 16

v = it.next().value;
// returns 4

v = it.next().value;
// returns 1
```

To set the callback function execution context, provide a `thisArg`.

<!-- eslint-disable no-sparse-arrays -->

```javascript
function fcn( v ) {
    this.count += 1;
    return v * 10.0;
}

var ctx = {
    'count': 0
};

var it = sparsearray2iteratorRight( [ 1, 2, , 4 ], fcn, ctx );
// returns <Object>

var v = it.next().value;
// returns 40.0

v = it.next().value;
// returns 20.0

var count = ctx.count;
// returns 2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
-   If provided a generic `array`, the returned iterator **ignores** holes (i.e., `undefined` values). To iterate over all generic `array` elements, use [`@stdlib/array-to-iterator-right`][@stdlib/array/to-iterator-right].
-   A returned iterator does **not** copy a provided array-like `object`. To ensure iterable reproducibility, copy a provided array-like `object` **before** creating an iterator. Otherwise, any changes to the contents of an array-like `object` will be reflected in the returned iterator.
-   In environments supporting `Symbol.iterator`, the function **explicitly** does **not** invoke an array's `@@iterator` method, regardless of whether this method is defined. To convert an array to an implementation defined iterator, invoke this method directly.
-   The returned iterator supports array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-complex64`][@stdlib/array/complex64]).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var sparsearray2iteratorRight = require( '@stdlib/array-to-sparse-iterator-right' );

function scale( v, i ) {
    return v * (i+1);
}

// Create an array partially filled with random numbers:
var arr = new Array( 100 );
var i;
for ( i = 0; i < arr.length; i += 2 ) {
    arr[ i ] = randu();
}

// Create an iterator from the array which scales iterated values:
var it = sparsearray2iteratorRight( arr, scale );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-from-iterator`][@stdlib/array/from-iterator]</span><span class="delimiter">: </span><span class="description">create (or fill) an array from an iterator.</span>
-   <span class="package-name">[`@stdlib/array-to-iterator-right`][@stdlib/array/to-iterator-right]</span><span class="delimiter">: </span><span class="description">create an iterator from an array-like object, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/array-to-sparse-iterator`][@stdlib/array/to-sparse-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator from a sparse array-like object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-to-sparse-iterator-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-to-sparse-iterator-right

[test-image]: https://github.com/stdlib-js/array-to-sparse-iterator-right/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-to-sparse-iterator-right/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-to-sparse-iterator-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-to-sparse-iterator-right?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-to-sparse-iterator-right.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-to-sparse-iterator-right/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-to-sparse-iterator-right/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-to-sparse-iterator-right/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-to-sparse-iterator-right/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-to-sparse-iterator-right/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-to-sparse-iterator-right/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-to-sparse-iterator-right/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-to-sparse-iterator-right/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-to-sparse-iterator-right/main/LICENSE

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

<!-- <related-links> -->

[@stdlib/array/from-iterator]: https://github.com/stdlib-js/array-from-iterator

[@stdlib/array/to-iterator-right]: https://github.com/stdlib-js/array-to-iterator-right

[@stdlib/array/to-sparse-iterator]: https://github.com/stdlib-js/array-to-sparse-iterator

<!-- </related-links> -->

</section>

<!-- /.links -->
