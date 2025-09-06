
const Map = () => {
    const arr=['Horse','Dog','Cat','Cow','Elephant'];
  return (
    <div>
      <ul>
        {arr.map((item,index)=>{
            return <li key={index}>{item}</li>
        })
        }
      </ul>
    </div>
  )
}

export default Map
