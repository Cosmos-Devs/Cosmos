<script lang="ts">
  import ImageText from "../components/blocks/ImageText.svelte";
  import Paragraph from "../components/blocks/Paragraph.svelte";

  export let blocks: {
    [x: string]:
      | {
          title?: string | undefined;
          text?: string | undefined;
          image?: { src: string; alt: string } | undefined;
        }
      | undefined;
  };
</script>

<div>
  <Paragraph {...blocks?.["paragraph"]} />
  <ImageText {...blocks?.["Image and Text"]} />
</div>
