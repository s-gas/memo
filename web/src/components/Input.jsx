const Input = ({name, value, handler, validate, message, submit}) => {

  return (
    <div >
      <label>{name}
        <div><input className="input-field" type="text" name={name} onChange={handler} /></div>
      </label>
      <div className="invalid-input-message">
        {(submit && !value && "This field cannot be empty") ||
          (validate && value && !validate() && message)}
      </div>
    </div>
  )
}

export default Input
