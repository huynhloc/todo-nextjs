This is a [Next.js](https://nextjs.org/) project

## Getting Started

First, run the development server:

```bash
  yarn install
  yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Type checking

```bash
  yarn eslint:check
```

## Testing

This project using [Jest](https://jestjs.io/docs/en/getting-started) for testing

```bash
  yarn test
```

## Convention

#### Git

Branch and commit will be based on `STORY TYPE`
The following story type are:

```bash
  + feat: A new feature
  + fix: Fix a bug
  + chore: Change to the build process or auxiliary tools
  + doc: Update document
```

- Checkout branch: `#{StoryType}/#{TicketID}-#{TicketName}`
  ex: `chore/12345678-setup-environment`
- Commit message: `[#{TicketId}] (#{CommitterName}) #{StoryType}/#{Message}`
  ex: `[12345678] (lochuynh) Chore/Setup environment`

#### Import order

Please use the following import order:

1. 3rd party library
2. Additional resource such as Util, Type, Constant, Container,...
3. Outside folder component `src/components/**`
4. Inside folder component `./**.tsx`
5. Styling

#### Pages folder structure

```bash
pages
|
|--> page-name (example: about)
      |
      |--> index.tsx (for main page `/about`)
      |
      |--> sub-page-name (for sub page `/about/sub-page`)
```

#### SVG clear

In order to have good svg that can go with Sass class option the svg need to be re-formatted by `svgo` .
The out put will be `svg-file-name.svg.optimized.svg` and `svg-file-name.svg.jsx`

Steps to create optimized-svg:

1. Make directory name `svg-images` inside folder `/scripts/svg-clean/` (Please do not commit this file)
2. Run command `yarn svg:clean --prefix=${svg-id-name}` (`svg-id-name` is required. You can pass any string you wanted)
3. You can see the output in folder `svg-images`
4. If you want to use sgv file as SVG component, copy the `svg-file-name.svg.optimized.svg` (then rename as you wanted) to your icon folder `src/assets/icons`.
5. If you want to use it as normal JSX, copy `svg-file-name.svg.jsx` to your components folder (then rename as you wanted).
6. Remove all file in `svg-images` folder before re-format other svg.

Example of using optimize svg:

```javascript
// index.tsx
import React from 'react';
import Icon from 'assets/icons/icon.svg'; // svg-file-name.svg.optimized.svg after rename
import css from './index.scss';

const ComponentWithIcon = () => (
  <Icon width={30} height={30} className={css['icon']} />
);
export default ComponentWithIcon;
```

```css
// index.scss
// @Note: If you want to change svg scss color you need to go inside svg image file, edit fill="${some-color}" in <path> to fill="currentColor"
// By default if the fill is currentColor the svg will get the color from scss class

.icon {
  color: 'red';
  &:hover {
    color: 'green';
  }
}
```

#### Graphql auto generated typescript

[graphql-codegen](https://graphql-code-generator.com/docs/getting-started/) is responsible for graphql type script generated.

- Code generator can be config in codegen.yml.<br/>
- All generated types are in `src/types/generatedGraphql.ts`. Please **DO NOT ADD** anything by yourself in this file. Everything will be overridden by `graphql-codegen`.<br/>
- By default, while running `yarn dev` code generator will automatically watch for schema changes and update `src/types/generatedGraphql.ts` file. You do not need to do anything<br/>
- In order to manually run code-gen, run `yarn generate:graphql`.
- Preference using typescript with.

#### TypeDefs and local state

- All typeDefs muse be put in `src/typeDefs/clientSchema.ts`.<br>
- Graphql code generator will automatically generate and merge both sever and client schema together.<br>
- In order to call query from local state we will use tag `@client`. For example:

```javascript
import gql from 'graphql-tag';

export const GET_TYPE_DEF = gql`
  query getTypeDefTesting {
    getTypeDefTesting @client {
      typeDef
    }
  }
`;
```

- You can [read more](https://www.apollographql.com/docs/react/data/local-state/) about local state and typeDefs here
