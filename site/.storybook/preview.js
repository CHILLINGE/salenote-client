import { GlobalStyle } from "../styles/GlobalStyle";
import { APIProvider } from "../gateway/hook";

export const decorators = [
  (Story) => (
    <APIProvider type="mock">
      <GlobalStyle />
      <Story />
    </APIProvider>
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
