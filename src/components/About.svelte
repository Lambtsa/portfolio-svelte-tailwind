<script lang="ts">
  import en_language from '../languages/en.json';
  const { aboutMe } = en_language;
  import profile from '/assets/IMG_3377.webp'
</script>

<section class="bg-about bg-cover bg-center">
  <div class="container mx-auto grid grid-cols-2">
    <img
      class="block justify-self-center"
      width="400px"
      height="600px"
      src={profile}
      alt="Tom Lamb in a dark t shirt and a flat cap" />
    <div class="flex flex-col justify-center space-y-2">
      <h2 class="text-4xl font-bold text-yellow-400">{aboutMe.aboutMeTitle}</h2>
      <p class="text-subtitle font-light">{aboutMe.aboutMeParagraph1}</p>
      <p class="text-subtitle font-light">{aboutMe.aboutMeParagraph2}</p>
      <p class="text-subtitle font-light">{aboutMe.aboutMeParagraph3}</p>
      <p class="text-subtitle font-light">{aboutMe.aboutMeParagraph4}</p>
    </div>
  </div>
</section>