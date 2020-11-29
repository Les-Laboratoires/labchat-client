<script lang="ts">
    import Tailwindcss from "../Tailwindcss.svelte";

    let name: string = "Poro";
</script>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>

<Tailwindcss />
<main>
    <h1>Hello {name}!</h1>
    <p>
        Visit the
        <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
        to learn how to build Svelte apps..
    </p>
    <div class="mt-10 text-6xl text-emerald-500">Salut les Poros</div>
</main>
