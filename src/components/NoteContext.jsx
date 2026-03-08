import { createContext, useContext, useEffect, useState } from "react";

const NoteContext = createContext();

export const useNote =()=>useContext(NoteContext);
export const NoteProvider =({children})=>{
    const [list,setList]= useState([]);

    useEffect(()=>{
       
        const stored= localStorage.getItem('notes');
        if(stored){
            setList(JSON.parse(stored))
        }
    },[]);

    useEffect (()=>{
       
        localStorage.setItem('notes',JSON.stringify(list))
    },[list])
    const addNote=(text)=>{
        if(text.trim()){
            const newNote={
                text
            }
            setList([...list,newNote]);
            return newNote;
        }
    }
    const values={ list,addNote}
    return(
        <NoteContext.Provider value={values}>
            {children}
        </NoteContext.Provider>
    )
}

