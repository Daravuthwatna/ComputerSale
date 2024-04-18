import { useRef, useState } from 'react';
import './leftmenu.css';
import { Link } from "react-router-dom";

const LeftMenu = () => {

  const [leftMenu, setLeftMenu] = useState('computer/asus');
  const leftRef = useRef()

  return (
    <div className="left-menu">
      <h2>Computer</h2>
      <ul ref={leftRef}>
        <li onClick={()=> setLeftMenu("computer/asus")}>
          <Link to='/computer/asus'>Asus</Link>
          {leftMenu === 'computer/asus' ? <hr/> : <></>}
        </li>
        <li onClick={()=> setLeftMenu("computer/msi")}>
          <Link to='/computer/msi'>MSI</Link>
          {leftMenu === 'computer/msi' ? <hr/> : <></>}
        </li>
        <li onClick={()=> setLeftMenu("computer/dell")}>
          <Link to='/computer/dell'>Dell</Link>
          {leftMenu === "computer/dell" ? <hr/> : <></>}
        </li>
        <li onClick={()=> setLeftMenu("computer/lenovo")}>
          <Link to='/computer/lenovo'>Lenovo</Link>
          {leftMenu === "computer/lenovo" ? <hr/> : <></>}
        </li>
      </ul>
      <h2>Accessory</h2>
      <ul ref={leftRef}>
        <li onClick={()=> setLeftMenu("accessory/dellAC")}>
          <Link to='/accessory/dellAC'>Dell</Link>
          {leftMenu === "accessory/dellAC" ? <hr/> : <></>}
        </li>
        <li onClick={()=> setLeftMenu("accessory/adata")}>
          <Link to='/accessory/adata'>Adata</Link>
          {leftMenu === "accessory/adata" ? <hr/> : <></>}
        </li>
        <li onClick={()=> setLeftMenu("accessory/tp-link")}>
          <Link to='/accessory/tp-link'>Tp-Link</Link>
          {leftMenu === "accessory/tp-link" ? <hr/> : <></>}
        </li>
        <li onClick={()=> setLeftMenu("accessory/razer")}>
          <Link to='/accessory/razer'>Razer</Link>
          {leftMenu === "accessory/razer" ? <hr/> : <></>}
        </li>
      </ul>
    </div>
  )
}

export default LeftMenu;
