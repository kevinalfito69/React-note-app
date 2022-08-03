import { useState } from "react";
import useNote from "./useNote";
import Swal from "sweetalert2";

export default function useNoteInput() {
  const { addNote } = useNote();
  const [input, setInput] = useState({ title: "", body: "" });

  const changeInput = (e) => setInput({ ...input, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Berhasil',
      text:'Catatan berhasil di buat!',
      showConfirmButton: false,
      background:'#1e293b',
      color:'#fff',
      iconColor:'#10b981',
      timer: 1500
    })

    const { title, body } = input;

    if (!title || !body) return;

    addNote(input.title, input.body);

    setInput({ title: "", body: "" });
  };

  return { input, changeInput, submit };
}
