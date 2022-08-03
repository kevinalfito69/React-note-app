import useNote from "../functions/useNote";
import { showFormattedDate } from "../utils";

export default function NoteItem({ data }) {
  const { deleteNote, toggleStatus } = useNote();

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{data.title}</h3>
        <p className="note-item__date">{showFormattedDate(data.createdAt)}</p>
        <p className="note-item__body">{data.body}</p>
      </div>
      <div className="note-item__action">
        <button
          type="button"
          onClick={() => deleteNote(data.id)}
          className="note-item__delete-button"
        >
          Delete  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
        </button>
        <button
          type="button"
          onClick={() => toggleStatus(data.id)}
          className="note-item__archive-button"
        >
          {data.archived ? "Pindahkan" : "Arsipkan"}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
</svg>
        </button>
      </div>
    </div>
  );
}
