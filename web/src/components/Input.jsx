const Input = ({name, setForm, form, validate, message}) => {

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({...form, [e.target.name]: e.target.value});
  } 

  return (
    <div>
      <label>{name}
        <input type="text" name={name} onChange={handleChange} />
      </label>
      <div className="invalid-input-message">
        {validate && form[name] && !validate() && message}
      </div>
    </div>
  )
}

export default Input
