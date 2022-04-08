import { ReactNode } from "react";

export interface TestButtonProps {
  children: ReactNode;
}
export function TestButton(props: TestButtonProps) {
  return <button>{props.children}</button>;
}
