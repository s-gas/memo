const Input = ({name, value, handler, validate, message, submit}) => {

  return (
    <div>
      <label>{name}
        <input type="text" name={name} onChange={handler} />
      </label>
      <div className="invalid-input-message">
        {(submit && !value && "This field cannot be empty") ||
          (validate && value && !validate() && message)}
      </div>
    </div>
  )
}

export default Input
