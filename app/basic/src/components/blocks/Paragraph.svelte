<script lang="ts">
  import { configBlock } from "@cosmos-devs/cms";

  configBlock("Paragraph", {
    title: {
      type: "string",
      label: "Titel",
      fallback: "This is a title"
    },
    text: "string"
  });

  export let title = "-";
  export let text = "-";
</script>

<section>
  <h2>{title}</h2>
  <p>{text}</p>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    height: 200px;
    justify-content: center;
  }

  h2 {
    font-size: 32px;
    font-weight: bold;
  }
  p {
    color: gray;
  }
</style>
