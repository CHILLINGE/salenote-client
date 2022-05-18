import { GlobalStyle } from "../styles/GlobalStyle";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "white",
        value: "#FFFFFF",
      },
      {
        name: "dark",
        value: "#1A1D42",
      },
    ],
  },
};
