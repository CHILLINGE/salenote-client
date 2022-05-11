import { useState } from "react";

import { useAPI } from "../gateway";

export default function PingPage() {
  const api = useAPI();

  const [message, setMessage] = useState("");

  async function handleClick() {
    const ret = await api.ping.ping({ pong: "hello world!" });

    setMessage(ret.message);
  }

  return (
    <div>
      <button onClick={handleClick}>Go</button>
      <p>{message}</p>
    </div>
  );
}
