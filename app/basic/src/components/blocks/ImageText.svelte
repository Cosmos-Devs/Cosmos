<script lang="ts">
  import { configBlock } from "@cosmos-devs/cms";

  configBlock("Image and Text", {
    title: "string",
    text: "string",
    image: "image"
  });

  export let title = "-";
  export let text = "-";
  export let image = {
    src: "",
    alt: "-"
  };
</script>

<section>
  <img src={image?.src} alt={image?.alt} />

  <div>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    justify-content: center;
    gap: 20px;
  }
  section > div {
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
  }
  img {
    height: 200px;
  }

  h2 {
    font-size: 32px;
    font-weight: bold;
  }
  p {
    color: gray;
  }
</style>

