import produce from 'immer'
import {toast} from 'react-toastify'

export default function ListSalve(state = [], actions){

    // console.log(actions)

    switch(actions.type) {
        case "ADD_LIST":
            return produce(state, draft=>{
                let findIndex = draft.findIndex(item => item.id == actions.data.id)
                console.log(findIndex)

                if(findIndex >= 0){
                    toast.warning('voce ja tem esse filme')
                    return
                    
                    

                }else{
                    draft.push(actions.data)
                    toast.success('Salvo com sucesso')
                }
            })

        
        case "REMOVE_LIST":
            return produce(state, draft=>{
                //console.log(actions)
                let findIndex = draft.findIndex(item => item.id === actions.data)

                if(findIndex >= 0){
                    draft.splice(findIndex, 1)
                    toast.success('Excluido com sucesso')

                }else{
                    toast.error('error item não encontrado!!')
                    throw new Error ('error')
                }
            })
        
        default:
            return state
    }

}