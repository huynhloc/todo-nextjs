jest.mock('next/config', () => () => {
  return {
    publicRuntimeConfig: {
      NODE_ENV: 'Jest',
      API_ENDPOINT: 'http://localhost:8000/graphql',
    },
  };
});
