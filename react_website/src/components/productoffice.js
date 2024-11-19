import React, { useState, useEffect } from 'react';
import styles from '../App.css';

const ProductiveOffice = () => {
  const [data, setData] = useState(null);

  const [homeData, setHomeData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1339/api/productive-office?populate=deep,10');
        const jsonData = await response.json();
        setData(jsonData.data.attributes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


///  ------------home api call for fetch  logo and footer part

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
    <div style={{ flex: 1, marginLeft: '70px',marginRight: '70px', marginTop: '100px' }}>
    <div>
      {/* Display the fetched data */}
      <h3 >{data.hero.heading}</h3>
      <p>{data.hero.subheading}</p>

      {/* Display the "element" array */}
      {data.element.map(item => (
        <div key={item.id}>
          <h3>{item.heading}</h3>
          <ul>
            {item.list.map(listItem => (
              <li key={listItem.id}>{listItem.item}</li>
            ))}
          </ul>
        </div>
      ))}

    


{/* Display the "blog" array */}
{data.blog.map((blogItem, index) => (
  <div key={blogItem.id} className={`blog-item col-${index % 3 === 2 ? 'xs-12' : 'xs-4'}`}>
    <div className="blog-content"> {/* Add a container for the content */}
      {index % 2 === 0 ? (
        <>
          <div className="content-column"> {/* Column for text */}
            <h3>{blogItem.heading}</h3>
            <p>{blogItem.subheading}</p>
          </div>
          <div style={{marginRight:'150px'}}> {/* Column for image */}
            {blogItem.image && (
              <img
                src={`
http://localhost:1339${blogItem.image.data.attributes.url}`}
                alt={blogItem.image.data.attributes.alternativeText}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <div className="content-column"> {/* Column for image */}
            {blogItem.image && (
              <img
                src={`
http://localhost:1339${blogItem.image.data.attributes.url}`}
                alt={blogItem.image.data.attributes.alternativeText}
              />
            )}
          </div>
          <div className="content-column"> {/* Column for text */}
            <h3>{blogItem.heading}</h3>
            <p>{blogItem.subheading}</p>
          </div>
        </>
      )}
    </div>
  </div>
))}






      {/* /// fetch  logo and footer from home api  */}
    {homeData.images && (
        <div className="additional-images">
          {homeData.images.data.map((image) => (
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
          <p style={{ fontWeight: 'bold',marginBottom:'80px' }}>{homeData.footer}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default ProductiveOffice;