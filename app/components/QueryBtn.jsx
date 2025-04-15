'use client';

import React, {useState} from 'react';

export default function QueryBtn({title, isSelected, onSelect}) {

  return (
    <button onClick={onSelect} className={`queryBtn ${isSelected ? 'custom-linear-color text-white' : 'bg-white/8 text-white'}`}>
      {title}
    </button>
  )
}
