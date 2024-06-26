/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { routerRedux, Route, Switch } from "dva/router";
import { ConfigProvider, BackTop } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import { getRouterData } from "./common/router";
import AuthRoute from "./utils/AuthRoute";

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const UserLayout = routerData["/user"].component;
  const BasicLayout = routerData["/"].component;

  return (
    <ConfigProvider locale={enUS}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/user" component={UserLayout} />
          <AuthRoute
            path="/"
            component={BasicLayout}
            redirectPath="/user/login"
          />
        </Switch>
      </ConnectedRouter>
      <BackTop />
    </ConfigProvider>
  );
}

export default RouterConfig;
