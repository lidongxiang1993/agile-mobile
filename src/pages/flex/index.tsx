import React from 'react';
import MarkdownView from '../../components/markdownView';

const markdownDoc = require('../../../packages/flex/README.md');

export default (props: any) => {
  const content = { __html: markdownDoc };
  return (
    <MarkdownView content={content} />
  );
};