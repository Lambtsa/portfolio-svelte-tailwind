<script lang="ts">
  import en_language from '../languages/en.json';
  const { skills } = en_language;
</script>

<section class="p-12 bg-grey text-center">
  <div class="space-y-2 mb-12">
    <h2 class="text-3xl font-bold text-yellow-400">{skills.skillsTitle}</h2>
    <p class="text-subtitle max-w-screen-sm mx-auto">{skills.skillsSubtitle}</p>
  </div>
  <div class="max-w-screen-lg mx-auto grid grid-cols-3 gap-4">
    <div class="flex flex-col gap-4 items-center p-4">
      <img
        height="60px"
        width="60px"
        src="/assets/icons/product_management.svg"
        class=""
        alt="" />
      <h3 class="text-yellow-400 text-xl font-bold">{skills.skillCards.skill1.skillTitle1}</h3>
      <p class="text-subtitle">{skills.skillCards.skill1.skillText1}</p>
    </div>
    <div class="flex flex-col gap-4 items-center p-4">
      <img
        height="60px"
        width="60px"
        src="/assets/icons/web_development.svg"
        class=""
        alt="" />
      <h3 class="text-yellow-400 text-xl font-bold">{skills.skillCards.skill2.skillTitle2}</h3>
      <p class="text-subtitle">{skills.skillCards.skill2.skillText2 }</p>
    </div>
    <div class="flex flex-col gap-4 items-center p-4">
      <img
        height="60px"
        width="60px"
        src="/assets/icons/web_design.svg"
        class=""
        alt="" />
      <h3 class="text-yellow-400 text-xl font-bold">{skills.skillCards.skill3.skillTitle3}</h3>
      <p class="text-subtitle">{skills.skillCards.skill3.skillText3}</p>
    </div>
  </div>
</section>