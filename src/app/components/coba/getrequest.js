import React from 'react';

import { Button } from '@material-ui/core';
import { Search as SearchIcon, Apps as SortIcon, More as MoreIcon } from '@material-ui/icons';
import axios from 'axios';




import { Dropdown} from 'semantic-ui-react' ;




export default class PersonList extends React.Component {

  
  state = {
    persons: []
    
  }

  componentDidMount() {
    axios.get(`http://149.129.239.155/api/categories`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
        <div>
              <Button  startIcon={<SortIcon style={{ color: "#3B69CE" }} />} style={{ textTransform: 'capitalize' }}>
                     <Dropdown  text='Kategori' pointing='top' className='link item'  >                              
                                   <Dropdown.Menu>        
                                   { 
                                      this.state.persons.map((person,i) => 
                    
                                         <Dropdown key= {i}  trigger={person.stageName}  pointing='left' className='link item' margin="auto" style={{height:"30px",width:"150px"}} >
                                                 <Dropdown.Menu>
                                         {
                                          person.subCategory.map((coba,j) =>
                                                  <Dropdown.Item key={j} style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>{coba.stageName}
                                                  </Dropdown.Item>
                                                                )
                                         }                                     
                                                 </Dropdown.Menu>
                                         </Dropdown>
                                  )}
                                   </Dropdown.Menu>
                      </Dropdown>
              </Button>
        </div>
    )
  }
}