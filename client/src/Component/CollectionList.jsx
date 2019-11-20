import React from 'react';
import axios from 'axios';
import UserModify from './UserModify.jsx';

class CollectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_collection: [],
      coffeeList: props.coffeeList,
    }
    this.fetchUserCollection = this.fetchUserCollection.bind(this);
    this.urlProductId = this.urlProductId.bind(this);
  }

  componentDidMount() {
    this.fetchUserCollection();
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({ coffeeList: props.coffeeList });
  }

  urlProductId() {
    const questMarkLocation = (window.location.href).indexOf('?');
    if (questMarkLocation === -1) {
      return '1';
    }
    return (window.location.href).slice(questMarkLocation + 1);
  }

  fetchUserCollection() {
    axios.get('http://127.0.0.1:4540/api/usercollection/' + this.urlProductId())
      .then((result) => {
        // console.log(result)
        this.setState({
          user_name: 'User',
          user_collection: result.data,
        })
      })
  }

  render() {
    console.log(this.state.user_collection);
    return(

    <div className="row">
      <div id="collectionTag"></div>
      <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
        <div className="heading heading-1 mb-50 text--center">
          <p className="heading--subtitle">Dark as Hell, Sweet as Love</p>
          <h2 className="heading--title mb-0">{this.state.user_name}'s Collection</h2>
          <div className="divider--shape-4"></div>
        </div>
      </div>
      <div className="container">
          <div className="row clearfix">
          {
            this.state.user_collection.map((item, index) => (
              <Coffee_user cofInfo={item} key={index}/>
            ))
          }
          </div>
        </div>
        <UserModify fetchUserData={this.fetchUserCollection}/>
    </div>
    )
  }
}

const Coffee_user = (props) => {
  // console.log(props);
  return(
    <div className="col-xs-12 col-sm-12 col-md-6">
      <div className="row dish-panel">
          <div className="col-xs-12 col-sm-6 col-md-6">
              <div className=" dish--content">
                  <h4 className="dish--title">{props.cofInfo.cof_name}</h4>
                  <p className="dish--desc">{props.cofInfo.cof_description}</p>
              </div>
          </div>
      </div>
    </div>
  )
}


export default CollectionList;