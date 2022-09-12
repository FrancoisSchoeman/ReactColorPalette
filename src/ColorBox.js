import React, { useState, useEffect, Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { NavLink } from 'react-router-dom';
import useStyles from './styles/ColorBoxStyles';

export default function ColorBox(props) {
    const [copied, setCopied] = useState(false);

    function showCopyOverlay(){
        setCopied(true);
        const timer = setTimeout(() => setCopied(false), 1500)
        return () => clearTimeout(timer);
    }

    const classes = useStyles(props);

    return (
        
        <CopyToClipboard text={props.color} onCopy={showCopyOverlay}>
            <div style={{ background: props.color }} className={`${props.isSingleColor ? classes.singleColorBox : classes.colorBox} ${classes.isDark}`}>
                <div style={{ background: props.color }} className={`${classes.copyOverLay} ${copied ? classes.copyOverLayShow: classes.copyOverLay}`}></div>
                <div className={`${classes.copyMsg} ${copied ? classes.copyMsgShow: ""} ${classes.isDark}`}>
                    <h1>Copied!</h1>
                    <p>{props.color}</p>
                </div>
                <div className='copy-container'>
                    <div className={classes.boxContent}>
                        <span>{props.name}</span>
                    </div>
                    <button className={`${classes.generalButton} ${classes.copyButton} ${classes.isDark}`}>COPY</button>
                </div>
                {props.isSingleColor ? null : <NavLink to={props.id} onClick={(e) => {e.stopPropagation()}}><span className={`${classes.seeMore} ${classes.isDark}`}>MORE</span></NavLink>}
            </div>
        </CopyToClipboard>
        
    )
}

