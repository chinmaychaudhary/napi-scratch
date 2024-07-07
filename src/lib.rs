#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn subtract_with_assertion(a: i32, b: i32) -> i32 {
  assert!(a>b);
  a - b
}
