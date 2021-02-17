import React from 'react';

const List = ({ people }) => {
  

  return (
    <>
      {people.map((person) => {
          const {name,dob,img_url,id} = person;
          return <article className="person" key={id}>
              <img src={img_url} alt={name}/>
              <div>
                  <h4>{name}</h4>
                  <p>Born {dob}</p>
              </div>
          </article>
      })}
    </>
  );
};

export default List;