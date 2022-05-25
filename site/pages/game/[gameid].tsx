import { useRouter } from "next/router";

import { GameDetailLayout } from "../../components/layout/GameDetailLayout";

export default function GameDetail() {
  const router = useRouter();

  const { gameid } = router.query;

  const gameId = parseGameId(gameid);

  return <GameDetailLayout>{gameid && <p style={{ color: "white" }}>{gameId}</p>}</GameDetailLayout>;
}

function parseGameId(str: unknown) {
  if (typeof str === "string") {
    return str;
  }
  return null;
}
