import React from 'react';
const Context=React.createContext()
function ContextProvider ({children}){
    const [allPhotos,setAllPhotos]=React.useState([])
    const url='https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    React.useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAllPhotos(data))
    },[])
    return (
        <Context.Provider value={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider,Context}