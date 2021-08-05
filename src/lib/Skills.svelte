<script lang="ts">
  import product_management from '$assets/images/product_management.svg';
  import web_development from '$assets/images/web_development.svg';
  import web_design from '$assets/images/web_design.svg';
</script>

<section class="p-12 bg-grey text-center">
  <div class="space-y-2 mb-12">
    <h2 class="text-4xl font-bold text-yellow-400">My Key Skills</h2>
    <p class="text-subtitle max-w-screen-sm mx-auto">Through many years of experience in business management, product management and web development, I have developed key skills during my career.</p>
  </div>
  <div class="max-w-screen-lg mx-auto grid grid-cols-3 gap-4">
    <div class="flex flex-col gap-4 items-center p-4">
      <img
        height="60px"
        width="60px"
        src={product_management}
        class=""
        alt="" />
      <h3 class="text-yellow-400 text-xl font-bold">Product Management</h3>
      <p class="text-subtitle">By constantly optimising internal processes and striving for a big picture of the product and its objectives, I manage my products by having a clear overview of all the moving pieces in order to maintain agility and speed to market.</p>
    </div>
    <div class="flex flex-col gap-4 items-center p-4">
      <img
        height="60px"
        width="60px"
        src={web_development}
        class=""
        alt="" />
      <h3 class="text-yellow-400 text-xl font-bold">Full Stack development</h3>
      <p class="text-subtitle">From SQL or Mongo DB databases to websites like this one built in Svelte, I can build full stack applications in javascript to bring best practice solutions to businesses and entrepreneurs.</p>
    </div>
    <div class="flex flex-col gap-4 items-center p-4">
      <img
        height="60px"
        width="60px"
        src={web_design}
        class=""
        alt="" />
      <h3 class="text-yellow-400 text-xl font-bold">UX/UI and web design</h3>
      <p class="text-subtitle">With a keen interest in human psychology and its effects on UX and a strong belief in user centered design, I push to implement clean and efficient design in my products, based on a fine balance between intuition, innovation and user feedback.</p>
    </div>
  </div>
</section>