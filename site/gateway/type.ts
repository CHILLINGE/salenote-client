import { GameGateway } from "./gameInfo/type";
import { PingGateway } from "./ping";

export interface APIGateway {
  ping: PingGateway;
  game: GameGateway;
}
