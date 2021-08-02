<script lang="ts">
  import en_language from '../languages/en.json';
  const { copyright } = en_language;
</script>

<footer class="p-4 bg-black text-center">
  <p class="text-white text-opacity-40 text-sm">{`© ${new Date().getFullYear()} ${copyright.title}`}</p>
</footer>