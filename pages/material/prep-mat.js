import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Head from 'next/head';

const PrepMat = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [yearFilter, setYearFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(20);
  const scriptURL= "https://script.google.com/macros/s/AKfycbwVZ7kHNm81gFN6M1XBu6oteGUxJZNpYj8_T0Z0R9E7vUKV6NOA7y6T4a_8JYDhcSeq/exec"
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(scriptURL);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const uniqueYears = useMemo(() => {
    return [...new Set(data.map(article => article.Year))];
  }, [data]);

  const filteredArticles = useMemo(() => {
    return data.filter(article => yearFilter === 'All' || article.Year === yearFilter);
  }, [data, yearFilter]);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = useMemo(() => {
    return filteredArticles.slice(indexOfFirstData, indexOfLastData);
  }, [filteredArticles, indexOfFirstData, indexOfLastData]);

  const paginate = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  return (
    <div className='main-container'>
      <Head>
        <title>PrepMat</title>
        <meta name="description" content="" />
      </Head>
      <header id="page-header">
        <div className="page-heading">
          <h2>PrepMat</h2>
          <h3>Preparation material for Placements and Internships</h3>
        </div>
      </header>
      <div className="page-container">
        <p>Prepmat is essential for those who wish to access company-specific material for internships and placements. The material serves as an inception to boost your preparation over technical rounds, coding rounds, and aptitude tests. As you lay your hands on Prepmat, you will get acknowledged with the know-how of the different rounds, interview tips, and commonly asked questions.</p>

        <div className="filter-container-item">
          Select Year: 
          <select className='publication-filter' value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
            <option value='All'>All</option>
            {uniqueYears.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className='row'>
              {currentData.map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className="card-item">
                    <h4>{item.CompanyName}</h4>
                    <p>Year: {item.Year}</p>
                    {item.MaterialForPlacement && <a href={item.MaterialForPlacement} target='_blank' rel="noreferrer"><button className='card-tags'>Material For Placement</button></a>}
                    {item.MaterialForInternship && <a href={item.MaterialForInternship} target='_blank' rel="noreferrer"><button className='card-tags'>Material For Internship</button></a>}
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination-section">
              {[...Array(Math.ceil(filteredArticles.length / dataPerPage))].map((_, i) => (
                <div key={i} className='pagination-btn-container'>
                  <button
                    className='pagination-btn'
                    onClick={() => {
                      paginate(i + 1);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {i + 1}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PrepMat;
