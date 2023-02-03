import type Service from "./lib/services";
import type { SvelteComponentTyped } from "svelte";

export interface BlockProps {
  [key: string]:
    | string
    | {
        type: string;
        label?: string;
        fallback?: string;
      };
}
export interface BlockConfig {
  name: string;
  props: BlockProps;
}

// add static false mode, extra field blocks
export interface Template {
  name: string;
  static: true;
  layout: (new <T extends Record<string, unknown>>(args: {
    target: unknown;
    props?: T;
  }) => SvelteComponentTyped<T>)[];
}

export interface AdminConfig {
  service: Service; //create CustomService in future
  register: {
    templates: {
      [key: string]: Template;
    };
  };
}

export interface ServiceItem {
  content: unknown;
  title: string;
  slug: string;
  id: string;
}
export interface ServiceMedia {
  src: string;
  alt: string;
}

export type BlockExport = { label: string } & (
  | { type: "string"; value: string }
  | { type: "image"; value: { src: string; alt: string } }
);
