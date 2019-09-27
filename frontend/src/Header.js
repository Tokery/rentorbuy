import React from 'react';
import Typography from '@material-ui/core/Typography';


function Header(props) {
    return (
        <Typography variant={props.type}>
              {props.text}
        </Typography>
    );
}

export default Header;