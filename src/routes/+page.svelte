<script lang="ts">
    import { sames, sleep } from "$lib/utils";

    let count = 0;
    let text = "";
    function neuerCookie() {
        count = count + 1;
    }

    async function warnung(nachricht: string) {
        text = nachricht;
        await sleep(2);
        text = "";
    }

    async function kaufeAutoklicker(preis: number, wieOft: number, wait: number) {
        if (count < preis) {
            warnung("Nicht genug cookies");
        } else {
            count = count - preis;
            let i = 0;
            while (i < wieOft) {
                await sleep(wait);
                i = i + 1;
                count = count + 1;
            }
        }
    }

    let zahl1 = -1;
    let zahl2 = -1;
    let zahl3 = -1;

    function randomNumber(bis: number) {
        return Math.round(Math.random() * bis);
    }

    function gebeGewinnAus(gewinn: number) {
        warnung(`Du hast gewonnen: ${gewinn} cookies`);
        count = count + gewinn;
    }

    async function kaufeLotto(preis: number, bisZahl: number) {
        if (count < preis) {
            warnung("Nicht genug cookies");
        } else {
            count = count - preis;

            let i = 0;
            while (i < 25) {
                await sleep(0.1);
                i = i + 1;
                zahl1 = randomNumber(bisZahl);
                zahl2 = randomNumber(bisZahl);
                zahl3 = randomNumber(bisZahl);
            }
            let gleiche = sames([zahl1, zahl2, zahl3]);
            if (gleiche == 3) {
                gebeGewinnAus(250);
            } else if (gleiche == 2) {
                gebeGewinnAus(3);
            } else if (gleiche == 1) {
                gebeGewinnAus(0);
            }
        }
    }
</script>

<div class="grid grid-cols-1 gap-5 p-5">
    <div class="grid grid-cols-3">
        <span>Cookies: {count}</span> <button onclick={neuerCookie}>🍪</button>
    </div>

    <div class="grid grid-cols-4 gap-2">
        <button onclick={() => kaufeAutoklicker(10, 15, 0.5)}>autoclicker 10</button>

        <button onclick={() => kaufeAutoklicker(25, 30, 0.2)}>autoclicker 25</button>

        <button onclick={() => kaufeAutoklicker(50, 75, 0.1)}>autoclicker 50</button>

        <button onclick={() => kaufeAutoklicker(100, Infinity, 2.0)}
            >autoclicker Endless 100</button
        >

        <button onclick={() => kaufeAutoklicker(1500, Infinity, 1.0)}
            >autoclicker Endless 1500</button
        >

        <button onclick={() => kaufeAutoklicker(30000, Infinity, 0.5)}
            >autoclicker Endless 30K</button
        >

        <button onclick={() => kaufeAutoklicker(90000, Infinity, 0.1)}
            >autoclicker Endless 90K</button
        >

        <button onclick={() => kaufeAutoklicker(1000000, Infinity, 0.01)}
            >autoclicker Endless 1M</button
        >
    </div>

    <button onclick={() => kaufeLotto(30, 6)}>lottoschein 30</button>

    <div class="grid grid-cols-3">
        <span>Zahl1</span>
        <span>Zahl2</span>
        <span>Zahl3</span>
        <div>{zahl1}</div>
        <div>{zahl2}</div>
        <div>{zahl3}</div>
    </div>
</div>

<br /><br />

{text}

<style>
    button {
        @apply bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded;
    }

    :global(body){
        @apply bg-yellow-600
    
    }
    span {
        @apply text-white
    }
</style>

