const Input = ({name, setForm, form, validate, message, submit}) => {

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
        {(submit && !form[name] && "This field cannot be empty") ||
          (validate && form[name] && !validate() && message)}
      </div>
    </div>
  )
}

export default Input
