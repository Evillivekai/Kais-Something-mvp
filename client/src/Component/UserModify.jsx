import React from 'react';
import axios from 'axios';

class UserModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cof_name:'',
      cof_id: '',
    }
    // this.handleIdChange = this.handleIdChange.bind(this);
    // this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.urlProductId = this.urlProductId.bind(this);
  }

  // handleNameChange(event) {
  //   this.setState({
  //     cof_name: event.target.value,
  //   });
  //   console.log(this.state);
  // }
  // handleIdChange(event) {
  //   this.setState({
  //     cof_id: event.target.value,
  //   })
  //   console.log(this.state);
  // }

  UNSAFE_componentWillReceiveProps(props) {
    this.props = props;
  }

  handleSubmit() {
    if (document.getElementById('cof_id').value === ''|| document.getElementById('cof_name').value ==='') {
      alert('Please Enter Value');
    } else {
      const newColl = {
        cof_name: document.getElementById('cof_name').value,
        cof_id: document.getElementById('cof_id').value,
      };
      axios.post('http://localhost:4540/api/usercollection/'+ newColl.cof_id)
      .then(() => {
        this.props.fetchUserData();
      })
    }
  }

  urlProductId() {
    const questMarkLocation = (window.location.href).indexOf('?');
    if (questMarkLocation === -1) {
      return '1';
    }
    return (window.location.href).slice(questMarkLocation + 1);
  }

  handleDelete() {
    console.log(document.getElementById('cof_id').value)
    if (document.getElementById('cof_id').value === ''|| document.getElementById('cof_name').value ==='') {
      alert('Please Enter Value');
    } else {
      const currtColl = {
        cof_name: document.getElementById('cof_name').value,
        cof_id: document.getElementById('cof_id').value,
      };
      axios.delete('http://localhost:4540/api/usercollection/'+ currtColl.cof_id)
      .then(() => {
        this.props.fetchUserData();
      })
    }
  }

  render() {
    return (
      <div id="modifyAnchor">

      <section id="page-title" className="page-title bg-overlay bg-parallax bg-overlay-gradient">

        <div className="container" id="Mc">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="title title-1 text-center">
                        <div className="title--content" >
                            <div className="title--subtitle">Chang My Mind</div>
                            <div className="title--heading">
                                <h1>Collection Modify</h1>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                        </ol>
                        <div className="divider--shape-1down"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section id="contact1" className="contact contact-1 bg-white">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="form-container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                                <div className="contact-form">
                                    <form method="post" className="contactForm mb-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" name="contact-name" id="cof_name" placeholder="Coffee Name:" onChange={this.handleNameChange} required/>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" name="contact-last" id="cof_id" placeholder="Coffee ID:" onChange={this.handleIdChange} required/>
                                            </div>
                                            <div className="col-md-12">
                                                <input type="button" value="Add New Collection" name="submit" className="btn btn--secondary btn--block mt-10" onClick={this.handleSubmit}/>
                                            </div>
                                            <div className="col-md-12">
                                                <input type="button" value="Delete" name="submit" className="btn btn--secondary btn--block mt-10" onClick={this.handleDelete}/>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="contact-result"></div>
                                            </div>
                                        </div>
                                      </form>
                                </div></div></div></div>
                </div></div></div>
      </section>
      </div>
    )
  }
}

export default UserModify;