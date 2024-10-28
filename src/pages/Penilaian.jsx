import { useState, useEffect } from "react";

const Penilaian = () => {
  const [alternatives, setAlternatives] = useState([]);
  const [criteria, setCriteria] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Load alternatives, criteria, and scores from local storage or mock data
    const savedAlternatives = JSON.parse(localStorage.getItem("alternatives")) || [
      { id: 1, kode: "A1", nama: "Aditya Nugraha" },
    ];
    const savedCriteria = JSON.parse(localStorage.getItem("kriteria")) || [
      { id: 1, kode: "C1", nama: "Nilai Raport", bobot: "5", status: "BENEFIT" },
    ];
    const savedTableData = JSON.parse(localStorage.getItem("tableData")) || [
      { id: 1, kriteria: "Nilai Raport", alternatif: "Aditya Nugraha", nilai: 95 },
    ];

    setAlternatives(savedAlternatives);
    setCriteria(savedCriteria);
    setTableData(savedTableData);
  }, []);

  // Retrieve a score for each combination of alternative and criterion or "N/A" if not available
  const getScore = (alternativeName, criterionName) => {
    const scoreObj = tableData.find((data) => data.alternatif === alternativeName && data.kriteria === criterionName);
    return scoreObj ? scoreObj.nilai : "N/A";
  };

  return (
    <div className="container mx-auto mt-8 mb-10">
      <h1 className="text-xl font-bold mb-4">Tabel Penilaian</h1>

      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-600 text-white">
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Alternatif</th>
            {criteria.map((criterion) => (
              <th key={criterion.kode} className="border px-4 py-2">
                {criterion.nama}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {alternatives.map((alt, index) => (
            <tr key={alt.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{alt.nama}</td>
              {criteria.map((criterion) => (
                <td key={criterion.kode} className="border px-4 py-2">
                  {getScore(alt.nama, criterion.nama)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Penilaian;
