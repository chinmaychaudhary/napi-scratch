Demonstrates how napi-rs built module fails to be caught in js try/catch. Read try.mjs and src/lib.rs

## Getting started

```bash
nvm use 18
corepack enable
yarn set version 4.0.2
yarn
```

## Building and Running

```bash
yarn try
```

fails with the following logs
```
yarn try                                                        
    Finished dev [unoptimized + debuginfo] target(s) in 0.04s
1-3 = 
thread '<unnamed>' panicked at src/lib.rs:8:3:
assertion failed: a > b
stack backtrace:
   0: rust_begin_unwind
             at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/std/src/panicking.rs:647:5
   1: core::panicking::panic_fmt
             at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/core/src/panicking.rs:72:14
   2: core::panicking::panic
             at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/core/src/panicking.rs:144:5
   3: napi_try::subtract_with_assertion
             at ./src/lib.rs:8:3
   4: napi_try::__napi__subtract_with_assertion::{{closure}}::{{closure}}
             at ./src/lib.rs:6:1
   5: napi::bindgen_prelude::within_runtime_if_available
             at /Users/chinmay.chaudhary/.cargo/registry/src/index.crates.io-6f17d22bba15001f/napi-2.16.8/src/lib.rs:162:5
   6: napi_try::__napi__subtract_with_assertion::{{closure}}
             at ./src/lib.rs:6:1
   7: core::result::Result<T,E>::and_then
             at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/core/src/result.rs:1316:22
   8: napi_try::__napi__subtract_with_assertion
             at ./src/lib.rs:6:1
note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
fatal runtime error: failed to initiate panic, error 5

```