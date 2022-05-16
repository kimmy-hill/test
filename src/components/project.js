import React from 'react';

function Project({info}) {
  return (
      <div class="col">
        <h3 class="m-2">
        <a href={info.link} class='link-dark'>{info.name} </a>
        <a href={info.githubLink}><i class="link-dark fab fa-github fa-1x"></i></a>
        </h3>
        <img src= {info.image} alt="" class="port-img rounded m-2"/>
      </div>
  );
}

export default Project;