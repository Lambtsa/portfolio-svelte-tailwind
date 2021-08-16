<!-- Scripting -->
<script lang="ts">
  import { onMount } from 'svelte';
  import tom_logo from "$assets/images/tom-lamb.svg"
  // import en_flag from "$assets/images/en.svg"
  // import fr_flag from "$assets/images/fr.svg"

  let is_scrolled = false;

  const handleScrolling = () => {
    // scroll position for navbar colour
    const scrollPos = window.scrollY;
    // navbar scroll logic (colour when scrolled)
    if (scrollPos !== 0) {
      console.log('scrolled');
      is_scrolled = true;
    } else {
      console.log('not scrolled');
      is_scrolled = false;
    }
  };

  onMount(() => {
    window.addEventListener('scroll', handleScrolling);
    return () => {
      window.removeEventListener('scroll', handleScrolling);
    };
  })
  
</script>

<!-- HTML -->
<header class={`w-full appear_ease_in_5s z-50 fixed ${is_scrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'}`}>
  <nav class="flex justify-between md:mx-auto items-center md:max-w-screen-lg w-full px-4">
    <a href="/">
      <img
        height="60px"
        width="60px"
        src={tom_logo}
        alt="Tom Lamb logo lettering" />
    </a>
    <!-- <div class="flex justify-between items-center space-x-2">
      <button on:click={() => console.log('EN clicked')} id="en" type="button">
        <img height="30px" width="30px" src={en_flag} alt="Union Jack icon with rounded corners" />
      </button>
      <button on:click={() => console.log('FR clicked')} id="fr" type="button">
        <img height="30px" width="30px" src={fr_flag} alt="French flag icon with rounded corners" />
      </button>
    </div> -->
    <button class="bg-transparent border border-white font-bold hover:bg-green-400 hover:border-green-400 hover:text-black text-sm px-4 py-2 rounded-lg text-white">
      <a href="mailto:hello@tom-lamb.com">Contact me</a>
    </button>
  </nav>
</header>