<script lang="ts">
  import Icon from 'fa-svelte'
  import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="container max-w-screen-lg mx-auto absolute z-1 bottom-4 left-4 md:left-auto flex justify-start items-center space-x-2">
  <a target="_blank" rel="noreferrer" href="https://github.com/lambtsa">
    <Icon class="text-3xl text-yellow-400 hover:text-yellow-500" icon={faGithub} />
  </a>
  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lambtsa-tomlamb/">
    <Icon class="text-3xl text-yellow-400 hover:text-yellow-500" icon={faLinkedin} />
  </a>
  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/lambtsa/">
    <Icon class="text-3xl text-yellow-400 hover:text-yellow-500" icon={faInstagram}/>
  </a>
</div>