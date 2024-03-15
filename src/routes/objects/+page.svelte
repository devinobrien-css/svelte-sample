
<script>
	import { writable } from 'svelte/store';
    
    /** @type {import('./$types').PageData} */
    export let data = {
        objects: [],
    };
</script>

<div class="min-h-screen border flex flex-col"> 
    <div class="m-auto w-1/2 p-10">
        <h1 class="text-4xl mb-2">List Objects</h1>
        <hr/>
        {#if !data.objects}
            <div class="my-16 w-full">
                <svg class="mx-auto size-16" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                        <path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity="0.3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">
                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0" />
                        </path>
                        <path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12">
                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
                            <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                        </path>
                    </g>
                </svg>
            </div>
        {:else if data.objects?.length > 0}
            {#each data.objects as object}
                <a 
                    class={
                        `block p-2 border-b hover:bg-gray-200 transition-all`
                    }
                    href={`/objects/edit/${object.id}`}>
                    {object.name}
                </a>
            {/each}
        {:else if data.objects?.length === 0}
            <p>No objects found</p>
        {/if}
    </div>
</div>
