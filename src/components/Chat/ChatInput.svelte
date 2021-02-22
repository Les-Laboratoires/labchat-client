<!--
Contient un input text.
Contient un emoji/gif picker et un embed maker.
-->
<script lang="ts">
  let message: string = ""
</script>

<div class="px-6 w-full">
  <div
    class="w-full    bg-gray-500    rounded-lg     shadow-lg   flex items-center">
    <div class="mx-3"> </div>
    <input
      aria-label="Send a message"
      aria-multiline="true"
      spellcheck="true"
      class="py-3     rounded-lg    bg-gray-500    text-gray-50    flex-grow  focus:outline-none  break-words whitespace-pre-wrap leading-relaxed align-middle"
      bind:value={message}
      type="text"
      style="line-height: 0.5rem"/>
    <div class="flex"> </div>
  </div>
</div>
