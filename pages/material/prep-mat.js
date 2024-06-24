import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import Head from 'next/head';
import ProfileContext from '../../components/ProfileContext';

const PrepMat = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [yearFilter, setYearFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(20);
  const { profile } = useContext(ProfileContext);
  const [completedItems, setCompletedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const scriptURL = "https://script.google.com/macros/s/AKfycbwVZ7kHNm81gFN6M1XBu6oteGUxJZNpYj8_T0Z0R9E7vUKV6NOA7y6T4a_8JYDhcSeq/exec";

  const fetchData = useCallback(async () => {
    // setLoading(true);
    try {
      const response = await fetch(scriptURL);
      const result = await response.json();
      setData(result);
      // setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  const fetchUserData = useCallback(async () => {
    if (profile) {
      try {
        const response = await fetch(`https://ap-south-1.aws.data.mongodb-api.com/app/application-0-gqhlryg/endpoint/getData?email=${profile.email}`, {
          headers: {
            Authorization: `Bearer ${profile.access_token}`,
          },
        });

        const userData = await response.json();
        setCompletedItems(userData.completedPDFList || []);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  }, [profile]);

  useEffect(() => {
    const synchronizeData = async () => {
      await fetchData();
      await fetchUserData();
      // setLoading(false);
    };

    synchronizeData();
  }, [fetchData, fetchUserData, profile]);

  useEffect(() => {
    if (profile?.email) {
      const storedCompletedItems = localStorage.getItem(`${profile.email}-completedItems`);
      if (storedCompletedItems) {
        setCompletedItems(JSON.parse(storedCompletedItems));
      }
    }
  }, [profile]);

  const postCompletedItem = async (email, completedPDFList) => {
    try {
      await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/application-0-gqhlryg/endpoint/updateData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${profile.access_token}`,
        },
        body: JSON.stringify({ email, completedPDFCount: completedPDFList.length, completedPDFList }),
      });
    } catch (error) {
      console.error('Error posting completed item:', error);
    }
  };

  const handleCheckboxChange = (itemId) => {
    setCompletedItems(currentItems => {
      const updatedCompletedItems = currentItems.includes(itemId)
        ? currentItems.filter(item => item !== itemId)
        : [...currentItems, itemId];
      if (profile?.email) {
        localStorage.setItem(`${profile.email}-completedItems`, JSON.stringify(updatedCompletedItems));
        postCompletedItem(profile.email, updatedCompletedItems);
      }
      return updatedCompletedItems;
    });
  };

  const uniqueYears = useMemo(() => {
    return [...new Set(data.map(article => article.Year))];
  }, [data]);

  const filteredArticles = useMemo(() => {
    return data.filter(article => 
      (yearFilter === 'All' || article.Year === yearFilter) &&
      article.CompanyName.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [data, yearFilter, searchQuery]);

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
        <meta name="description" content="Preparation material for Placements and Internships" />
      </Head>
      <header id="page-header">
        <div className="page-heading">
          <h2>PrepMat</h2>
          <h3>Preparation material for Placements and Internships</h3>
        </div>
      </header>
      <div className="page-container">
        <p>Prepmat is essential for those who wish to access company-specific material for internships and placements. The material serves as an inception to boost your preparation over technical rounds, coding rounds, and aptitude tests. As you lay your hands on Prepmat, you will get acknowledged with the know-how of the different rounds, interview tips, and commonly asked questions.</p>
        <div className="dashboard-container">
        <div className="dashboard-header">
          <h3>Hey {profile?.name}! you have completed {completedItems.length}/264 modules </h3>
          {/* <p className="completed-text"></p> */}
          {/* <h3>modules</h3> */}
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${(completedItems.length / 264) * 100}%` }}
          ></div>
        </div>
        </div>
        <div className="filter-container">
          <div className="filter-container-item">
            Select Year: 
            <select className='publication-filter' value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
              <option value='All'>All</option>
              {uniqueYears.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className="search-container">
            Search by Company Name:
            <input
              type="text"
              placeholder="Search by Item Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
          <div>
            <div className='row'>
              {currentData.map((item, index) => (
                <div className="col-md-3" key={item.Id}>
                  <div className="card-item">
                    <h4>{item.CompanyName}</h4>
                    <p>Year: {item.Year}</p>
                    {item.MaterialForPlacement && <a href={item.MaterialForPlacement} target='_blank' rel="noreferrer"><button className='card-tags'>Material For Placement</button></a>}
                    {item.MaterialForInternship && <a href={item.MaterialForInternship} target='_blank' rel="noreferrer"><button className='card-tags'>Material For Internship</button></a>}
                    <div className="completed-checkbox">
                      <input
                        type="checkbox"
                        checked={completedItems.includes(item.Id)}
                        onChange={() => handleCheckboxChange(item.Id)}
                      />
                      <label>Completed</label>
                    </div>
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
          </div>
      </div>
    </div>
  );
};

export default PrepMat;