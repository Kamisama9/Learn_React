const AnimalProps = () => {
  const arr = ['Horse', 'Dog', 'Cat', 'Cow', 'Elephant'];
  return <Animal animals={arr} />;
};

export default AnimalProps;

const Animal = (props) => {
  const animalsArr = props.animals;
  return (
    <div>
      <h3>Animal List</h3>
      <ul>
        {animalsArr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};