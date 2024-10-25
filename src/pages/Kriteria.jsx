import { useState, useEffect } from "react";

const Kriteria = () => {
  const [kriteria, setKriteria] = useState(() => {
    const savedKriteria = localStorage.getItem("kriteria");
    return savedKriteria ? JSON.parse(savedKriteria) : [];
  });

  const [namaKriteria, setNamaKriteria] = useState("");
  const [bobot, setBobot] = useState("");
  const [status, setStatus] = useState("BENEFIT");
  const [editId, setEditId] = useState(null);
  const [editedNama, setEditedNama] = useState("");
  const [editedBobot, setEditedBobot] = useState("");
  const [editedStatus, setEditedStatus] = useState("BENEFIT");
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const kriteriaPerPage = 5; // Set max data per page

  useEffect(() => {
    localStorage.setItem("kriteria", JSON.stringify(kriteria));
  }, [kriteria]);

  const handleAddKriteria = (e) => {
    e.preventDefault();
    const newKriteria = {
      id: kriteria.length + 1,
      kode: `C${kriteria.length + 1}`,
      nama: namaKriteria,
      bobot: bobot,
      status: status,
    };
    setKriteria([...kriteria, newKriteria]);
    setNamaKriteria("");
    setBobot("");
    setStatus("BENEFIT");
  };

  const handleDelete = (id) => {
    setKriteria(kriteria.filter((k) => k.id !== id));
  };

  const handleEdit = (id) => {
    const kriteriaToEdit = kriteria.find((k) => k.id === id);
    setEditId(id);
    setEditedNama(kriteriaToEdit.nama);
    setEditedBobot(kriteriaToEdit.bobot);
    setEditedStatus(kriteriaToEdit.status);
  };

  const handleSaveEdit = (id) => {
    setKriteria(
      kriteria.map((k) => (k.id === id ? { ...k, nama: editedNama, bobot: editedBobot, status: editedStatus } : k))
    );
    setEditId(null);
  };

  // Pagination: Calculate the total pages and current kriteria to display
  const totalPages = Math.ceil(kriteria.length / kriteriaPerPage);
  const startIndex = (currentPage - 1) * kriteriaPerPage;
  const currentKriteria = kriteria.slice(startIndex, startIndex + kriteriaPerPage);

  // Move to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Move to the previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-xl font-bold mb-4">Data Kriteria</h1>

      <form onSubmit={handleAddKriteria} className="mb-6">
        <input
          type="text"
          placeholder="Nama Kriteria"
          value={namaKriteria}
          onChange={(e) => setNamaKriteria(e.target.value)}
          className="border p-2 mr-2"
          required
        />
        <input
          type="number"
          placeholder="Bobot"
          value={bobot}
          onChange={(e) => setBobot(e.target.value)}
          className="border p-2 mr-2"
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="border p-2 mr-2">
          <option value="BENEFIT">BENEFIT</option>
          <option value="COST">COST</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Tambah Kriteria
        </button>
      </form>

      <table className="table-auto w-full">
        <thead>
          <tr className="bg-zinc-600 text-white">
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Kode Kriteria</th>
            <th className="border px-4 py-2">Nama Kriteria</th>
            <th className="border px-4 py-2">Bobot</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentKriteria.map((k, index) => (
            <tr key={k.id}>
              <td className="border px-4 py-2">{startIndex + index + 1}</td>
              <td className="border px-4 py-2">{k.kode}</td>
              <td className="border px-4 py-2">
                {editId === k.id ? (
                  <input
                    type="text"
                    value={editedNama}
                    onChange={(e) => setEditedNama(e.target.value)}
                    className="border p-1"
                  />
                ) : (
                  k.nama
                )}
              </td>
              <td className="border px-4 py-2">
                {editId === k.id ? (
                  <input
                    type="number"
                    value={editedBobot}
                    onChange={(e) => setEditedBobot(e.target.value)}
                    className="border p-1"
                  />
                ) : (
                  k.bobot
                )}
              </td>
              <td className="border px-4 py-2">
                {editId === k.id ? (
                  <select value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)} className="border p-1">
                    <option value="BENEFIT">BENEFIT</option>
                    <option value="COST">COST</option>
                  </select>
                ) : (
                  k.status
                )}
              </td>
              <td className="border px-4 py-2">
                {editId === k.id ? (
                  <button onClick={() => handleSaveEdit(k.id)} className="bg-green-500 text-white p-1 mr-2">
                    Save
                  </button>
                ) : (
                  <button onClick={() => handleEdit(k.id)} className="bg-yellow-500 text-white p-1 mr-2">
                    Edit
                  </button>
                )}
                <button onClick={() => handleDelete(k.id)} className="bg-red-500 text-white p-1">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`bg-gray-500 text-white p-2 ${currentPage === 1 ? "opacity-50" : ""}`}
        >
          Previous
        </button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`bg-gray-500 text-white p-2 ${currentPage === totalPages ? "opacity-50" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Kriteria;
