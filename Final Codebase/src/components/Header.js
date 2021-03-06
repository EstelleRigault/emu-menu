import React from 'react';


const Header = (props) => {
  return (
    <header className="top">
      <h1>
        Emu
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Menu
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  )
}

Header.propTypes = {
  tagline: React.PropTypes.string.isRequired
};

export default Header;
