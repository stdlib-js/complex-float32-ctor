<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Complex64

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> 64-bit complex number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/complex-float32-ctor
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
var Complex64 = require( '@stdlib/complex-float32-ctor' );
```

#### Complex64( real, imag )

64-bit complex number constructor, where `real` and `imag` are the **real** and **imaginary** components, respectively.

```javascript
var z = new Complex64( 5.0, 3.0 );
// returns <Complex64>
```

* * *

## Properties

#### Complex64.BYTES_PER_ELEMENT

Size (in bytes) of each component.

```javascript
var nbytes = Complex64.BYTES_PER_ELEMENT;
// returns 4
```

#### Complex64.prototype.BYTES_PER_ELEMENT

Size (in bytes) of each component.

```javascript
var z = new Complex64( 5.0, 3.0 );

var nbytes = z.BYTES_PER_ELEMENT;
// returns 4
```

#### Complex64.prototype.byteLength

Length (in bytes) of a complex number.

```javascript
var z = new Complex64( 5.0, 3.0 );

var nbytes = z.byteLength;
// returns 8
```

### Instance

A `Complex64` instance has the following properties...

#### re

A **read-only** property returning the **real** component.

```javascript
var z = new Complex64( 5.0, 3.0 );

var re = z.re;
// returns 5.0
```

#### im

A **read-only** property returning the **imaginary** component.

```javascript
var z = new Complex64( 5.0, -3.0 );

var im = z.im;
// returns -3.0
```

* * *

## Methods

### Accessor Methods

These methods do **not** mutate a `Complex64` instance and, instead, return a complex number representation.

#### Complex64.prototype.toString()

Returns a `string` representation of a `Complex64` instance.

```javascript
var z = new Complex64( 5.0, 3.0 );
var str = z.toString();
// returns '5 + 3i'

z = new Complex64( -5.0, -3.0 );
str = z.toString();
// returns '-5 - 3i'
```

#### Complex64.prototype.toJSON()

Returns a [JSON][json] representation of a `Complex64` instance. [`JSON.stringify()`][mdn-json-stringify] implicitly calls this method when stringifying a `Complex64` instance.

```javascript
var z = new Complex64( 5.0, -3.0 );

var o = z.toJSON();
/*
  {
    "type": "Complex64",
    "re": 5.0,
    "im": -3.0
  }
*/
```

To [revive][mdn-json-parse] a `Complex64` number from a [JSON][json] `string`, see [@stdlib/complex/float32/reviver][@stdlib/complex/float32/reviver].

</section>

<!-- /.usage -->

* * *

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Both the **real** and **imaginary** components are stored as single-precision floating-point numbers.

</section>

<!-- /.notes -->

* * *

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var z = new Complex64( 3.0, -2.0 );

console.log( 'type: %s', typeof z );
// => 'type: object'

console.log( 'str: %s', z );
// => 'str: 3 - 2i'

console.log( 'real: %d', z.re );
// => 'real: 3'

console.log( 'imaginary: %d', z.im );
// => 'imaginary: -2'

console.log( 'JSON: %s', JSON.stringify( z ) );
// => 'JSON: {"type":"Complex64","re":3,"im":-2}'
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/complex/float32/ctor.h"
```

#### stdlib_complex64_t

An opaque type definition for a single-precision complex floating-point number.

```c
stdlib_complex64_t z = stdlib_complex64( 5.0f, 2.0f );
```

#### stdlib_complex64_parts_t

An opaque type definition for a union for accessing the real and imaginary parts of a single-precision complex floating-point number.

```c
float realf( const stdlib_complex64_t z ) {
    stdlib_complex64_parts_t v;

    // Assign a single-precision complex floating-point number:
    v.value = z;

    // Extract the real component:
    float re = v.parts[ 0 ];

    return re;
}

// ...

// Create a complex number:
stdlib_complex64_t z = stdlib_complex64( 5.0f, 2.0f );

// ...

// Access the real component:
float re = realf( z );
// returns 5.0f
```

The union has the following members:

-   **value**: `stdlib_complex64_t` single-precision complex floating-point number.

-   **parts**: `float[]` array having the following elements:

    -   **0**: `float` real component.
    -   **1**: `float` imaginary component.

#### stdlib_complex64( real, imag )

Returns a single-precision complex floating-point number.

```c
stdlib_complex64_t z = stdlib_complex64( 5.0f, 2.0f );
```

The function accepts the following arguments:

-   **real**: `[in] float` real component.
-   **imag**: `[in] float` imaginary component.

```c
stdlib_complex64_t stdlib_complex64( const float real, const float imag );
```

#### stdlib_complex64_from_float32( real )

Converts a single-precision floating-point number to a single-precision complex floating-point number.

```c
stdlib_complex64_t z = stdlib_complex64_from_float32( 5.0f );
```

The function accepts the following arguments:

-   **real**: `[in] float` real component.

```c
stdlib_complex64_t stdlib_complex64_from_float32( const float real );
```

#### stdlib_complex64_from_float64( real )

Converts a double-precision floating-point number to a single-precision complex floating-point number.

```c
stdlib_complex64_t z = stdlib_complex64_from_float64( 5.0 );
```

The function accepts the following arguments:

-   **real**: `[in] double` real component.

```c
stdlib_complex64_t stdlib_complex64_from_float64( const double real );
```

#### stdlib_complex64_from_complex64( z )

Converts (copies) a single-precision complex floating-point number to a single-precision complex floating-point number.

```c
stdlib_complex64_t z1 = stdlib_complex64( 5.0f, 3.0f );
stdlib_complex64_t z2 = stdlib_complex64_from_complex64( z1 );
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex64_t` single-precision complex floating-point number.

```c
stdlib_complex64_t stdlib_complex64_from_complex64( const stdlib_complex64_t z );
```

#### stdlib_complex64_from_int8( real )

Converts a signed 8-bit integer to a single-precision complex floating-point number.

```c
stdlib_complex64_t z = stdlib_complex64_from_int8( 5 );
```

The function accepts the following arguments:

-   **real**: `[in] int8_t` real component.

```c
stdlib_complex64_t stdlib_complex64_from_int8( const int8_t real );
```

#### stdlib_complex64_from_uint8( real )

Converts an unsigned 8-bit integer to a single-precision complex floating-point number.

```c
stdlib_complex64_t z = stdlib_complex64_from_uint8( 5 );
```

The function accepts the following arguments:

-   **real**: `[in] uint8_t` real component.

```c
stdlib_complex64_t stdlib_complex64_from_uint8( const uint8_t real );
```

#### stdlib_complex64_from_int16( real )

Converts a signed 16-bit integer to a single-precision complex floating-point number.

```c
stdlib_complex64_t z = stdlib_complex64_from_int16( 5 );
```

The function accepts the following arguments:

-   **real**: `[in] int16_t` real component.

```c
stdlib_complex64_t stdlib_complex64_from_int16( const int16_t real );
```

#### stdlib_complex64_from_uint16( real )

Converts an unsigned 16-bit integer to a single-precision complex floating-point number.

```c
stdlib_complex64_t z = stdlib_complex64_from_uint16( 5 );
```

The function accepts the following arguments:

-   **real**: `[in] uint16_t` real component.

```c
stdlib_complex64_t stdlib_complex64_from_uint16( const uint16_t real );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdio.h>

/**
* Return the real component of a single-precision complex floating-point number.
*
* @param z    complex number
* @return     real component
*/
static float real( const stdlib_complex64_t z ) {
    stdlib_complex64_parts_t v;

    // Assign a single-precision complex floating-point number:
    v.value = z;

    // Extract the real component:
    float re = v.parts[ 0 ];

    return re;
}

/**
* Return the imaginary component of a single-precision complex floating-point number.
*
* @param z    complex number
* @return     imaginary component
*/
static float imag( const stdlib_complex64_t z ) {
    stdlib_complex64_parts_t v;

    // Assign a single-precision complex floating-point number:
    v.value = z;

    // Extract the imaginary component:
    float im = v.parts[ 1 ];

    return im;
}

int main( void ) {
    const stdlib_complex64_t x[] = {
        stdlib_complex64( 5.0f, 2.0f ),
        stdlib_complex64( -2.0f, 1.0f ),
        stdlib_complex64( 0.0f, -0.0f ),
        stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
    };

    stdlib_complex64_t v;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        printf( "%f + %fi\n", real( v ), imag( v ) );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/complex-cmplx`][@stdlib/complex/cmplx]</span><span class="delimiter">: </span><span class="description">create a complex number.</span>
-   <span class="package-name">[`@stdlib/complex-float64/ctor`][@stdlib/complex/float64/ctor]</span><span class="delimiter">: </span><span class="description">128-bit complex number.</span>

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex-float32-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex-float32-ctor

[test-image]: https://github.com/stdlib-js/complex-float32-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/complex-float32-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex-float32-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex-float32-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex-float32-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/complex-float32-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/complex-float32-ctor/tree/deno
[deno-readme]: https://github.com/stdlib-js/complex-float32-ctor/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/complex-float32-ctor/tree/umd
[umd-readme]: https://github.com/stdlib-js/complex-float32-ctor/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/complex-float32-ctor/tree/esm
[esm-readme]: https://github.com/stdlib-js/complex-float32-ctor/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/complex-float32-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex-float32-ctor/main/LICENSE

[json]: http://www.json.org/

[mdn-json-stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

[mdn-json-parse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

[@stdlib/complex/float32/reviver]: https://github.com/stdlib-js/complex-float32-reviver

<!-- <related-links> -->

[@stdlib/complex/cmplx]: https://github.com/stdlib-js/complex-cmplx

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex-float64-ctor

<!-- </related-links> -->

</section>

<!-- /.links -->
