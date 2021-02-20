<script lang="ts">
    import Tailwindcss from "../Tailwindcss.svelte";
    import GuildLinkList from "../components/GuildLinkList.svelte";
    import ChannelList from "../components/ChannelList.svelte";
    import ChatPage from "../components/Chat/ChatPage.svelte";
    import MemberList from "../components/MemberList.svelte";

    let name: string = "Poro";
</script>

<style>
</style>

<Tailwindcss/>
<main class="bg-gray-600  bg-green-800  w-full h-full    flex">
    <div>
        <GuildLinkList/>
    </div>
    <div>
        <ChannelList/>
    </div>
    <div class="flex-grow">
        <ChatPage/>
    </div>
    <div>
        <MemberList/>
    </div>
</main>
