import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from "react-device-detect";

import { ItemTypes } from '../../constants/constants';
import classes from './AnswerCard.module.scss';
import { useDrag, DragPreviewImage } from 'react-dnd';

const AnswerCard = (props) => {
	const [isDragged, setIsDragged] = useState(false);

	const [{isDragging}, drag, preview] = useDrag({
	    item: { type: ItemTypes.CARD, name:  props.item.name, previewImage: props.item.preview },
	    canDrag: !(props.isThisDropped && !props.wasAnsweredOnLoadIncorrect),
	    collect: monitor => ({
	      isDragging: !!monitor.isDragging(),
	    })
	});
	
	const seeCardHandler = (e, item_name) => {
		
		e.preventDefault();
		
		props.seeCardHandler(item_name);
	}

	useEffect(() => {
		
		if(!isDragged && isDragging)
		{
			setIsDragged(true);
			props.setDragging();
		}

	}, [isDragged, isDragging]);

	return (
		<>
			<DragPreviewImage connect={preview} src={props.previewImage} />
			<div onClick={ (e) => {
				isMobile && seeCardHandler(e, props.item.name)
			}} ref={drag} className={isDragging || (props.isThisDropped && !props.wasAnsweredOnLoadIncorrect) ? [props.cssClass, classes.Dragging].join(' ') : props.cssClass}>
				<span>{props.item.name}</span>
				<a href="#" onClick={(e) => seeCardHandler(e, props.item.name)}>See Card</a>
			</div>
		</>
	);
};

export default AnswerCard;