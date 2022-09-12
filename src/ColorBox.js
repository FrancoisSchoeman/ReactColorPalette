import React, { useState, useEffect, Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { NavLink } from 'react-router-dom';

export default function ColorBox(props) {
    const [copied, setCopied] = useState(false);

    function showCopyOverlay(){
        setCopied(true);
        const timer = setTimeout(() => setCopied(false), 1500)
        return () => clearTimeout(timer);
    }

    return (
        
        <CopyToClipboard text={props.color} onCopy={showCopyOverlay}>
            <div style={{ background: props.color }} className={props.isSingleColor ? "SingleColorBox" : "ColorBox"}>
                <div style={{ background: props.color }} className={`copy-overlay ${copied ? "show": ""}`}></div>
                <div className={`copy-msg ${copied ? "show": ""}`}>
                    <h1>Copied!</h1>
                    <p>{props.color}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{props.name}</span>
                    </div>
                    <button className='copy-button'>COPY</button>
                </div>
                {props.isSingleColor ? null : <NavLink to={props.id} onClick={(e) => {e.stopPropagation()}}><span className='see-more'>MORE</span></NavLink>}
            </div>
        </CopyToClipboard>
        
    )
}