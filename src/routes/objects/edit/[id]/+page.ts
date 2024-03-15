/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params })  {
    try {
        const res = await fetch(`http://localhost:5000/objects/${params.id}`);
        const data = await res.json()
        const object = data.object

        return {
            id: object.id,
            name: object.name,
            description: object.description
        }
    } catch(err) {
        console.log('error')
        console.log(err)
    }


}