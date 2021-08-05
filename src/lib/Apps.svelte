<script lang="ts">
  import js from '$assets/images/js.svg';
  import figma from '$assets/images/figma.svg';
  import react from '$assets/images/react.svg';
  import sass from '$assets/images/sass.svg';
  import nodejs from '$assets/images/nodejs.svg';
  import python from '$assets/images/python.svg';
  import svelte from '$assets/images/svelte.svg';
  import html5 from '$assets/images/html5.svg';
</script>

<section class="p-12 bg-grey">
  <div class="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="space-y-2">
      <h2 class="text-4xl font-bold text-white">My tech stack</h2>
      <p class="text-subtitle">Here are some of the technologies, languages or applications that i work with on a daily basis.</p>
    </div>
    <div class="lg:col-span-2 col-span-1 flex lg:flex-row flex-col gap-4 justify-center items-center">
      <div class="flex gap-4">
        <img
          height="60px"
          width="60px"
          src={js}
          alt="" />
        <img
          height="60px"
          width="60px"
          src={figma}
          alt="" />
        <img
          height="60px"
          width="60px"
          src={react}
          alt="" />
        <img
          height="60px"
          width="60px"
          src={sass}
          alt="" />
      </div>
      <div class="flex gap-4">
        <img
          height="60px"
          width="60px"
          src={nodejs}
          alt="" />
        <img
          height="60px"
          width="60px"
          src={python}
          alt="" />
        <img
          height="60px"
          width="60px"
          src={svelte}
          alt="" />
        <img
          height="60px"
          width="60px"
          src={html5}
          alt="" />
      </div>
    </div>
  </div>
</section>