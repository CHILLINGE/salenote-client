import { createMockGameGateway } from "./gameInfo/mock";
import { createMockPingGateway } from "./ping";
import { createMockSearchGateway } from "./search";
import { APIGateway } from "./type";

export function createAPIGateway(): APIGateway {
  const ping = createMockPingGateway();
  const game = createMockGameGateway();
  const search = createMockSearchGateway();

  return {
    ping,
    game,
    search,
  };
}
