/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const Perhitungan = () => {
  const [alternatives, setAlternatives] = useState([]);
  const [criteria, setCriteria] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Load data from local storage
    const savedAlternatives = JSON.parse(localStorage.getItem("alternatives")) || [];
    const savedCriteria = JSON.parse(localStorage.getItem("kriteria")) || [];
    const savedTableData = JSON.parse(localStorage.getItem("tableData")) || [];

    setAlternatives(savedAlternatives);
    setCriteria(savedCriteria);
    setTableData(savedTableData);

    // Calculate WP results if data is loaded
    if (savedAlternatives.length && savedCriteria.length && savedTableData.length) {
      const weightedScores = [];

      // Step 1: Find the max score for each criterion to normalize scores
      const maxScores = {};
      savedCriteria.forEach((criterion) => {
        maxScores[criterion.nama] = Math.max(
          ...savedTableData.filter((data) => data.kriteria === criterion.nama).map((data) => parseFloat(data.nilai))
        );
      });

      // Step 2: Calculate the weighted product for each alternative
      savedAlternatives.forEach((alternative) => {
        let productScore = 1;

        savedCriteria.forEach((criterion) => {
          const criteriaWeight = parseFloat(criterion.bobot);
          const isBenefit = criterion.status === "BENEFIT";

          // Retrieve and normalize score for the alternative and criterion
          const scoreObj = savedTableData.find(
            (data) => data.alternatif === alternative.nama && data.kriteria === criterion.nama
          );
          const rawScore = scoreObj ? parseFloat(scoreObj.nilai) : 1;
          const normalizedScore = rawScore / (maxScores[criterion.nama] || 1);

          // Apply weight as per benefit/cost status
          productScore *= Math.pow(normalizedScore, isBenefit ? criteriaWeight : -criteriaWeight);
        });

        weightedScores.push({ alternatif: alternative.nama, nilai: productScore });
      });

      // Set final results
      const formattedResults = weightedScores.map((res) => ({
        ...res,
        nilai: res.nilai.toFixed(3),
      }));

      setResults(formattedResults);
    }
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-xl font-bold mb-4">Hasil Perhitungan (SPK WP)</h1>

      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-600 text-white">
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Alternatif</th>
            <th className="border px-4 py-2">Nilai</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{result.alternatif}</td>
              <td className="border px-4 py-2">{result.nilai}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Perhitungan;
