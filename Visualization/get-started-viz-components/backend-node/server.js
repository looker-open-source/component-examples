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

const cors = require("cors");
const express = require("express");
const { LookerNodeSDK } = require("@looker/sdk-node");

const port = 3001;
const app = express();
// The init40 method below will authenticate using
// the looker.ini file
const sdk = LookerNodeSDK.init40();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", async (req, res) => {
  const userId = await sdk.ok(sdk.me("id"));
  const accessToken = await sdk.login_user(userId.id);
  const user = {
    user_token: accessToken.value,
    token_last_refreshed: Date.now(),
  };
  res.json({ ...user });
});

app.listen(port, async () => {
  console.log(`Backend Server listening on port ${port}`);
});
