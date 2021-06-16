import React from 'react';

export default function() {
  const [sttActive, setActive] = React.useState(false);
  const toggleActive = () => setActive(!sttActive);
  return [sttActive, toggleActive];
}
