<script lang="ts">
    import { sames, sleep } from "$lib/utils";

    let count = 0;
    let text = ""
    function neuerCookie() {
        count = count + 1;
    }

    async function warnung(nachricht: string){
        text = nachricht;
        await sleep(2);
        text = ""
    }

    async function kaufeAutoklicker(preis: number, wieOft: number, wait: number){
        if(count < preis){
            warnung("Nicht genug cookies")
        }else{
            count = count - preis;
            let i = 0;
            while(i < wieOft){
                await sleep(wait);
                i = i + 1;
                count = count + 1;
            }
        }
    }

    let zahl1 = -1;
    let zahl2 = -1;
    let zahl3 = -1;

    function randomNumber(bis: number){
        return Math.round(Math.random() * bis)
    }

    function gebeGewinnAus(gewinn: number){
        warnung(`Du hast gewonnen: ${gewinn} cookies`);
        count = count + gewinn;
    }

    async function kaufeLotto(preis: number, bisZahl: number){
        if(count < preis){
            warnung("Nicht genug cookies")
        }else{
            count = count - preis;
            
            let i = 0;
            while(i < 25){
                await sleep(0.1);
                i = i + 1;
                zahl1 = randomNumber(bisZahl);
                zahl2 = randomNumber(bisZahl);
                zahl3 = randomNumber(bisZahl);
            }
            let gleiche = sames([zahl1,zahl2,zahl3]);
            if (gleiche == 3){
                gebeGewinnAus(250);
            }else if(gleiche == 2){
                gebeGewinnAus(3)
            }else if(gleiche == 1){
                gebeGewinnAus(0);
            }
        }
    }
</script>

Cookies: {count} <button onclick={neuerCookie}>cookie</button><br />

<button onclick={()=>kaufeAutoklicker(10, 15, 0.5)}>autoclicker 10</button><br />

<button onclick={()=>kaufeAutoklicker(25, 30, 0.2)}>autoclicker 25</button><br />

<button onclick={()=>kaufeAutoklicker(50, 75, 0.1)}>autoclicker 50</button><br />

<button onclick={()=>kaufeAutoklicker(100, Infinity, 2.0)}>autoclicker Endless 100</button><br />


<button onclick={()=>kaufeLotto(15, 6, )}>lottoschein 30</button><br />
<div class="grid grid-cols-3">
    <span>Zahl1</span>
    <span>Zahl2</span>
    <span>Zahl3</span>
    <div>{zahl1}</div>
    <div>{zahl2}</div>
    <div>{zahl3}</div>
</div>


<br><br>

{text}


<style>
    button{
        @apply bg-gray-300 m-1 px-1 rounded-md shadow-sm border border-black
    }

    .grid{
        @apply text-center
    }
    .grid>div{
        @apply text-red-600
    }
</style>