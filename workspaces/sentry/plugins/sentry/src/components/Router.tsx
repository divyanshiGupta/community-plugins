/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useEntity } from '@backstage/plugin-catalog-react';
import { Route, Routes } from 'react-router-dom';
import { SentryIssuesWidget } from './SentryIssuesWidget';

/** @public */
export const Router = () => {
  const { entity } = useEntity();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SentryIssuesWidget
            entity={entity}
            statsFor="24h"
            tableOptions={{
              padding: 'dense',
              paging: true,
              search: false,
              pageSize: 5,
            }}
          />
        }
      />
    </Routes>
  );
};
