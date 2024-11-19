import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PersistentDrawerRight from './drawer/drawer';


const NavbarMenu = ({ menu, isOpen, handleMouseEnter, handleMouseLeave, handleToggle }) =>


(
  <Link to={`/${menu.attributes.slug}`} style={{ textDecoration: 'none', color: 'black' }}>
    
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}


      
      onClick={handleToggle}
        style={{
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        transition: 'background 0.3s', 
       
        boxShadow: isOpen ? '0 2px 5px rgba(0, 0, 0, 0.2)' : 'none',
        backgroundColor: isOpen ? '#e6e6e6' : 'inherit',
        //hover
        // backgroundColor: isHovered && !isOpen ? '#e6e6e6' : isOpen ? '#e6e6e6' : 'inherit',
      }}
    >
      <div style={{ flex: 1 }}>
        {menu.attributes.name}
      </div>
      <div style={{ marginLeft: '5px' }}>{isOpen ? '▲' : '▼'}</div>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: '-10px',
            background: '#f2f2f2',
            padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1,
            borderRadius: '10px',
            border: '1px solid #ccc',
            whiteSpace: 'nowrap',
          }}
         
        >
          {menu.attributes.navbar_menus.data.map(submenu => (
           <Link
           key={submenu.id}
           ///to={`/${menu.attributes.slug}/${submenu.attributes.slug || submenu.attributes.name}`} ---here just replace  

           to={`/${menu.attributes.slug}/${(submenu.attributes.slug || submenu.attributes.name).replace(/\s+/g, '')}`}

           style={{ margin: '5px 0', textDecoration: 'none', color: 'black' ,
            transition: 'background 0.3s,box-shadow  0.3s',
          backgroundColor: '#e6e6e6',
          
          }}

          onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'} // Apply shadow on hover
          onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)'}

         >
           {submenu.attributes.name}
         </Link>
          ))}     
        </div>
      )}
    </div>
  </Link>
);

const CustomNavbar = () => {

  /// hover
const [isHovered, setHovered] = useState(false);

  const [navbarMenus, setNavbarMenus] = useState([]);
  const [logoUrl, setLogoUrl] = useState('');
  const [isProductMenuOpen, setProductMenuOpen] = useState(false);
  const [isServiceMenuOpen, setServiceMenuOpen] = useState(false);

///-----test
const [isTestOpen, setTestMenuOpen] = useState(false);

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  
///drawer

const handleDrawerOpen = () => {
  setDrawerOpen(true);
};

const handleDrawerClose = () => {
  setDrawerOpen(false);
};

const fetchData = async () => {
  try {
    // Fetch navigation menu data
    const menuResponse = await fetch('http://localhost:1339/api/navbarmenus?populate=deep,10');
    const menuData = await menuResponse.json();

    setNavbarMenus(menuData.data);

    // Fetch logo image separately
    const homeData = menuData.data.find(item => item.attributes.slug === 'home');
    if (homeData && homeData.attributes.image && homeData.attributes.image.data) {
      const imageData = homeData.attributes.image.data;
      setLogoUrl(`http://localhost:1339${imageData.attributes.url}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

  useEffect(() => {
    fetchData();
  }, []); 

  const handleMenuToggle = (menuType, isOpen, setOpen) => {
    if (isOpen) {
      setOpen(false);
    } else {
      setProductMenuOpen(false);
      setServiceMenuOpen(false);
      setTestMenuOpen(false);
      setOpen(true);
    }
  };

  const handleProductMenuToggle = () => {
    handleMenuToggle('product', isProductMenuOpen, setProductMenuOpen);
  };

  const handleServiceMenuToggle = () => {
    handleMenuToggle('service', isServiceMenuOpen, setServiceMenuOpen);
  };

//test
const handleTestMenuToggle = () => {
  handleMenuToggle('test', isTestOpen, setTestMenuOpen);
};


  const handleMenuMouseEnter = (menuType, setOpen) => {
    if (!isProductMenuOpen && !isServiceMenuOpen && !isTestOpen) {
      setOpen(true);
    }
  };

  const handleMenuMouseLeave = (setOpen) => {
    setOpen(false);
  };

  return (
    <div style={{ background: '#f2f2f2', padding: '10px', textAlign: 'left', display: 'flex', alignItems: 'center'}}>
      {logoUrl && (
        <img src={logoUrl} alt="Logo" style={{ height: '100px', marginRight: '350px',marginLeft:'10px' }}
        
        
        />
      )}
       



{/* Add the Drawer component */}
<PersistentDrawerRight open={isDrawerOpen} onClose={handleDrawerClose}  />
 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
  



 </div>
      {navbarMenus.map(menu => (
        <div key={menu.id} style={{ position: 'relative', marginLeft: '10px' }}>
          {menu.attributes.slug === 'product' ? (
            <NavbarMenu
              menu={menu}
              isOpen={isProductMenuOpen}
              handleMouseEnter={() => handleMenuMouseEnter('product', setProductMenuOpen)}
              handleMouseLeave={() => handleMenuMouseLeave(setProductMenuOpen)}
              handleToggle={handleProductMenuToggle}
            />
          ) : menu.attributes.slug === 'service' ? (
            <NavbarMenu
              menu={menu}
              isOpen={isServiceMenuOpen}
              handleMouseEnter={() => handleMenuMouseEnter('service', setServiceMenuOpen)}
              handleMouseLeave={() => handleMenuMouseLeave(setServiceMenuOpen)}
              handleToggle={handleServiceMenuToggle}
            />

            ) : menu.attributes.slug === 'test' ? (
              <NavbarMenu
                menu={menu}
                isOpen={isTestOpen}
                handleMouseEnter={() => handleMenuMouseEnter('test', setTestMenuOpen)}
                handleMouseLeave={() => handleMenuMouseLeave(setTestMenuOpen)}
                handleToggle={handleTestMenuToggle}
              />
            )
///   Home ,About ,Contact menu 
           : (
            <Link
              to={`/${menu.attributes.slug}`}
              style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}

              onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'} // Apply shadow on hover
          onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'none'; // Remove shadow completely on mouse leave
    }}
            >
              {menu.attributes.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomNavbar;
