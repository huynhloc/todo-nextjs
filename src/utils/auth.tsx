// import { NextPageContext } from 'next';
// import Router from 'next/router';
// import nextCookie from 'next-cookies';
// import cookie from 'js-cookie';
// import ApolloClient from 'apollo-client';
// import { ROUTES } from 'constants/routes';
// import { TOKEN_KEY, LOGOUT_KEY } from 'constants/storageKeys';
// import { defaults } from 'typeDefs';

// const DEFAULT_EXPIRES = 30;

// type GetUserInfoType = { user?: UserInfoType } & Record<
//   string,
//   string | object | undefined
// >;
// export const getUserInfo: (ctx?: NextPageContext) => GetUserInfoType = (
//   ctx?: NextPageContext
// ) => nextCookie(ctx || {});

// export const login = ({
//   token,
//   expires,
// }: {
//   token: string;
//   expires?: number;
// }) => {
//   cookie.set(TOKEN_KEY, token, {
//     expires: expires ? expires : DEFAULT_EXPIRES,
//   });
// };

// export const logout = async (apolloClient?: ApolloClient<{}>) => {
//   cookie.remove(TOKEN_KEY);
//   // to support logging out from all windows
//   window.localStorage.setItem(LOGOUT_KEY, Date.now().toString());
//   if (apolloClient) {
//     await apolloClient.clearStore();
//     apolloClient.writeData({
//       data: {
//         ...defaults,
//       },
//     });
//   }
//   Router.push(ROUTES.SIGN_IN);
// };
