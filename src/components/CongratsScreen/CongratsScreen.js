import React from 'react'
import Stars from './Stars/Stars';
import classes from './CongratsScreen.module.scss';

export const CongratsScreen = (props) => {

  return (
    <div className={classes.CongratsScreen}>
         <div className={classes.CorrectSign}>Correct</div>
         <Stars isAnswered={props.isAnswered} size="xl" posx="50" posy="-20" />
         <Stars isAnswered={props.isAnswered} size="xl" posx="-70" posy="30" />
         <Stars isAnswered={props.isAnswered} size="xl" posx="-140" posy="-120" />
         <Stars isAnswered={props.isAnswered} size="m" posx="0" posy="100" />
         <Stars isAnswered={props.isAnswered} size="m" posx="50" posy="-80" />
         <Stars isAnswered={props.isAnswered} size="m" posx="-140" posy="-20" />
         <Stars isAnswered={props.isAnswered} size="m" posx="-40" posy="-170" />
         <Stars isAnswered={props.isAnswered} size="m" posx="-152" posy="56" />
         <Stars isAnswered={props.isAnswered} size="m" posx="20" posy="50" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="0" posy="-120" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="-70" posy="-140" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="176" posy="-70" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="-75" posy="-85" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="85" posy="65" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="50" posy="-150" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="140" posy="-21" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="-190" posy="-40" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="220" posy="130" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="-220" posy="-130" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="-210" posy="90" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="-170" posy="-190" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="190" posy="-230" />
         <Stars isAnswered={props.isAnswered} size="xs" posx="130" posy="-130" />
    </div>
  );

};

export default CongratsScreen;
