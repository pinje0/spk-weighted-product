### Coding Assignment

### Sistem Penunjang Keputusan

<i>Based on <a href="https://pekatpkm.my.id/index.php/JP/article/view/285/234" target="_blank">"SISTEM PENDUKUNG KEPUTUSAN PEMILIHAN SISWA BERPRESTASI MENGGUNAKAN METODE WEIGHTED PRODUCT (WP) PADA SMK MUHAMMADIYAH 3 BANDUNG"</a></i>

Nama : Melvin Austin<br>
NPM : 10121709<br>
Kelas : 4KA18<br>

#### <samp>Built With</samp>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

<hr>

# Decision Support System (SPK WP) Documentation

## Overview

The Decision Support System (Sistem Pendukung Keputusan) for selecting outstanding students utilizes the Weighted Product (WP) method. This application allows users to input criteria, alternatives, and their respective scores to compute final scores for each alternative based on user-defined weights.

## Table of Contents

1. [Introduction](#introduction)
2. [Key Concepts](#key-concepts)
   - [Criteria (Kriteria)](#criteria)
   - [Alternatives (Alternatif)](#alternatives)
   - [Scores (Nilai)](#scores)
3. [Weighted Product Method](#weighted-product-method)
4. [Data Flow](#data-flow)
5. [User Interface](#user-interface)
6. [Installation and Usage](#installation-and-usage)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

This documentation provides an overview of the SPK WP web application, including its functionality, data structure, and how the Weighted Product method is applied for decision-making.

## Key Concepts

### Criteria (Kriteria)

- **Definition**: Criteria are the attributes or factors that influence the decision-making process. Each criterion has a specific weight representing its importance.
- **Data Structure**:
  - **Kode Kriteria**: Unique code for the criterion (e.g., C1, C2).
  - **Nama Kriteria**: The name of the criterion (e.g., Subject A, Subject B).
  - **Bobot**: The weight assigned to the criterion, determining its influence on the final score (higher values indicate greater importance).
  - **Status**: Indicates whether the criterion is a benefit or cost (e.g., BENEFIT).

### Alternatives (Alternatif)

- **Definition**: Alternatives are the options being evaluated in the decision-making process (e.g., students).
- **Data Structure**:
  - **Kode Alternatif**: Unique code for the alternative (e.g., A1, A2).
  - **Nama Alternatif**: The name of the alternative (e.g., Mr. A, Mr. B).

### Scores (Nilai)

- **Definition**: Scores represent the performance of each alternative against the defined criteria.
- **Data Structure**:
  - **Alternatif**: The name of the alternative being scored.
  - **Kriteria**: The name of the criterion being evaluated.
  - **Nilai**: The score assigned to the alternative for the specific criterion.

## Weighted Product Method

The Weighted Product method is used to evaluate alternatives based on multiple criteria. The calculation process involves the following steps:

1. **Normalization**: Each score is normalized against the maximum score for that criterion to ensure comparability.
2. **Weighting**: The normalized scores are raised to the power of their respective weights.
3. **Multiplication**: The results are multiplied together for each alternative, yielding a final score.

### Formula

The final score for each alternative is calculated as follows:

<img  src="./public/Screenshot 2024-10-28 005131.png"  width="50%" />

<!-- \[
Score*i = \prod*{j=1}^{n} (X\_{ij})^{W_j}
\] -->

Where:

<!-- - \( Score_i \) = Final score for alternative \( i \)
- \( X\_{ij} \) = Normalized score for alternative \( i \) under criterion \( j \)
- \( W_j \) = Weight for criterion \( j \)
- \( n \) = Total number of criteria -->

<img src="./public/Screenshot 2024-10-28 005159.png" width="50%" />

## Data Flow

1. **Input Data**: Users input criteria, alternatives, and scores through the web interface.
2. **Local Storage**: Data is stored in local storage for persistence.
3. **Calculation**: Upon loading the calculation page, the application retrieves data, normalizes scores, applies weights, and computes the final scores using the Weighted Product method.
4. **Output**: Results are displayed in a user-friendly format.

## User Interface

- **Kriteria Page**: Users can add, edit, or delete criteria.
- **Tabel Penilaian Page**: Users input scores for each alternative against the criteria.
- **Perhitungan Page**: Displays the calculated scores for each alternative based on the input data.

## Installation and Usage

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate into the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to http://localhost:5173 to access the application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
