import React from 'react';

const List = ({ people }) => {
  
  const todaysDate = new Date();
  const tDString = todaysDate.toDateString();
  const tDSub = tDString.slice(4, 10)
  
  
  

  return (
    <>
      {people.map((person) => {
          const {name,dob,img_url,id} = person;
          const bDay = new Date(dob)
          const bDString = bDay.toDateString();
          if(bDString.includes(tDSub)) {
            return <article className="person" key={id}>
                <img src={img_url} alt={name}/>
                <div>
                    <h4>{name}</h4>
                    <p>Born {dob}</p>
                </div>
            </article>
          } else {
            return
          }
      })}
    </>
  );
};

export default List;