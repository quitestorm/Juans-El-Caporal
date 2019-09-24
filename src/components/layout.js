import React, {Component} from 'react';
import {List, ListItem, ListItemContent, ListItemAction, Icon} from 'react-mdl'


class Layout extends Component{
    render() {
        return(
            <div>
<h1>Layout</h1>

<div className='topOne' style={{width: '1050px', backgroundColor:'cyan'}}>

<div className='secondOne'style={{width: '1050px', backgroundColor:'cyan'}}> >

<List style={{width: '1050px'}}>
  <ListItem threeLine>
    <ListItemContent Z subtitle="Bryan Cranston played xxlxjkfgsdkl;fvasdfgjhsal;dkfl;askjdflkasjdfl;kjasl;fkjaslkjdfl;skjdflksjdflkjsdflkjsldfkjslkjfsfslkdjflksjdlfkjasl;kjdflksjlfjksl;fjklsjkdfjsdlskjdthe role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
    <ListItemAction>
      <a href="/">"$6.95" <Icon name=''/></a>
    </ListItemAction>
  </ListItem>
  <ListItem threeLine>
    <ListItemContent avatar="person" subtitle="Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the Need For Speed Movie.">Aaron Paul</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
  <ListItem threeLine>
    <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Bob Odenkirk</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>

  <ListItem threeLine>
    <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
    <ListItemAction>
      <a href="/"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
  <ListItem threeLine>
    <ListItemContent avatar="person" subtitle="Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the Need For Speed Movie.">Aaron Paul</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
  <ListItem threeLine>
    <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Bob Odenkirk</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>

</List>

</div>

</div>

            </div>
        )
    }
}


export default Layout;