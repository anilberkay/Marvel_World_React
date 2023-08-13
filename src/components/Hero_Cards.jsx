import React from 'react'
import { useNavigate } from 'react-router-dom';

const Hero_Cards = ({names,pic,ext,id}) => {
    
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/details/${id}`)
    };

  const thumbnailUrl = `${pic}.${ext}`;

    return (
    <div onClick={handleClick} className='card'>
      <img src={thumbnailUrl} alt="" />
      <p className='heroName'>{names}</p>
      <p className='heroContent'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, saepe.</p>
    </div>
  )
}

export default Hero_Cards