"use client"

import React, { useState } from 'react';
import { FaFaceMeh, FaFaceSmile, FaFaceAngry, FaFaceSadTear, FaFaceLaughBeam } from "react-icons/fa6";

interface Emotion {
    value: string;
    icon: React.FC;
    size: string;
    color: string;
}
  
const emotions: Emotion[] = [
    { value: 'meh', icon: FaFaceMeh, size: '25px', color: '#ffd31a' },
    { value: 'smile', icon: FaFaceSmile, size: '25px', color: '#ffd31a' },
    { value: 'angry', icon: FaFaceAngry, size: '25px', color: '#ffd31a' },
    { value: 'sad', icon: FaFaceSadTear, size: '25px', color: '#ffd31a' },
    { value: 'laugh', icon: FaFaceLaughBeam, size: '25px', color: '#ffd31a' },
];
  
const SectionEmotionsSelect: React.FC = () => {
    const [selectedEmotion, setSelectedEmotion] = useState<string>('meh');
  
    return (
      <div className="c-emotions">
        {emotions.map((emotion) => (
          <label key={emotion.value}>
            <input
              type="radio"
              name="emotions"
              value={emotion.value}
              checked={selectedEmotion === emotion.value}
              onChange={(e) => setSelectedEmotion(e.target.value)}
              style={{ display: 'none' }}
            />
            <emotion.icon size={emotion.size} color={selectedEmotion === emotion.value ? emotion.color : '#fffffe'} />
          </label>
        ))}
      </div>
    );
  };

export default SectionEmotionsSelect;