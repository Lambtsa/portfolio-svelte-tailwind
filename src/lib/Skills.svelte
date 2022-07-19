<script lang="ts">
  import product_management from '$assets/images/product_management.svg';
  import web_development from '$assets/images/web_development.svg';
  import web_design from '$assets/images/web_design.svg';
</script>

<section class="py-12 bg-grey text-center px-4">
  <div class="space-y-2 mb-12 max-w-screen-lg mx-auto">
    <h2 class="text-4xl font-bold text-blue-600 inline px-4">My Key Skills</h2>
    <p class="text-subtitle max-w-screen-sm mx-auto">Through many years of experience in business management, product management and web development, I have developed key skills during my career.</p>
  </div>
  <div class="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="flex flex-col gap-4 items-center p-4">
      <img
        height="60px"
        width="60px"
        src={web_development}
        class=""
        alt="" />
      <h3 class="text-pink-400 text-xl font-bold px-4">Full Stack development</h3>
      <p class="text-subtitle">From databases to websites like this one built in Svelte, I love building full stack applications in typescript where I can design the whole architecture and also a beautiful client side app.</p>
    </div>
    <div class="flex flex-col gap-4 items-center p-4">
      <img
        height="60px"
        width="60px"
        src={product_management}
        class=""
        alt="" />
      <h3 class="text-pink-400 text-xl font-bold px-4">Product Management</h3>
      <p class="text-subtitle">By constantly optimising internal processes and ensuring we always have a big picture of the product and its objectives, I drive my teams by having a clear overview of all the moving pieces in order to maintain agility and productivity.</p>
    </div>
    <div class="flex flex-col gap-4 items-center p-4">
      <img
        height="60px"
        width="60px"
        src={web_design}
        class=""
        alt="" />
      <h3 class="text-pink-400 text-xl font-bold px-4">UX/UI and web design</h3>
      <p class="text-subtitle">With a keen interest in human psychology and its effects on UX and a strong belief in user centered design, I push to implement clean and efficient design, based on a fine balance between intuition, innovation and user feedback.</p>
    </div>
  </div>
</section>