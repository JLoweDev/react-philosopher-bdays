import React from 'react';

const List = ({people}) => {
  const jsonData = JSON.parse()

  return (
    <>
      {people.map((person) => {
          const {id,name,dob,image} = person;
          const year = Number(dob.substr(0, 4));
          const month = Number(dob.substr(4, 2));
          const day = Number(dob.substr(6, 2));
          return <article key={id} className="person">
              <img src={image} alt={name}/>
              <div>
                  <h4>{name}</h4>
                  <p>Born {day}/{month}/{year}</p>
              </div>
          </article>
      })}
    </>
  );
};

export default List;