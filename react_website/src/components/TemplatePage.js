import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TemplatePage = () => {
  const { slug } = useParams();
  const [templateData, setTemplateData] = useState(null);
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for both template page and home page
        const responseTemplate = await fetch(`http://localhost:1339/api/dynamic-pages/${slug}?populate=deep,10`);
        const responseHome = await fetch('http://localhost:1339/api/homes?populate=deep,10');
        
        const dataTemplate = await responseTemplate.json();
        const dataHome = await responseHome.json();

        if (dataTemplate && dataTemplate.data) {
          setTemplateData(dataTemplate.data.attributes);
        } else {
          console.error('Template data is not in the expected format:', dataTemplate);
        }

        if (dataHome && dataHome.data && dataHome.data.length > 0) {
          setHomeData(dataHome.data[0].attributes);
        } else {
          console.error('Home data is not in the expected format:', dataHome);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [slug]);

  if (!templateData || !homeData) {
    return <div>Loading...</div>; // You can add a loading state or spinner while data is being fetched
  }

  const { heading, keyPart, KeyFeatures, Description, Footer, image } = templateData;
  const { Support, AboutUs, StayConnected } = Footer;

  return (
    <div style={{ marginLeft: '70px', marginRight: '50px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '20px' }}>
          {/* Image Column */}
          <div style={{ flex: '1 1 50%', marginRight: '20px' }}>
            {image && (
              <div>
                <img
                  src={`http://localhost:1339${image.data.attributes.url}`}
                  alt={image.data.attributes.name}
                  style={{ borderRadius: '50%', width: '450px', height: '450px' }}
                />
              </div>
            )}
          </div>

          {/* Heading and Key Part Column */}
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '103px' }}>
            <h2 style={{ color: '#3749BB' }}>{heading}</h2>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '4px', flexWrap: 'wrap', overflow: 'auto' }}>
              <p style={{ borderRadius: '16px', padding: '5px 10px', boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.2)' }}>Price: <span style={{ fontWeight: 'bold' }}>{keyPart.price}</span></p>
              <p style={{ borderRadius: '16px', padding: '5px 10px', boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.2)' }}>Regular Price: <span style={{ fontWeight: 'bold' }}>{keyPart.RegularPrice}</span></p>
              <p style={{ borderRadius: '16px', padding: '5px 10px', boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.2)' }}>Status: <span style={{ fontWeight: 'bold' }}>{keyPart.Status}</span></p>
              <p style={{ borderRadius: '16px', padding: '5px 10px', boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.2)' }}>Product Code: <span style={{ fontWeight: 'bold' }}>{keyPart.productCode}</span></p>
              <p style={{ borderRadius: '16px', padding: '5px 10px', boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.2)' }}>Brand: <span style={{ fontWeight: 'bold' }}>{keyPart.Brand}</span></p>
            </div>
            <div>
              <h3>Key Features</h3>
              <p>Model: {KeyFeatures.Model}</p>
              <p>Resolution: {KeyFeatures.Resolution}</p>
              <p>Display: {KeyFeatures.Display}</p>
              <p>Port: {KeyFeatures.Port}</p>
            </div>
            <div style={{ marginTop: '10px' }}>
              <button className="dynamicButton">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div style={{ marginTop: '20px' }}>
          <h1  >Description</h1>
          {Description.map((desc, index) => (
            <div key={index}>
              <h3>{desc.title}</h3>
              <p>{desc.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="footer" style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between',backgroundColor:'#202020' }}>
          {/* Support */}
          <div  style={{ color: 'white',marginBottom:'70px' }}>
            <h2>Support</h2>
            <p>Contact Time: {Support.time}</p>
            <p>Contact Phone: {Support.phone}</p>
          </div>
          {/* About Us */}
          <div>
            <h2  style={{ color: 'white' }}>About Us</h2>
            <ul>
              {AboutUs.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
          {/* Stay Connected */}
          <div style={{marginBottom:'90px'}}>
            <h2  style={{ color: 'white', }}>Stay Connected</h2>
            <p>Address: {StayConnected.address}</p>
            <p>Email: {StayConnected.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;





// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const TemplatePage = () => {
//   const { slug } = useParams();
//   const [templateData, setTemplateData] = useState(null);
//   const [homeData, setHomeData] = useState(null);

//   useEffect(() => {
//     const fetchTemplateData = async () => {
//       try {
//         // Fetch data for the dynamic page
//         const responseTemplate = await fetch(`http://localhost:1339/api/dynamic-pages/${slug}?populate=deep,10`);
//         const dataTemplate = await responseTemplate.json();

//         if (dataTemplate && dataTemplate.data) {
//           setTemplateData(dataTemplate.data);
//         } else {
//           console.error('Template data is not in the expected format:', dataTemplate);
//         }
//       } catch (error) {
//         console.error('Error fetching template data:', error);
//       }
//     };

//     const fetchHomeData = async () => {
//       try {
//         // Fetch data for the home page
//         const responseHome = await fetch('http://localhost:1339/api/homes?populate=deep,10');
//         const dataHome = await responseHome.json();

//         if (dataHome && dataHome.data && dataHome.data.length > 0) {
//           setHomeData(dataHome.data[0].attributes);
//         } else {
//           console.error('Home data is not in the expected format:', dataHome);
//         }
//       } catch (error) {
//         console.error('Error fetching home data:', error);
//       }
//     };

//     fetchTemplateData();
//     fetchHomeData();
//   }, [slug]);

//   if (!templateData || !homeData) {
//     return <div>Loading...</div>; // You can add a loading state or spinner while data is being fetched
//   }

//   const { title, hero, features, productDescription, partnership, footer } = templateData.attributes;

//   return (
//     <div style={{marginLeft:'100px',marginRight:'50px'}}>
//       <h1 style={{ textAlign: 'center',marginTop:'70px',marginBottom:'60px' }}>{title}</h1>

//       {/* Display Hero Section */}
//       {hero && hero.map((item) => (
//         <div key={item.id}>
//           <h2>{item.heading}</h2>
//           <p>{item.subheading}</p>
//         </div>
//       ))}

//       {/* Display Features Section */}
//       {features && features.map((feature) => (
//         <div key={feature.id}>
//           <h2>{feature.heading}</h2>
//           {/* Display each item in the features list */}
//           {feature.list && feature.list.map((item) => (
//             <p key={item.id}>{item.item}</p>
//           ))}
//         </div>
//       ))}

//       {/* Display Product Description Section */}
//       {productDescription && productDescription.map((description) => (
//         <div key={description.id}>
//           <h2>{description.heading}</h2>
//           <p>{description.subheading}</p>
//         </div>
//       ))}

//       {/* Additional Images from Home data */}
//       {homeData.images && (
//         <div className="additional-images">
//           {homeData.images.data.map((image) => (
//             <img
//               key={image.id}
//               src={`http://localhost:1339${image.attributes.url}`}
//               alt={image.attributes.name}
//               style={{
//                 width: '150px',
//                 height: '150px',
//                 margin: '10px',
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {/* Footer Section from Home data */}
//       {homeData.footer && (
//         <div className="footer">
//           <p style={{ fontWeight: 'bold',marginBottom:'80px' }}>{homeData.footer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TemplatePage;

