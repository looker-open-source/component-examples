/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { sdk } from "../src/helpers/CorsSession";
import { Query, Visualization } from "@looker/visualizations";
import { DataProvider } from "@looker/components-data";
import { ComponentsProvider } from "@looker/components";

function App() {
  return (
    <>
      <h1>Get started with Looker visualization components</h1>
      <ComponentsProvider>
        <DataProvider sdk={sdk}>
          {/* Change this query slug to match your query slug */}
          <Query query="Jlm4YHPeT3lLGA9UtHjZcA">
            <Visualization />
          </Query>
        </DataProvider>
      </ComponentsProvider>
    </>
  );
}

export default App;
