"use client"

import React, { useState } from 'react';
import { FaFaceMeh, FaFaceSmile, FaFaceAngry, FaFaceSadTear, FaFaceLaughBeam } from "react-icons/fa6";
import { Emotions } from './Emotions';

const SectionEmotionsSelect: React.FC< { onEmotionChange: (emotion: number) => void } > = ({ onEmotionChange }) => {
    const [selectedEmotion, setSelectedEmotion] = useState<number>(Emotions.Meh);
  
    const handleChange = (emotion: number) => {
      setSelectedEmotion(emotion);
      onEmotionChange(emotion);
    }

    return (
      <div className="c-emotions">
          <label key={1}>
            <input
              type="radio"
              name="emotions"
              value="meh"
              checked={selectedEmotion === Emotions.Meh}
              onChange={() => handleChange(Emotions.Meh)}
            />
            <FaFaceMeh size={35} color={selectedEmotion === Emotions.Meh ? '#ffd31a' : '#fffffe'} />
          </label>

          <label key={"smile"}>
            <input
              type="radio"
              name="emotions"
              value="smile"
              checked={selectedEmotion === Emotions.Smile}
              onChange={() => handleChange(Emotions.Smile)}
            />
            <FaFaceSmile size={35} color={selectedEmotion === Emotions.Smile ? '#ffd31a' : '#fffffe'} />
          </label>

          <label key={"angry"}>
            <input
              type="radio"
              name="emotions"
              value="angry"
              checked={selectedEmotion === Emotions.Angry}
              onChange={() => handleChange(Emotions.Angry)}
            />
            <FaFaceAngry size={35} color={selectedEmotion === Emotions.Angry ? '#ffd31a' : '#fffffe'} />
          </label>

          <label key={"sad"}>
            <input
              type="radio"
              name="emotions"
              value="sad"
              checked={selectedEmotion === Emotions.Sad}
              onChange={() => handleChange(Emotions.Sad)}
            />
            <FaFaceSadTear size={35} color={selectedEmotion === Emotions.Sad ? '#ffd31a' : '#fffffe'} />
          </label>

          <label key={"laugh"}>
            <input
              type="radio"
              name="emotions"
              value="laugh"
              checked={selectedEmotion === Emotions.Laugh}
              onChange={() => handleChange(Emotions.Laugh)}
            />
            <FaFaceLaughBeam size={35} color={selectedEmotion === Emotions.Laugh ? '#ffd31a' : '#fffffe'} />
          </label>
      </div>
    );
  };

export default SectionEmotionsSelect;