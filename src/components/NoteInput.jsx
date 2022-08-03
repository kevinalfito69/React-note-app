import useNoteInput from "../functions/useNoteInput";

export default function NoteInput() {
  const { submit, changeInput, input } = useNoteInput();
  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form onSubmit={(e) => submit(e)}>
       
        <input
          type="text"
          name="title"
          maxLength={50}
          value={input.title}
          onChange={(e) => changeInput(e)}
          className="note-input__title"
          placeholder="Ini adalah judul ..."
          required
        />
         <p className="note-input__title__char-limit">
          Sisa karakter: {50 - input.title.length}
        </p>
        <textarea
          type="text"
          name="body"
          value={input.body}
          onChange={(e) => changeInput(e)}
          className="note-input__body"
          placeholder="Tuliskan catatanmu di sini ..."
          required
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}
