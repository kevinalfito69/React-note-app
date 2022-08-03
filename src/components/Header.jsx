import useNote from "../functions/useNote";

export default function Header() {
  const { search, setSearch } = useNote();
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="search"
          placeholder="Cari catatan ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
}
