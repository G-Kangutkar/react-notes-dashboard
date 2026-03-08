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
        <div style={{backgroundColor:'gray', padding:'30px'}} >
            <input  style={{ padding:'6px'}} type="text" value={note} placeholder="Enter your note" onChange={(e)=>setNote(e.target.value)} /> <br /> <br />
            <button style={{border:'1px solid black',padding:'5px'}} onClick={handleSubmit} >Add Note</button>
            <p style={{color:'blue'}}>
                Total Note Count: {totalNotes}
            </p>
        </div>
    )
}