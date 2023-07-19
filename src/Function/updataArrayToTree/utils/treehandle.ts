function treehandle(values: []){
    const result:any[] = []
    const nodes: any[]= []
    const seeds:  any[] = []
    values.forEach(val => {
        const node:any = { id: val.id, label: val.label, pid: val.pid,children: []}
        nodes.push(node)
        seeds[node.id] =node
    })
    nodes.forEach(node=> {
        const pnode = seeds[node.pid]
        if(!pnode){
            result.push(node)
        }else{
            pnode.children.push(node)
        }
        delete node.pid
    })
    return result
}