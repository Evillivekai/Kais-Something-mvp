import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Coffee from './Coffee.jsx';
import CollectionList from './CollectionList.jsx';
import Navigate from './Navigate.jsx';

class CoffeeMain extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      coffeeList: [],
    }

    this.fetchData = this.fetchData.bind(this);
    this.urlProductId = this.urlProductId.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  urlProductId() {
    const questMarkLocation = (window.location.href).indexOf('?');
    if (questMarkLocation === -1) {
      return '1';
    }
    return (window.location.href).slice(questMarkLocation + 1);
  }

  fetchData() {
    axios.get('http://localhost:4540/api/coffee')
      .then(result => {
        console.log(result.data);
        this.setState({
          coffeeList: result.data,
        })
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        console.log(this.state);
      })
  }

  render() {
    // console.log('render', this.state.coffeeList);
    return(
      <div>
        <div id="topAnchor"></div>
        <Navigate fetchHome={this.fetchData} fetchUserData={CollectionList.fetchUserCollection}/>
      <section id="specials1" className="specials specials-1 menu-simple bg-overlay bg-parallax bg-overlay-dark">
      <div className="bg-section">
          <img src="https://coffeepic.s3-us-west-1.amazonaws.com/h.png" alt="Background" width="100%" height="300px"/>
      </div>
      <div className="container">
          {/* <div className="divider--shape-1up"></div> */}
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
                  <div className="dishes-wrapper"height="2000">
                      <div className="dishes-bordered" height="2000">
                          <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                                  <div className="heading heading-1 mb-50 text--center">
                                      <p className="heading--subtitle">Coffee Collection</p>
                                      <h2 className="heading--title">Our Special List</h2>
                                  </div>
                              </div>
                          </div>
      <div className="row">
        {/* <CRGlobalStyle /> */}

        {
          this.state.coffeeList.map((item, index) => (
            <Coffee cofInfo={item} key={index}/>
          ))
        }
      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="divider--shape-1down"></div>
    </div>
</section>
    <CollectionList coffeeList={this.state.coffeeList}/>
    </div>
    )
  }

}

export default CoffeeMain;
