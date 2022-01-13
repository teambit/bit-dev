import React from 'react';
import { TableOfContent } from './table-of-content';

export const BasicTableOfContent = () => (
  <div>
    <h2>Title #1</h2>
    <h2>Title #2</h2>
    <TableOfContent data-testid="basic-table" />
  </div>
);

export const TableOfContentWithTitle = () => (
  <div>
    <h2>Title #1</h2>
    <h2>Title #2</h2>
    <TableOfContent title="table of content" />
  </div>
);
