// Copyright JS Foundation and other contributors, http://js.foundation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

try
{
  Symbol.for.length.toString.length.toExponential.length.valueOf.length.toExponential.length.valueOf.length.toFixed.name.anchor.name.bold.length.toExponential.caller;
  assert (false);
}
catch (e)
{
  var error_type = ReferenceError;

  try
  {
    /* Check whether the Symbol builtin is available */
    Symbol;
    error_type = TypeError;
  }
  catch (e)
  {
  }

  assert (e instanceof error_type);
}
