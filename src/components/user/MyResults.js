import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { retrieve } from '../../services/foursquareApi';
// import './result.css';
import { loadList, loadSaveList } from '../user/actions';
// import Result from '../results/Result';

class MyResults extends Component {
  
  

  componentDidMount() {
    const listKey = this.props.match.params.id;
    console.log(listKey);
    this.props.loadSaveList(listKey);
  }

  handleRetrieve = (venueId) => {
    this.props.saveQuery(venueId);
    retrieve(venueId)
      .then(res => {
  
        console.log(res);
      }
      );
  };


  render() {

    const { venueList } = this.props;
    console.log(venueList);
    return (
      <Fragment>
       
        <p>hi</p>
        {/* {venueList ? 
          <ul className="result-ul">
            {venueList.map((result, index) => <Result key={index} {...result}/>)}
          </ul>
          : <p>No Save Results Yet</p>
        } */}

      </Fragment>
    );
  }
}

export default connect(

  state => ({ 
    loading: state.loading,
    // searchTerm: state.searchTerm,
    // results: state.results, 
    venueLoad: state.venueLoad,
    listResults: state.listLoad,
    venueList: state.loadSaveResults.payload
    
  }),
  ({ loadList, loadSaveList })
)(MyResults);