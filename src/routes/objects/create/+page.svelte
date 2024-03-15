
<script lang="ts">
    import { goto } from '$app/navigation';
	import { toasts } from 'svelte-toasts';
    import Button from "../../../components/Button.svelte";

	let data = {
        name: '',
        description: ''
    };

    const updateObject = async () => {

        const response = await fetch(`http://localhost:5000/objects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if(response.ok) {
            console.log('updated')
            toasts.success('Object created successfully');
            goto(`/objects`);
        } else {
            toasts.error('Error updating object');
        }
    }
</script>

<div class="min-h-screen border flex flex-col"> 
    <div class="m-auto w-1/2 p-10">
        <h1 class="text-4xl mb-2">Create Object</h1>
        <hr/>
        <br/>
        <form class="flex flex-col">
            <label for="name">Name</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={data.name} 
                on:change={
                    (e) => data = {...data, name: e?.target?.value ?? ''}
                } 
                class="border p-2 mb-4 rounded" 
            />

            <label for="description">Description</label>
            <textarea 
                id="description" 
                name="description" 
                class="border p-2 mb-4 rounded"
                value={data.description}
                on:change={
                    (e) => {
                        data = {...data, description: (e?.target)?.value ?? ''}
                    }
                }
            />
        </form>   
        
        <br/>
        <br/>

        <div class="flex gap-x-2 justify-end">
            <Button 
                text="Save" 
                style="submit"
                onclick={updateObject}
            />
        </div>
    </div>
</div>