// @flow
import React, {Component, Fragment} from 'react';
import {styled} from 'styletron-react';
import dotcomStyles from '@matthewharwood/dotcom-styles';

const {values} = dotcomStyles;

const Host = styled('div', ({$fontStyle}) => {
  return {
    fontFamily: values.fontFamily.body,
    fontSize: values.fontSize[$fontStyle],
    lineHeight: '1.65em',
    maxWidth: values.layout.bodyMaxWidth,
    'a': {
      color: values.color.accent
    }
  }
});

export class Markdown extends Component<*> {
  static defaultProps = {
    style: 'base',
    body: {htmlContent: '<p>wowowowowo</p>'}
  };

  render() {
    const {body, style} = this.props;
    const htmlContent = body && body.htmlContent ? body.htmlContent : null;
    return body && style && htmlContent && (
      <Host
        $fontStyle='bodyLead'
        $style={style}
        className={`markdown-container-${style}`}
        dangerouslySetInnerHTML={
          htmlContent ? {__html: htmlContent} : null
        }
      />
    )
  }
}
