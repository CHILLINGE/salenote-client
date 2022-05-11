import { createMockGameGateway } from "./gameInfo/mock";
import { createMockPingGateway } from "./ping";
import { APIGateway } from "./type";

export function createAPIGateway(): APIGateway {
  const ping = createMockPingGateway();
  const game = createMockGameGateway();

  return {
    ping,
    game,
  };
}
