import { createMockPingGateway } from "./ping";
import { APIGateway } from "./type";

export function createAPIGateway(): APIGateway {
  const ping = createMockPingGateway();

  return {
    ping,
  };
}
