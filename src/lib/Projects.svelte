<script lang="ts">
  import ubiquiti from '$assets/images/ubiquiti.svg';
  import currency from '$assets/images/currency.svg';
  import charlie from '$assets/images/charlie.svg';
  import tradegard from '$assets/images/tradegard.svg';

</script>

<section class="bg-grey py-12 text-center px-4">
  <div class="space-y-2 mb-8">
    <h2 class="text-center text-4xl font-bold text-purple-500 inline px-4">My projects</h2>
    <p class="text-subtitle max-w-screen-sm mx-auto">Here are just a few of the apps I have worked on in the recent past.</p>
  </div>
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg">
    <a target="_blank" rel="noreferrer" href="https://ui-tasks.netlify.app/" class="p-8 flex flex-col items-center text-center space-y-2 rounded-2xl hover:bg-white hover:bg-opacity-20">
      <img
        height="60px"
        width="60px"
        class="mb-2"
        src={ubiquiti}
        alt="" />
      <h3 class="text-white text-xl font-bold">Reminders App</h3>
      <p class="text-subtitle">A Reminders app allowing users to add, edit and collaborate on tasks in realtime. Built with ReactJS, Typescript, Socket.io and Beautiful dnd on the client side and ExpressJS, Typescript, Socket.io and MongoDB on the server side.</p>
    </a>
    <a target="_blank" rel="noreferrer" href="https://lambtsa.github.io/currency-app-react/" class="p-8 flex flex-col items-center text-center space-y-2 rounded-2xl hover:bg-white hover:bg-opacity-20">
      <img
        height="60px"
        width="60px"
        class="mb-2"
        src={currency}
        alt="" />
      <h3 class="text-white text-xl font-bold">Currency App</h3>
      <p class="text-subtitle">An app to receive updates on the main world currencies including the main cryptocurrencies. Built with ReactJS, ExpressJS and MongoDB and deployed on Github pages (client side) and Heroku (server side).</p>
    </a>
    <a target="_blank" rel="noreferrer" href="https://charlies-closet.com/" class="p-8 flex flex-col items-center text-center space-y-2 rounded-2xl hover:bg-white hover:bg-opacity-20">
      <img
        height="60px"
        width="60px"
        class="mb-2"
        src={charlie}
        alt="" />
      <h3 class="text-white text-xl font-bold">Charlie&apos;s Closet</h3>
      <p class="text-subtitle">An app for parents in France to be able to rent second hand baby clothes during the first months of their babies lives. This circular economy app is built in ReactJS, Typescript on the client side and ExpressJS, MongoDB and Typescript on the server side.</p>
    </a>
    <a target="_blank" rel="noreferrer" href="https://tradegard.netlify.app/" class="p-8 flex flex-col items-center text-center space-y-2 rounded-2xl hover:bg-white hover:bg-opacity-20">
      <img
        height="60px"
        width="60px"
        class="mb-2"
        src={tradegard}
        alt="" />
      <h3 class="text-white text-xl font-bold">Tradegård App</h3>
      <p class="text-subtitle">An app where users can trade items with each other. Made in 9 days, this full-stack application includes user sign-up and authentication, an interface for creating new items and uploading images, as well a matching feature which informs the users of mutual trading interests.</p>
    </a>
  </div>
</section>