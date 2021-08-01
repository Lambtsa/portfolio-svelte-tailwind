<script lang="ts">
  import en_language from '../languages/en.json';
  import currency from '/assets/currency.svg';
  import ubiquiti from '/assets/ubiquiti.svg';
  import charlie from '/assets/charlie.svg';
  import tradegard from '/assets/tradegard.svg';
  const { projects } = en_language;
</script>

<section class="bg-grey p-12">
  <h2 class="text-center text-3xl font-bold text-yellow-400 mb-8">{projects.projectsTitle}</h2>
  <div class="container mx-auto grid grid-cols-2 gap-4 max-w-screen-lg">
    <a target="_blank" rel="noreferrer" href="https://ui-tasks.netlify.app/" class="p-8 flex flex-col items-center text-center space-y-2 rounded-2xl hover:bg-white hover:bg-opacity-20">
      <img
        height="60px"
        width="60px"
        class="mb-2"
        src={ubiquiti}
        alt="" />
      <h3 class="text-white text-xl font-bold">Reminders App</h3>
      <p class="text-subtitle">{projects.project1}</p>
    </a>
    <a target="_blank" rel="noreferrer" href="https://lambtsa.github.io/currency-app-react/" class="p-8 flex flex-col items-center text-center space-y-2 rounded-2xl hover:bg-white hover:bg-opacity-20">
      <img
        height="60px"
        width="60px"
        class="mb-2"
        src={currency}
        alt="" />
      <h3 class="text-white text-xl font-bold">Currency App</h3>
      <p class="text-subtitle">{projects.project2}</p>
    </a>
    <a target="_blank" rel="noreferrer" href="https://charlies-closet.com/" class="p-8 flex flex-col items-center text-center space-y-2 rounded-2xl hover:bg-white hover:bg-opacity-20">
      <img
        height="60px"
        width="60px"
        class="mb-2"
        src={charlie}
        alt="" />
      <h3 class="text-white text-xl font-bold">Charlie&apos;s Closet</h3>
      <p class="text-subtitle">{projects.project3}</p>
    </a>
    <a target="_blank" rel="noreferrer" href="https://tradegard.netlify.app/" class="p-8 flex flex-col items-center text-center space-y-2 rounded-2xl hover:bg-white hover:bg-opacity-20">
      <img
        height="60px"
        width="60px"
        class="mb-2"
        src={tradegard}
        alt="" />
      <h3 class="text-white text-xl font-bold">Tradegård App</h3>
      <p class="text-subtitle">{projects.project4}</p>
    </a>
  </div>
</section>