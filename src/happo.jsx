/* global happo */
import React from 'react';

import ActionPanel from './ActionPanel';
import Button from './Button';
import render from './render';

happo.define('Button', () => {
  render(
    <Button>Click me</Button>
  );
}, { viewports: ['small', 'large'] });

happo.define('ActionPanel', () => {
  render(
    <ActionPanel
      action={<Button>Enable</Button>}
    >
      Approximation gyros are disabled
    </ActionPanel>
  );
}, { viewports: ['small', 'large'] });
