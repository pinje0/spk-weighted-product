// pages/Home.jsx

const Home = () => {
  const populateData = () => {
    // Define Kriteria and Alternatif data
    const kriteriaData = [
      { id: 1, kode: "C1", nama: "Report Score", bobot: 5, status: "BENEFIT" },
      { id: 2, kode: "C2", nama: "Extracurricular Activities", bobot: 4, status: "BENEFIT" },
      { id: 3, kode: "C3", nama: "Character and Personality", bobot: 3, status: "BENEFIT" },
      { id: 4, kode: "C4", nama: "Guidance Counseling (BK)", bobot: 2, status: "BENEFIT" },
      { id: 5, kode: "C5", nama: "Scouting", bobot: 1, status: "BENEFIT" },
    ];

    const alternatifData = [
      { id: 1, kode: "A1", nama: "Aditya Nugraha", scores: [90, 85, 95, 85, 80] },
      { id: 2, kode: "A2", nama: "Sarah Amanda", scores: [90, 80, 75, 75, 85] },
      { id: 3, kode: "A3", nama: "Fajar Pratama", scores: [95, 90, 95, 90, 90] },
      { id: 4, kode: "A4", nama: "Nurul Izzati Arumi", scores: [95, 90, 95, 95, 90] },
      { id: 5, kode: "A5", nama: "Ahmad Firdaus Husein", scores: [90, 90, 90, 90, 90] },
      { id: 6, kode: "A6", nama: "Kirana Prameswari", scores: [85, 90, 85, 85, 80] },
      { id: 7, kode: "A7", nama: "Budi Santoso", scores: [85, 75, 80, 80, 75] },
      { id: 8, kode: "A8", nama: "Ika Nurjannah", scores: [85, 80, 85, 80, 80] },
    ];

    const tableData = [];

    // Populate tableData based on Alternatif scores and Kriteria
    alternatifData.forEach((alt) => {
      alt.scores.forEach((nilai, idx) => {
        tableData.push({
          id: tableData.length + 1,
          kriteria: kriteriaData[idx].nama,
          alternatif: alt.nama,
          nilai,
        });
      });
    });

    // Store data in localStorage
    localStorage.setItem("kriteria", JSON.stringify(kriteriaData));
    localStorage.setItem("alternatives", JSON.stringify(alternatifData));
    localStorage.setItem("tableData", JSON.stringify(tableData));

    alert("Data successfully populated!");
    window.location.reload(); // Refresh to display the new data in tables
  };

  const loadMockData = () => {
    // Define mock Kriteria and Alternatif data
    const mockKriteriaData = [
      { id: 1, kode: "C1", nama: "Mathematics", bobot: 5, status: "BENEFIT" },
      { id: 2, kode: "C2", nama: "Science", bobot: 4, status: "BENEFIT" },
      { id: 3, kode: "C3", nama: "English Language", bobot: 3, status: "BENEFIT" },
      { id: 4, kode: "C4", nama: "Physical Education", bobot: 2, status: "BENEFIT" },
      { id: 5, kode: "C5", nama: "Art", bobot: 1, status: "BENEFIT" },
    ];

    const mockAlternatifData = [
      { id: 1, kode: "A1", nama: "John Smith", scores: [88, 92, 84, 76, 89] },
      { id: 2, kode: "A2", nama: "Emily Johnson", scores: [90, 85, 79, 88, 92] },
      { id: 3, kode: "A3", nama: "Michael Williams", scores: [70, 78, 88, 90, 75] },
      { id: 4, kode: "A4", nama: "Sophia Brown", scores: [95, 87, 92, 89, 85] },
      { id: 5, kode: "A5", nama: "James Davis", scores: [80, 83, 89, 78, 82] },
    ];
    const mockTableData = [];

    // Populate mock tableData based on Alternatif scores and Kriteria
    mockAlternatifData.forEach((alt) => {
      alt.scores.forEach((nilai, idx) => {
        mockTableData.push({
          id: mockTableData.length + 1,
          kriteria: mockKriteriaData[idx].nama,
          alternatif: alt.nama,
          nilai,
        });
      });
    });

    // Store mock data in localStorage
    localStorage.setItem("kriteria", JSON.stringify(mockKriteriaData));
    localStorage.setItem("alternatives", JSON.stringify(mockAlternatifData));
    localStorage.setItem("tableData", JSON.stringify(mockTableData));

    alert("Mock data successfully loaded!");
    window.location.reload(); // Refresh to display the new mock data in tables
  };

  const clearAllData = () => {
    localStorage.clear(); // Clear all data in localStorage
    alert("All data has been cleared!");
    window.location.reload(); // Refresh the page to update the view
  };

  return (
    <div className="flex min-w-10 h-full bg-zinc-800 mt-28 text-white">
      <div className="flex p-14 flex-row w-full">
        {/* Left Side - Text Content */}
        <div className="flex flex-col w-1/2 mt-10">
          <h2 className="mb-8 font-bold text-xl">SPK FOR ACHIEVING STUDENTS | Gunadarma University</h2>
          <p className="italic">Decision Support System</p>
          <p>Name: Melvin Austin</p>
          <p>ID Number: 10121709</p>
          <p>Class: 4KA18</p>
          <div className="w-3/5">
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">Journal</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <p className="hover-opacity-animation">
              <a
                href="https://pekatpkm.my.id/index.php/JP/article/view/285/234"
                target="_blank"
                rel="noopener noreferrer"
              >
                DECISION SUPPORT SYSTEM FOR SELECTING ACHIEVING STUDENTS USING THE WEIGHTED PRODUCT (WP) METHOD AT SMK
                MUHAMMADIYAH 3 BANDUNG
              </a>
            </p>
            <button
              onClick={populateData}
              className="mt-6 px-4 py-2 bg-blue-500 hover-opacity-animation text-white rounded"
            >
              Input All Data
            </button>
          </div>
        </div>

        {/* Right Side - Additional Content */}
        <div className="flex flex-col w-1/2 mt-10">
          <h2 className="mb-4 font-bold text-xl">Additional Information</h2>
          <p className="mb-2 text-red-400">
            **Warning:** The output from the journal and this website may differ due to different data processing
            methods.
          </p>
          <p className="mb-2">
            You can use the button below to load different mock data or manually input your own data.
          </p>
          <button
            onClick={loadMockData}
            className="mt-6 px-4 py-2 bg-green-500 hover-opacity-animation text-white rounded"
          >
            Load Mock Data
          </button>
          <button
            onClick={clearAllData}
            className="mt-6 px-4 py-2 bg-red-500 hover-opacity-animation text-white rounded"
          >
            Clear All Data
          </button>
          <p className="mt-6 font-bold"></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
