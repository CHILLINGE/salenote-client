import { GameGateway } from "./gameInfo/type";
import { PingGateway } from "./ping";
import { SearchGateway } from "./search";

export interface APIGateway {
  ping: PingGateway;
  game: GameGateway;
  search: SearchGateway;
}
