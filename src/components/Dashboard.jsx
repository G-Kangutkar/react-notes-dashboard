import { useEffect, useMemo, useState,useRef } from "react"
import { useNote } from "./NoteContext";

export default function Dashboard(){
    const {list,addNote} = useNote();
    const inputRef = useRef(null);
    const [note,setNote]= useState('');

    useEffect(()=>{
        inputRef.current?.focus();
    },[]);

    const totalNotes =useMemo(()=>{
        return list.length;
    },[list])

    const handleSubmit = ()=>{
        addNote(note)
        setNote('');
        inputRef.current?.focus()
    }
    return(
        <div>
            <input type="text" value={note} placeholder="Enter your note" onChange={(e)=>setNote(e.target.value)} />
            <button onClick={handleSubmit} >Add Note</button>
            <p>
                ToTal Note Count:{totalNotes}
            </p>
        </div>
    )
}