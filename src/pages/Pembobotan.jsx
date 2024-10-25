import { useState, useEffect } from "react";

const Pembobotan = () => {
  const [kriteria, setKriteria] = useState([]);
  const [alternatif, setAlternatif] = useState([]);
  const [selectedKriteria, setSelectedKriteria] = useState("");
  const [selectedAlternatif, setSelectedAlternatif] = useState("");
  const [nilai, setNilai] = useState("");
  const [tableData, setTableData] = useState(() => {
    const savedTableData = localStorage.getItem("tableData");
    return savedTableData ? JSON.parse(savedTableData) : [];
  });

  const [editId, setEditId] = useState(null); // State for managing which row is being edited
  const [editedNilai, setEditedNilai] = useState(""); // State for the edited value

  useEffect(() => {
    // Load Kriteria and Alternatif data from local storage
    const savedKriteria = JSON.parse(localStorage.getItem("kriteria")) || [];
    const savedAlternatif = JSON.parse(localStorage.getItem("alternatives")) || [];
    setKriteria(savedKriteria);
    setAlternatif(savedAlternatif);
  }, []);

  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(tableData));
  }, [tableData]);

  const handleAddRow = (e) => {
    e.preventDefault();
    if (!selectedKriteria || !selectedAlternatif || !nilai) {
      alert("Please fill out all fields.");
      return;
    }
    const newRow = {
      id: tableData.length + 1,
      kriteria: selectedKriteria,
      alternatif: selectedAlternatif,
      nilai: parseInt(nilai),
    };
    setTableData([...tableData, newRow]);
    setSelectedKriteria("");
    setSelectedAlternatif("");
    setNilai("");
  };

  const handleEdit = (row) => {
    setEditId(row.id);
    setEditedNilai(row.nilai);
    setSelectedKriteria(row.kriteria);
    setSelectedAlternatif(row.alternatif);
  };

  const handleSaveEdit = (id) => {
    const updatedData = tableData.map((row) => (row.id === id ? { ...row, nilai: parseInt(editedNilai) } : row));
    setTableData(updatedData);
    setEditId(null);
    setEditedNilai("");
    setSelectedKriteria("");
    setSelectedAlternatif("");
  };

  const handleDelete = (id) => {
    setTableData(tableData.filter((r) => r.id !== id));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-xl font-bold mb-4">Pembobotan</h1>

      <form onSubmit={handleAddRow} className="mb-6">
        <select
          value={selectedKriteria}
          onChange={(e) => setSelectedKriteria(e.target.value)}
          className="border p-2 mr-2"
          required
        >
          <option value="">Select Kriteria</option>
          {kriteria.length > 0 ? (
            kriteria.map((k) => (
              <option key={k.id} value={k.nama}>
                {k.nama}
              </option>
            ))
          ) : (
            <option disabled>No Kriteria available</option>
          )}
        </select>

        <select
          value={selectedAlternatif}
          onChange={(e) => setSelectedAlternatif(e.target.value)}
          className="border p-2 mr-2"
          required
        >
          <option value="">Select Alternatif</option>
          {alternatif.length > 0 ? (
            alternatif.map((alt) => (
              <option key={alt.id} value={alt.nama}>
                {alt.nama}
              </option>
            ))
          ) : (
            <option disabled>No Alternatif available</option>
          )}
        </select>

        <input
          type="number"
          placeholder="Nilai"
          value={nilai}
          onChange={(e) => setNilai(e.target.value)}
          className="border p-2 mr-2"
          required
        />

        <button type="submit" className="bg-blue-500 text-white p-2">
          Add Row
        </button>
      </form>

      <table className="table-auto w-full">
        <thead>
          <tr className="bg-zinc-600 text-white">
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Kriteria</th>
            <th className="border px-4 py-2">Alternatif</th>
            <th className="border px-4 py-2">Nilai</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={row.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{row.kriteria}</td>
              <td className="border px-4 py-2">{row.alternatif}</td>
              <td className="border px-4 py-2">
                {editId === row.id ? (
                  <input
                    type="number"
                    value={editedNilai}
                    onChange={(e) => setEditedNilai(e.target.value)}
                    className="border p-1"
                  />
                ) : (
                  row.nilai
                )}
              </td>
              <td className="border px-4 py-2">
                {editId === row.id ? (
                  <button onClick={() => handleSaveEdit(row.id)} className="bg-green-500 text-white p-1 mr-2">
                    Save
                  </button>
                ) : (
                  <button onClick={() => handleEdit(row)} className="bg-yellow-500 text-white p-1 mr-2">
                    Edit
                  </button>
                )}
                <button onClick={() => handleDelete(row.id)} className="bg-red-500 text-white p-1">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pembobotan;
