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

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useCostInsightsStyles as useStyles } from '../../utils/styles';
import { ScrollAnchor } from '../../utils/scroll';
import { DefaultNavigation } from '../../utils/navigation';

type AlertInsightsHeaderProps = {
  title: string;
  subtitle: string;
};

export const AlertInsightsHeader = ({
  title,
  subtitle,
}: AlertInsightsHeaderProps) => {
  const classes = useStyles();

  return (
    <Box mb={6} position="relative">
      <ScrollAnchor id={DefaultNavigation.AlertInsightsHeader} />
      <Typography variant="h4" align="center">
        {title}{' '}
        <Typography component="span" role="img" aria-label="direct-hit">
          🎯
        </Typography>
      </Typography>
      <Typography className={classes.h6Subtle} align="center" gutterBottom>
        {subtitle}
      </Typography>
    </Box>
  );
};
