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

import { Entity } from '@backstage/catalog-model';
import {
  useEntity,
  MissingAnnotationEmptyState,
} from '@backstage/plugin-catalog-react';
import { CodeCoveragePage } from './CodeCoveragePage';

/**
 * Returns true if the given entity has code coverage enabled.
 *
 * @public
 */
export function isCodeCoverageAvailable(entity: Entity) {
  return Boolean(entity.metadata.annotations?.['backstage.io/code-coverage']);
}

/**
 * @public
 */
export const Router = (): JSX.Element => {
  const { entity } = useEntity();

  if (!isCodeCoverageAvailable(entity)) {
    return (
      <MissingAnnotationEmptyState annotation="backstage.io/code-coverage" />
    );
  }

  return <CodeCoveragePage />;
};
