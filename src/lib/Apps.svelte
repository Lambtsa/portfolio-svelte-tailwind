<script lang="ts">
  // import js from '$assets/images/js.svg';
  import ts from '$assets/images/typescript.svg';
  import figma from '$assets/images/figma.svg';
  import nextjs from '$assets/images/nextjs.svg';
  import graphql from '$assets/images/graphql.svg';
  import nodejs from '$assets/images/nodejs.svg';
  import python from '$assets/images/python.svg';
  import svelte from '$assets/images/svelte.svg';
  import postgreSQL from '$assets/images/postgreSQL.svg';
</script>

<section class="p-12 bg-grey">
  <div class="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="space-y-2">
      <h2 class="text-4xl font-bold text-white">My tech stack</h2>
      <p class="text-subtitle">Here are some of the technologies, languages or applications that I work with on a daily basis.</p>
    </div>
    <div class="lg:col-span-2 col-span-1 flex lg:flex-row flex-col gap-4 justify-center items-center">
      <div class="flex gap-4">
        <img
          height="60px"
          width="60px"
          src={ts}
          alt="typescript" />
        <img
          height="60px"
          width="60px"
          src={figma}
          alt="figma" />
        <img
          height="60px"
          width="60px"
          src={nextjs}
          alt="nextjs" />
        <img
          height="60px"
          width="60px"
          src={graphql}
          alt="graphql" />
      </div>
      <div class="flex gap-4">
        <img
          height="60px"
          width="60px"
          src={nodejs}
          alt="nodejs" />
        <img
          height="60px"
          width="60px"
          src={python}
          alt="python" />
        <img
          height="60px"
          width="60px"
          src={svelte}
          alt="svelte" />
        <img
          height="60px"
          width="60px"
          src={postgreSQL}
          alt="postgreSQL" />
      </div>
    </div>
  </div>
</section>