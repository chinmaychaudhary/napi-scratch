Demonstrates how napi-built module fails to be caught in js try/catch. Read test.mjs and src/lib.rs

## Getting started

```bash
nvm use 18
corepack enable
yarn set version 4.0.2
yarn
```

## Building

```bash
yarn build:debug
```

## Test try/catch
```bash
yarn try
```

fails with the following logs
```
yarn try                                                        
Case 1 : From native - sum(40,2) =  42
thread '<unnamed>' panicked at src/lib.rs:8:3:
assertion failed: a > b
stack backtrace:
   0:        0x105f32a68 - std::backtrace_rs::backtrace::libunwind::trace::h89330013351db63c
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/std/src/../../backtrace/src/backtrace/libunwind.rs:104:5
   1:        0x105f32a68 - std::backtrace_rs::backtrace::trace_unsynchronized::hef5ed454b5e9a42a
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
   2:        0x105f32a68 - std::sys_common::backtrace::_print_fmt::h661fed69b93a32f7
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/std/src/sys_common/backtrace.rs:68:5
   3:        0x105f32a68 - <std::sys_common::backtrace::_print::DisplayBacktrace as core::fmt::Display>::fmt::h0aa20ca08aeb683c
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/std/src/sys_common/backtrace.rs:44:22
   4:        0x105f475b8 - core::fmt::rt::Argument::fmt::h0c1f3a7ec00b5b49
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/core/src/fmt/rt.rs:142:9
   5:        0x105f475b8 - core::fmt::write::h168dbafcf35bac68
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/core/src/fmt/mod.rs:1120:17
   6:        0x105f31350 - std::io::Write::write_fmt::hdb0dd3f09dcf2281
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/std/src/io/mod.rs:1846:15
   7:        0x105f3289c - std::sys_common::backtrace::_print::h7d087ee39ce46706
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/std/src/sys_common/backtrace.rs:47:5
   8:        0x105f3289c - std::sys_common::backtrace::print::h57b289e4b951ee17
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/std/src/sys_common/backtrace.rs:34:9
   9:        0x105f33abc - std::panicking::default_hook::{{closure}}::h783b6c512154ec65
  10:        0x105f33804 - std::panicking::default_hook::hcdfa9e1e0f234a4f
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/std/src/panicking.rs:292:9
  11:        0x105f33ef8 - std::panicking::rust_panic_with_hook::h9aea678ca49d64cf
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/std/src/panicking.rs:781:13
  12:        0x105f33dc0 - std::panicking::begin_panic_handler::{{closure}}::ha16c3377e66deceb
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/std/src/panicking.rs:651:13
  13:        0x105f32eec - std::sys_common::backtrace::__rust_end_short_backtrace::hea8fdda1ea8a4c0e
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/std/src/sys_common/backtrace.rs:171:18
  14:        0x105f33b74 - rust_begin_unwind
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/std/src/panicking.rs:647:5
  15:        0x105f503b8 - core::panicking::panic_fmt::h1cb43b60f5788132
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/core/src/panicking.rs:72:14
  16:        0x105f50440 - core::panicking::panic::h3131e0868b9f8622
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/core/src/panicking.rs:144:5
  17:        0x105ef74cc - sum::sum::ha865649e5cd488c2
                               at /Users/chinmay.chaudhary/repos/napi-scratch/src/lib.rs:8:3
  18:        0x105ef71e8 - sum::__napi__sum::{{closure}}::{{closure}}::h96d3ac549f47cd7c
                               at /Users/chinmay.chaudhary/repos/napi-scratch/src/lib.rs:6:1
  19:        0x105ef6744 - napi::bindgen_prelude::within_runtime_if_available::hf7b19a6e6b207948
                               at /Users/chinmay.chaudhary/.cargo/registry/src/index.crates.io-6f17d22bba15001f/napi-2.16.6/src/lib.rs:162:5
  20:        0x105ef7180 - sum::__napi__sum::{{closure}}::hd1f0c2d2470cbdd8
                               at /Users/chinmay.chaudhary/repos/napi-scratch/src/lib.rs:6:1
  21:        0x105ef6e2c - core::result::Result<T,E>::and_then::ha081fc9bf0364e4d
                               at /rustc/25ef9e3d85d934b27d9dada2f9dd52b1dc63bb04/library/core/src/result.rs:1316:22
  22:        0x105ef7574 - sum::__napi__sum::hc69465a67aa80d14
                               at /Users/chinmay.chaudhary/repos/napi-scratch/src/lib.rs:6:1
fatal runtime error: failed to initiate panic, error 5
```