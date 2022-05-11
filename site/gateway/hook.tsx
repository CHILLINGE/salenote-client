import { createContext, ReactNode, useContext, useState } from "react";

import { createAPIGateway } from "./factory";

const APIGatewayContext = createContext({
  gateway: createAPIGateway(),
});

interface APIProviderProps {
  children: ReactNode;
}

export function APIProvider(props: APIProviderProps) {
  const [ctx] = useState(() => ({
    gateway: createAPIGateway(),
  }));

  return <APIGatewayContext.Provider value={ctx}>{props.children}</APIGatewayContext.Provider>;
}

export function useAPI() {
  const { gateway } = useContext(APIGatewayContext);

  return gateway;
}
