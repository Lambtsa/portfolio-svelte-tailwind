<!-- Scripting -->
<script>
  import { onMount } from 'svelte';
  import fr_flag from '/assets/fr.svg';
  import en_flag from '/assets/en.svg';
  import logo from '/assets/tom-lamb.svg';

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
        src={logo}
        alt="Tom Lamb logo lettering" />
    </a>
    <div class="flex justify-between items-center space-x-2">
      <button on:click={() => console.log('EN clicked')} id="en" type="button">
        <img height="30px" width="30px" src={en_flag} alt="Union Jack icon with rounded corners" />
      </button>
      <button on:click={() => console.log('FR clicked')} id="fr" type="button">
        <img height="30px" width="30px" src={fr_flag} alt="French flag icon with rounded corners" />
      </button>
    </div>
  </nav>
</header>