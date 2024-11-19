import React, { useState, useEffect } from 'react';
import styles from '../App.css';

const IpTelephoneService = () => {
  const [data, setData] = useState(null);
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1339/api/ip-telephone-service?populate=deep,10');
        const jsonData = await response.json();
        setData(jsonData.data.attributes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchHomeData = async () => {
      try {
        const responseHome = await fetch('http://localhost:1339/api/homes?populate=deep,10');
        const dataHome = await responseHome.json();

        if (dataHome && dataHome.data && dataHome.data.length > 0) {
          setHomeData(dataHome.data[0].attributes);
        } else {
          console.error('Home data is not in the expected format:', dataHome);
        }
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    };

    fetchData();
    fetchHomeData();
  }, []);

  if (!data || !homeData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ flex: 1, marginLeft: '70px', marginRight: '70px', marginTop: '100px' }}>
      <div>
        {/* Display the fetched data */}
        <h3>{data.hero.heading}</h3>
        <p>{data.hero.subheading}</p>

        {/* Display the "feature" array */}
        <div>
          <h3>{data.feature.heading}</h3>
          <ul>
            {data.feature.list.map(listItem => (
              <li key={listItem.id}>{listItem.item}</li>
            ))}
          </ul>
        </div>

        {/* Display the "package" array */}
        <div>
          <h3>{data.package[0].heading}</h3>
          <ul>
            {data.package[0].list.map(listItem => (
              <li key={listItem.id}>{listItem.item}</li>
            ))}
          </ul>
        </div>

        {/* Fetch logo and footer from home API */}
        {homeData.images && (
          <div className="additional-images">
            {homeData.images.data.map(image => (
              <img
                key={image.id}
                src={`
http://localhost:1339${image.attributes.url}`}
                alt={image.attributes.name}
                style={{
                  width: '150px',
                  height: '150px',
                  margin: '10px',
                }}
              />
            ))}
          </div>
        )}

        {/* Footer Section from Home data */}
        {homeData.footer && (
          <div className="footer">
            <p style={{ fontWeight: 'bold', marginBottom: '80px' }}>{homeData.footer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IpTelephoneService;
