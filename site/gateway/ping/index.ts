import { sleep } from "../../utils/timing";

export interface PingGateway {
  ping(data: { pong: string }): Promise<{
    message: string;
  }>;
}

export function createMockPingGateway(): PingGateway {
  return {
    async ping(data) {
      await sleep(200);
      return {
        message: `data was ${data.pong}`,
      };
    },
  };
}
