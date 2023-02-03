import type { Template } from "@cosmos-devs/cms";
import ImageText from "../components/blocks/ImageText.svelte";
import Paragraph from "../components/blocks/Paragraph.svelte";

export default {
  blog: {
    name: "Post",
    static: true,
    layout: [Paragraph, ImageText]
  }
} as {
  [key: string]: Template;
};
