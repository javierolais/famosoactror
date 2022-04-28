import React from 'react'

const getActorName = async (actorName) => {
   let fetchActor = await fetch(`https://api.themoviedb.org/3/search/person?api_key=cc2a8c5f169d8f3a958ac467b5ffd4dd&language=en-US&query=${actorName}`);
   let resultActor = await fetchActor.json();
   const { results } = resultActor;

   return results;
}

export { getActorName }
