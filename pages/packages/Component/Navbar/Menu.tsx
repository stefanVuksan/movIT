import React, { createContext, useContext, useState, MouseEvent, createRef, useEffect } from 'react'

import { Nav,  NavDropdown} from "react-bootstrap";

type menuContextType = {
  height: string,
  mobileBreak: Number,
  setHeight: (h: string) => void,
};

const menuContextDefaultValue: menuContextType = {
  height: 'auto',
  mobileBreak: 768,
  setHeight: (h: string) => {}
}
const MenuContext = createContext<menuContextType>(menuContextDefaultValue);

const NavItemRoot = (props: any) => {
  const [show, setShow] = useState<Boolean>(false);
  const containerElm = createRef<HTMLDivElement>();
  const [height, setHeight] = useState<string>('auto');
  const mobileBreak = 768;

  useEffect(() => {
    if ( window.innerWidth > mobileBreak ) {
      const rect = containerElm.current?.getBoundingClientRect();
      if ( rect ) setHeight(rect.height + 'px');
    }
  }, [show])

  const onMouseOver = () => {
    if ( window.innerWidth > mobileBreak ) setShow(true);
  }

  const onMouseLeave = () => {
    if ( window.innerWidth > mobileBreak ) setShow(false);
  }

  const onClick = () => {
    if ( window.innerWidth < mobileBreak ) {
      setShow(!show);
    }
  }

  return (
    props.children ? 
    <MenuContext.Provider value={{height, mobileBreak, setHeight}}>
      <Nav.Item onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        <Nav.Link onClick={onClick} className={`cnavlink d-flex flex-column ${show ? 'active' : ''}`}><span className='mtitle haschild text-uppercase'>{props.title}</span></Nav.Link>
        {show && <Nav.Item ref={containerElm} className='cnavroot' style={{height}}>{props.children}</Nav.Item>}
      </Nav.Item>
    </MenuContext.Provider>
    :
    <Nav.Link className='text-uppercase'>{props.title}</Nav.Link>
  )
}

const NavItem = (props: any) => {
  const [show, setShow] = useState<Boolean>(false);
  const [height, setHeight] = useState<string>('auto');
  const containerElm = createRef<HTMLDivElement>();
  const menuContext = useContext(MenuContext);

  useEffect(() => {
    const rect = containerElm.current?.getBoundingClientRect();
    const menuHeight = parseFloat(menuContext.height);
    if ( show ) {
      if ( rect )
      {
        if ( menuHeight < rect.height )
          menuContext.setHeight(rect.height + 'px');
        else
          setHeight(menuHeight + 'px');
      }
    }
  }, [show])

  const onMouseOver = () => {
    if ( window.innerWidth > menuContext.mobileBreak ) setShow(true);
  }

  const onMouseLeave = () => {
    if ( window.innerWidth > menuContext.mobileBreak ) setShow(false);
  }

  const onClick = () => {
    if ( window.innerWidth < menuContext.mobileBreak ) {
      setShow(!show);
    }
  }

  return (
    props.children ?
    <Nav.Item onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <Nav.Link onClick={onClick} className={`cnavlink d-flex flex-column ${show ? 'active' : ''}`}><span className='title haschild'>{props.title}</span><span className='desc'>{props.description}</span></Nav.Link>
      {show && <Nav.Item ref={containerElm} className='cnavsub' style={{height}}>{props.children}</Nav.Item>}
    </Nav.Item>
    :
    <Nav.Link onMouseOver={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className={`cnavlink d-flex flex-column ${show ? 'active' : ''}`}><span className='title'>{props.title}</span><span className='desc'>{props.description}</span></Nav.Link>
  )
}

const MenuItemRecursive = (props: any) => {
  return props.item && <NavItem title={props.item.title} description={props.item.description}>
    {props.item.children?.map((child: any, idx: Number) => <MenuItemRecursive key={idx} item={child} />)}
  </NavItem>
}

const MenuDesktop = (props: any) => {
  return (
      <Nav className="me-auto w-100 justify-content-md-center align-items-md-center gap-xxl-5">
        {
          props.menus?.map((menu: any, idx: Number) => <NavItemRoot key={idx} title={menu.title}>
            {menu.children?.map((child: any, i: Number) => <MenuItemRecursive key={i} item={child} />)}
          </NavItemRoot>)
        }
      </Nav>
  )
}

export default MenuDesktop