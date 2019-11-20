import React from 'react';
import Modal from 'react-modal';

const Coffee = (props) => {
  let currentCoffee = {
    cof_name: props.cofInfo.cof_name,
    cof_taste: props.cofInfo.cof_taste,
    cof_pic: props.cofInfo.cof_pic,
    cof_description: props.cofInfo.cof_description,
    onclickToggle: false,
  }
  return(
    <div className="col-xs-12 col-sm-12 col-md-6">
        <div className="dish-panel">
            <div className="dish--img">
                <img src={currentCoffee.cof_pic} alt="dish" width="80" height="80"/>
            </div>
            <div className="dish--content">
              <div className="dish--content-bio">
                <h3 className="dish--title">{currentCoffee.cof_name}</h3>
                <div className="dish--taste">{currentCoffee.cof_taste}</div>
              </div>
              <p className="dish--desc">{currentCoffee.cof_description}</p>
            </div>
        </div>
    </div>
    )
}

export default Coffee;
