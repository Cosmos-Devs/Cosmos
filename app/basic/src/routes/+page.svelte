<script lang="ts">
  import Blog from "../templates/Blog.svelte";

  export let data: {
    content: {
      map: (
        arg0: ({
          key,
          data
        }: {
          key: string;
          data: { [key: string]: any };
        }) => (string | { [key: string]: any })[]
      ) => Iterable<readonly [PropertyKey, any]>;
    };
  }[] = [];
  $: blocks =
    Object.fromEntries(
      data?.[0]?.content?.map(
        ({
          key,
          data
        }: {
          key: string;
          data: {
            [key: string]: any;
          };
        }) => [key, data]
      )
    ) || {};
</script>

<Blog {blocks} />
