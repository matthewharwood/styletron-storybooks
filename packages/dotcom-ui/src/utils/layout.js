// @flow
import React, {Component} from 'react';
import {styled} from 'styletron-react';
import dotcomStyles from '@matthewharwood/dotcom-styles';

const {values} = dotcomStyles;
type Props = {
  alignItems: string,
  columnCount: number,
  columnWidth: number,
  portableColumnCount: 1,
  spacing: string,
  autoColumns: boolean,
  children: any
}

const getSpacing = (spacing:string) => {
  const {gutterDefault, gutterHalf, gutterQuarter} = values.layout;

  const spacingMap = {
    default: gutterDefault,
    flush: 0,
    half: gutterHalf,
    quarter: gutterQuarter,
  };

  return `${spacingMap[spacing]}`;
};
const Host = styled('div', ({$portableColumnCount, $alignItems, $columnCount, $autoColumns, $spacing, $columnWidth}) => {
  return {
    // $FlowFixMe think type system is accually wrong on this.
    alignItems: $alignItems,
    display: 'grid',
    gridTemplateColumns: `repeat(${$columnCount}, ${$autoColumns ? 'auto': '1fr'}`,
    gridGap: getSpacing($spacing),
    minWidth: 0,
    gridColumnStart: `span ${$columnWidth}`,
    [`@media (max-width: ${values.breakpoints.portable})`]: {
      gridTemplateColumns: `repeat(${$portableColumnCount}, ${$autoColumns ? 'auto': '1fr'}`
    }
  };
});

export class Layout extends Component<Props> {
  static defaultProps = {
    alignItems: 'center',
    columnCount: 1,
    columnWidth: 1,
    portableColumnCount: 3,
    spacing: 'half',
  };



  render() {
    const {
      autoColumns,
      alignItems,
      children,
      columnCount,
      columnWidth,
      portableColumnCount,
      spacing,
    } = this.props;

    return (
      <Host
        $portableColumnCount={portableColumnCount}
        $alignItems={alignItems}
        $columnCount={columnCount}
        $autoColumns={autoColumns}
        $spacing={spacing}
        $columnWidth={columnWidth}>
        {children}

      </Host>
    );
  }
}
