import { getContext } from "svelte";
import type { BlockProps } from "../types";

export function configBlock(name: string, props: BlockProps = {}) {
  const config = getContext<undefined | { set: (data: unknown) => void }>(
    "configBlock"
  );
  if (!config || typeof config?.set !== "function") return;

  config?.set({
    name,
    props,
  });
}
