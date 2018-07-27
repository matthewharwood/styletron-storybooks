// // @flow
// import React, {Component, Fragment} from 'react';
//
// import dotcomStyles from '@uber/dotcom-styles';
//
// const {values} = dotcomStyles;
//
// export default class Heading extends Component {
//   static defaultProps = {
//     level: 3,
//   };
//
//   renderHeading1() {
//     const {className, heading} = this.props;
//
//     return (
//       <h1 className={className}>
//         {heading}
//         <style jsx>{`
//           h1 {
//             font-size: ${values.fontSize.heading1};
//             line-height: 1.05em;
//           }
//         `}</style>
//       </h1>
//     );
//   }
//
//   renderHeading2() {
//     const {className, heading} = this.props;
//
//     return (
//       <h2 className={className}>
//         {heading}
//         <style jsx>{`
//           h2 {
//             font-size: ${values.fontSize.heading2};
//             line-height: 1.05em;
//           }
//         `}</style>
//       </h2>
//     );
//   }
//
//   renderHeading3() {
//     const {className, heading} = this.props;
//
//     return (
//       <h3 className={className}>
//         {heading}
//         <style jsx>{`
//           h3 {
//             font-size: ${values.fontSize.heading3};
//             line-height: 1.2em;
//           }
//         `}</style>
//       </h3>
//     );
//   }
//
//   renderHeading4() {
//     const {className, heading} = this.props;
//
//     return (
//       <h4 className={className}>
//         {heading}
//         <style jsx>{`
//           h4 {
//             font-size: ${values.fontSize.heading4};
//             line-height: 1.2em;
//           }
//         `}</style>
//       </h4>
//     );
//   }
//
//   renderHeading5() {
//     const {className, heading} = this.props;
//
//     return (
//       <h5 className={className}>
//         {heading}
//         <style jsx>{`
//           h5 {
//             font-size: ${values.fontSize.heading5};
//             line-height: 1.25em;
//           }
//         `}</style>
//       </h5>
//     );
//   }
//
//   render() {
//     const {heading, level} = this.props;
//
//     return (
//       <Fragment>
//         {heading && level === 1 && this.renderHeading1()}
//         {heading && level === 2 && this.renderHeading2()}
//         {heading && level === 3 && this.renderHeading3()}
//         {heading && level === 4 && this.renderHeading4()}
//         {heading && level === 5 && this.renderHeading5()}
//       </Fragment>
//     );
//   }
// }
