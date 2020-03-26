import React from 'react';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

function  Kategori()   {
return (
  
    <Paper style={style}>
      <Menu desktop={true} width={320}>
        <MenuItem primaryText="Single" insetChildren={true} />
        <MenuItem primaryText="1.15" insetChildren={true} />
        <MenuItem primaryText="Double" insetChildren={true} />
        <MenuItem
          primaryText="Custom: 1.2"
          checked={true}
          rightIcon={<ArrowRightIcon />}
          menuItems={[
            <MenuItem
              primaryText="Show"
              rightIcon={<ArrowRightIcon />}
              menuItems={[
                <MenuItem primaryText="Show Level 2" />,
                <MenuItem primaryText="Grid lines" checked={true} />,
                <MenuItem primaryText="Page breaks" insetChildren={true} />,
                <MenuItem primaryText="Rules" checked={true} />,
              ]}
            />,
            <MenuItem primaryText="Grid lines" checked={true} />,
            <MenuItem primaryText="Page breaks" insetChildren={true} />,
            <MenuItem primaryText="Rules" checked={true} />,
          ]}
        />
        <Divider />
        <MenuItem primaryText="Add space before paragraph" />
        <MenuItem primaryText="Add space after paragraph" />
        <Divider />
        <MenuItem primaryText="Custom spacing..." />
      </Menu>
    </Paper>


  );
}
export default Kategori;