<!-- Scripting -->
<script lang="ts">
  import { onMount } from 'svelte';

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
<header class={`z-50 fixed w-full ${is_scrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'}`}>
  <nav class="container mx-auto flex justify-between items-center max-w-screen-lg">
    <a href="/">
      <img
        height="60px"
        width="60px"
        src="$assets/images/tom-lamb.svg"
        alt="Tom Lamb logo lettering" />
    </a>
    <div class="flex justify-between items-center space-x-2">
      <button on:click={() => console.log('EN clicked')} id="en" type="button">
        <img height="30px" width="30px" src="$assets/images/en.svg" alt="Union Jack icon with rounded corners" />
      </button>
      <button on:click={() => console.log('FR clicked')} id="fr" type="button">
        <img height="30px" width="30px" src="$assets/images/fr.svg" alt="French flag icon with rounded corners" />
      </button>
    </div>
  </nav>
</header>