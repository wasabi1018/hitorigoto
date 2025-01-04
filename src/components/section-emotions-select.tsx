"use client"

import React, { useState } from 'react';
import { FaFaceMeh, FaFaceSmile, FaFaceAngry, FaFaceSadTear, FaFaceLaughBeam } from "react-icons/fa6";

const SectionEmotionsSelect: React.FC = () => {
    const [selectedEmotion, setSelectedEmotion] = useState<string>('meh');
  
    return (
      <div className="c-emotions">
          <label key={"meh"}>
            <input
              type="radio"
              name="emotions"
              value="meh"
              checked={selectedEmotion === "meh"}
              onChange={() => setSelectedEmotion("meh")}
            />
            <FaFaceMeh size={35} color={selectedEmotion === 'meh' ? '#ffd31a' : '#fffffe'} />
          </label>

          <label key={"smile"}>
            <input
              type="radio"
              name="emotions"
              value="smile"
              checked={selectedEmotion === "smile"}
              onChange={() => setSelectedEmotion("smile")}
            />
            <FaFaceSmile size={35} color={selectedEmotion === 'smile' ? '#ffd31a' : '#fffffe'} />
          </label>

          <label key={"angry"}>
            <input
              type="radio"
              name="emotions"
              value="angry"
              checked={selectedEmotion === "angry"}
              onChange={() => setSelectedEmotion("angry")}
            />
            <FaFaceAngry size={35} color={selectedEmotion === 'angry' ? '#ffd31a' : '#fffffe'} />
          </label>

          <label key={"sad"}>
            <input
              type="radio"
              name="emotions"
              value="sad"
              checked={selectedEmotion === "sad"}
              onChange={() => setSelectedEmotion("sad")}
            />
            <FaFaceSadTear size={35} color={selectedEmotion === 'sad' ? '#ffd31a' : '#fffffe'} />
          </label>

          <label key={"laugh"}>
            <input
              type="radio"
              name="emotions"
              value="laugh"
              checked={selectedEmotion === "laugh"}
              onChange={() => setSelectedEmotion("laugh")}
            />
            <FaFaceLaughBeam size={35} color={selectedEmotion === 'laugh' ? '#ffd31a' : '#fffffe'} />
          </label>
      </div>
    );
  };

export default SectionEmotionsSelect;