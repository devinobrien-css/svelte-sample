

<script lang="ts">
    export let style = ''
    export let onclick = () => {}
    export let text = ''

    const getStyle = () => {
        if(style === 'submit') {
            return 'bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded active:ring-2 active:ring-blue-300 transition-all hover:text-blue-400'
        } else if(style === 'danger') {
            return 'bg-red-400 hover:bg-red-100 hover:text-red-200 text-white font-bold py-2 px-4 rounded active:ring-2 active:ring-red-300 transition-all hover:text-red-400'
        } else if(style === 'warning') {
            return 'bg-yellow-400 hover:bg-yellow-100 hover:text-yellow-200 text-white font-bold py-2 px-4 rounded active:ring-2 active:ring-yellow-300 transition-all'
        } else if(style === 'success') {
            return 'bg-green-400 hover:bg-green-100 hover:text-green-200 text-white font-bold py-2 px-4 rounded active:ring-2 active:ring-green-300 transition-all'
        } else if(style === 'link') {
            return 'text-blue-400 hover:text-blue-100 font-bold py-2 px-4 rounded active:ring-2 active:ring-blue-300 transition-all'
        } else if(style === 'outline') {
            return 'border border-blue-400 text-blue-400 hover:bg-blue-100 hover:text-blue-300 font-bold py-2 px-4 rounded active:ring-2 active:ring-blue-300 transition-all'
        } else if(style === 'clear') {
            return 'text-blue-400 hover:bg-blue-100 hover:text-blue-300 font-bold py-2 px-4 rounded active:ring-2 active:ring-blue-300 transition-all'
        } else if(style === 'disabled') {
            return 'bg-gray-400 text-gray-100 font-bold py-2 px-4 rounded active:ring-2 active:ring-gray-300 transition-all'
        } else if (style === 'neutral') {
            return 'bg-gray-400 hover:bg-gray-100 hover:text-gray-300 text-white font-bold py-2 px-4 rounded active:ring-2 active:ring-gray-300 transition-all'
        } else {
            return 'bg-blue-400 hover:bg-blue-100 hover:text-blue-300 text-white font-bold py-2 px-4 rounded active:ring-2 active:ring-blue-300 transition-all'
        }
    }
</script>

<button 
    class={getStyle()}
    on:click={onclick} 
>
    {text}
</button>