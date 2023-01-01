<script lang="ts">
  export let fadeIn: boolean = false;
  import Icon from 'fa-svelte'
  import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<div
  class:appear_ease_in_5s="{ fadeIn }"
  class="w-full md:max-w-screen-lg mx-auto absolute z-1 bottom-4 md:left-auto flex justify-start items-center space-x-2"
>
  <a class="pl-4" target="_blank" rel="noreferrer" href="https://github.com/lambtsa">
    <Icon class="text-3xl text-pink-400 hover:text-pink-600" icon={faGithub} />
  </a>
  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lambtsa-tomlamb/">
    <Icon class="text-3xl text-pink-400 hover:text-pink-600" icon={faLinkedin} />
  </a>
  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/lambtsa/">
    <Icon class="text-3xl text-pink-400 hover:text-pink-600" icon={faInstagram}/>
  </a>
</div>