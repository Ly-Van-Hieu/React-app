import React from 'react'

const Header = () => {
  return (
    <div className="header shadow d-flex mt-2">
      <div className="row">
        <div className="col-12 d-flex pl-5">
            <i className="fa fa-arrow-left"></i>
            <h4 className="pl-5">Favourites</h4>
            <i className="fa fa-ellipsis-v"></i>
        </div>
      </div>
    </div>
  )
}

export default Header
