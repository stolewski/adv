import React from 'react';

const Map = () => {
  return (
    <div>
      <iframe
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.6659050550134!2d31.970595715443533!3d46.96825387914755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5c96ba95790d1%3A0x3757ff55f6f47ac1!2sRespect!5e0!3m2!1suk!2spl!4v1643619990851!5m2!1suk!2spl'
        width='600'
        height='450'
        style={{ border: 0, maxWidth: 600, width: '100%' }}
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default Map;
