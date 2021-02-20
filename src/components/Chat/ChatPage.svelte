<!--
Element central du chat.
-->

<script>
    import ChatInput from "./ChatInput.svelte";
    import ChatFrame from "./ChatFrame.svelte";
</script>


<div class="w-full h-full    flex flex-col">
    <div class="flex-grow">
        <ChatFrame />
    </div>

    <div class="my-6">
        <ChatInput />
    </div>
</div>
