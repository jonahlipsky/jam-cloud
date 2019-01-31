import onClickOutside from 'react-onclickoutside';
import React from 'react';
import DropdownListItem from './dropdown_list_item';

class Dropdown extends React.Component{
  constructor(props){
    super(props);
    
    this.state = { open: false };
  }

  handleClickOutside(){
    this.setState({open: false});
  }

  

  toggleList(){
    if(this.state.open){
      this.setState({open: false});
    } else {
      this.setState({open: true});
    }
  }

  render(){
    const{list, iconClassname} = this.props;
    const{open} = this.state;
    let dropdownClass = open ? "dropdown-component selected" : "dropdown-component";
    return(
      <div className={dropdownClass}>
        <div className="dropdown-icon-header" onClick={() => this.toggleList()}>
          <i className={iconClassname}></i>
        </div>
        {open && <ul className="dropdown-component-list">
          {list.map((listItem, i) => (
            <DropdownListItem listItemPosition={i} title={listItem[0]} action={listItem[1]}/>
          ))}
        </ul>}
      </div>
    )
  }
}

export default onClickOutside(Dropdown);


//export with router
//this.props.history.push('/you/tracks' or '/tracks)
//could have a route /signout that is a function componenet mapped dispatch to props that just calls props.signout()