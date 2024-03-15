
export async function load({ fetch }) {
    try {
        const res = await fetch(`http://localhost:5000/objects`);
        const data = await res.json()
        const objects = data.objects

        console.log('objects')
        console.log(objects)
        
        return {
            objects: objects.map(object => {
                return {
                    id: object.id,
                    name: object.name,
                    description: object.description
                }
            }),
        };


    } catch(err) {
        console.log('error')
        console.log(err)
    }
}