
<script>
    import { goto } from '$app/navigation';
	import { toasts } from 'svelte-toasts';
    import Button from "../../../../components/Button.svelte";

	/** @type {import('./$types').PageData} */
	export let data;

    const updateObject = async () => {
        const name = data.name;
        const description = data.description;

        const response = await fetch(`http://localhost:5000/objects/${data.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, description })
        });

        if(response.ok) {
            console.log('updated')
            toasts.success('Object updated successfully');
        } else {
            toasts.error('Error updating object');
        }
    }

    const deleteObject = async () => {
        const response = await fetch(`http://localhost:5000/objects/${data.id}`, {
            method: 'DELETE'
        });

        if(response.ok) {
            console.log('deleted')
            toasts.success('Object deleted successfully');
            goto(`/objects`);
        } else {
            toasts.error('Error deleting object');
        }
    }
</script>

<div class="min-h-screen border flex flex-col"> 
    <div class="m-auto w-1/2 p-10">
        <Button 
            text="Back" 
            style="neutral"
            onclick={() => goto(`/objects`)}
        />

        <br/>
        <br/>
        
        <h1 class="text-4xl">edit by id: {data.id}</h1>

        <hr class="my-2"/>

        <form class="flex flex-col">
            <label for="name">name</label>
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

            <label for="description">description</label>
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
            <Button 
                text="Delete" 
                style="danger"
                onclick={deleteObject}
            />
        </div>
    </div>
</div>
