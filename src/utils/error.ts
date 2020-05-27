// import { ApolloError } from 'apollo-client';
// import { get, isEmpty } from 'lodash';
// import {
//   ServerErrorID,
//   SERVER_ERROR_MAP,
//   ERROR_MESSAGE,
// } from 'constants/error';

// export const parseServerError = (error: ApolloError): ServerErrorType => {
//   let errorMap = {};
//   const commonMessages: string[] = [];
//   const graphQLErrors = error.graphQLErrors;
//   const networkErrors = get(error.networkError, 'result.errors');
//   // bug from apollo, graphQLErrors is always empty
//   // strapi-plugin-graphql consider any logic errors as networkError
//   // by returning status code other than 200
//   // and populate errors at networkError.result.errors
//   // https://github.com/apollographql/apollo-client/issues/2810
//   if (isEmpty(graphQLErrors) && isEmpty(networkErrors)) {
//     return {
//       message: ERROR_MESSAGE.SERVER_ERROR,
//       errors: {},
//     };
//   }

//   const errors = isEmpty(graphQLErrors) ? networkErrors : graphQLErrors;
//   const errorCode = get(errors[0], 'extensions.code');
//   const errorData = get(errors[0], 'extensions.data[0].messages', []);
//   if (isEmpty(errorData)) {
//     if (errorCode === 'GRAPHQL_VALIDATION_FAILED') {
//       return {
//         message: 'Something went wrong',
//         errors: {},
//       };
//     }
//     if (errorCode === 'INTERNAL_SERVER_ERROR') {
//       return {
//         message: ERROR_MESSAGE.SERVER_ERROR,
//         errors: {},
//       };
//     }
//     return {
//       message: get(errors[0], 'message') || ERROR_MESSAGE.SERVER_ERROR,
//       errors: {},
//     };
//   }

//   errorMap = errorData.reduce(
//     (
//       acc: Record<string, string>,
//       err: { id: ServerErrorID; message: string }
//     ) => {
//       const definedError = SERVER_ERROR_MAP[err.id];
//       if (definedError) {
//         acc[definedError.field] = definedError.message || err.message;
//       } else {
//         // incase we didn't handle the server error id
//         commonMessages.push(err.message);
//       }
//       return acc;
//     },
//     {}
//   );

//   return {
//     message: commonMessages.join('\n'),
//     errors: errorMap,
//   };
// };
