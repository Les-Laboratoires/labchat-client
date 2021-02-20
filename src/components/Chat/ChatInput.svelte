<!--
Contient un input text.
Contient un emoji/gif picker et un embed maker.
-->
<script lang="ts">
    let message: string = "";
</script>

<div class="px-6 w-full">
    <div class="w-full    bg-gray-500    rounded-lg border border-2 border-gray-50    flex items-center">

        <div class="mx-3"></div>
        <input aria-label="Send a message" class="py-2    rounded-lg    bg-gray-500    text-gray-50    flex-grow  focus:outline-none"
               bind:value={message} type="text">
        <div class="flex"></div>

    </div>
</div>