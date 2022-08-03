import { useEffect, useState } from "react";
import useGlobalState from "./useGlobalState";
import Swal from "sweetalert2";

export default function useNote() {
  const { state, dispatch } = useGlobalState();
  const { notes, search } = state;
  const { setNotes, setSearch } = dispatch;

  const [data, setData] = useState([]);

  function addNote(title, body) {
    const data = {
      id: Date.now(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setNotes([...notes, data]);
  }

  function deleteNote(id) {
    Swal.fire({
      title: 'Apakah anda yakin',
      text: "Catatan yang dihapus tidak dapat dikembalikan",
      icon: 'warning',
      iconColor:'#f97316',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#14b8a6',
      color:'#fff',
      background:'#1e293b',
      confirmButtonText: 'Ya!, Hapus'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          background:'#1e293b',
          title:'Deleted!',
          text:'Your file has been deleted.',
          icon:'success',
          color:'#fff',
          confirmButtonColor:'#14b8a6',
          iconColor:'#14b8a6',
        }  )
        const filtered = notes.filter((note) => note.id !== id);
        setNotes(filtered);
      }
    })
  }

  function toggleStatus(id,) {
    Swal.fire({
      title: 'Berhasil',
      text: `Catatan Berhasil di Pindahkan`,
      icon: 'info',
      iconColor:'#f97316',
      confirmButtonColor:'#14b8a6',
      iconColor:'#14b8a6',
      color:'#fff',
      background:'#1e293b',
      
    })
    const targetIndex = notes.findIndex((note) => note.id === id);
    notes[targetIndex].archived = !notes[targetIndex].archived;
    setNotes([...notes]);
  }

  useEffect(() => {
    setData(notes);
  }, [notes]);

  useEffect(() => {
    if (!search) return setData(notes);
    setData(
      notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [notes, search]);

  return {
    notes: data,
    setNotes,
    deleteNote,
    toggleStatus,
    addNote,
    search,
    setSearch,
  };
}
