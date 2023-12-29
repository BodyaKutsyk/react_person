export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    {person.age && (
      <p className="Person__age">
        {`My age is ${person.age}`}
      </p>
    )}

    <p className="Person__partner">
      {person.isMarried ? `${person.partnerName} is my ${person.sex === 'f' ? 'husband' : 'wife'}` : 'I`m not married'}
    </p>

  </section>
);
