import { useState, useEffect } from "react";

const Alternatif = () => {
  const [alternatives, setAlternatives] = useState(() => {
    const savedAlternatives = localStorage.getItem("alternatives");
    return savedAlternatives ? JSON.parse(savedAlternatives) : [];
  });

  const [namaSiswa, setNamaSiswa] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [editId, setEditId] = useState(null);
  const [editedNama, setEditedNama] = useState("");

  const alternativesPerPage = 5; // Set max data per page

  useEffect(() => {
    localStorage.setItem("alternatives", JSON.stringify(alternatives));
  }, [alternatives]);

  const handleAddAlternative = (e) => {
    e.preventDefault();
    if (!namaSiswa.trim()) {
      alert("Nama Siswa tidak boleh kosong");
      return;
    }

    // Check if the alternative name already exists
    const isDuplicate = alternatives.some((alt) => alt.nama.toLowerCase() === namaSiswa.toLowerCase());
    if (isDuplicate) {
      alert("Nama Siswa sudah ada dalam daftar");
      return;
    }

    const newKodeAlternatif = `A${alternatives.length + 1}`;
    const newAlternative = {
      id: alternatives.length + 1,
      kode: newKodeAlternatif,
      nama: namaSiswa,
    };
    setAlternatives([...alternatives, newAlternative]);
    setNamaSiswa(""); // Clear the input field
  };

  const handleDelete = (id) => {
    setAlternatives(alternatives.filter((alt) => alt.id !== id));
  };

  const handleEdit = (id) => {
    const alternativeToEdit = alternatives.find((alt) => alt.id === id);
    setEditId(id);
    setEditedNama(alternativeToEdit.nama);
  };

  const handleSaveEdit = (id) => {
    setAlternatives(alternatives.map((alt) => (alt.id === id ? { ...alt, nama: editedNama } : alt)));
    setEditId(null);
  };

  // Pagination: Calculate the total pages and current alternatives to display
  const totalPages = Math.ceil(alternatives.length / alternativesPerPage);
  const startIndex = (currentPage - 1) * alternativesPerPage;
  const currentAlternatives = alternatives.slice(startIndex, startIndex + alternativesPerPage);

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
      <h1 className="text-xl font-bold mb-4">Data Alternatif</h1>

      {/* Form to add alternative */}
      <form onSubmit={handleAddAlternative} className="mb-6">
        <input
          type="text"
          placeholder="e.g., Aditya Nugraha"
          value={namaSiswa}
          onChange={(e) => setNamaSiswa(e.target.value)}
          className="border p-2 mr-2 border-slate-500"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Tambah Alternatif
        </button>
      </form>

      {/* Table displaying alternatives */}
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-zinc-600 text-white">
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Kode Alternatif</th>
            <th className="border px-4 py-2">Nama Siswa</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentAlternatives.map((alt, index) => (
            <tr key={alt.id}>
              <td className="border px-4 py-2">{startIndex + index + 1}</td>
              <td className="border px-4 py-2">{alt.kode}</td>
              <td className="border px-4 py-2">
                {editId === alt.id ? (
                  <input
                    type="text"
                    value={editedNama}
                    onChange={(e) => setEditedNama(e.target.value)}
                    className="border p-1 border-slate-500"
                  />
                ) : (
                  alt.nama
                )}
              </td>
              <td className="border px-4 py-2">
                {editId === alt.id ? (
                  <button onClick={() => handleSaveEdit(alt.id)} className="bg-green-500 text-white p-1 mr-2">
                    Save
                  </button>
                ) : (
                  <button onClick={() => handleEdit(alt.id)} className="bg-yellow-500 text-white p-1 mr-2">
                    Edit
                  </button>
                )}
                <button onClick={() => handleDelete(alt.id)} className="bg-red-500 text-white p-1">
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

export default Alternatif;
