import React from 'react'
import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material'

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="./assests/person/1.jpg" alt="" className="shareProfileImg" />
                <input placeholder='Whats in your mind' className='shareInput' />
            </div>
            <hr className='shareHr'/>
            <div className="shareButtom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div htmlColor='blue' className="shareOption">
                        <Label className='shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div htmlColor='green' className="shareOption">
                        <Room className='shareIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div htmlColor='goldenrod' className="shareOption">
                        <EmojiEmotions className='shareIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>

        </div>
    </div>
  )
}
