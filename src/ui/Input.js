import { Stack, TextField, Autocomplete } from "@mui/material"


export function Dropdown({ id,label, defaultValue, value, dropDownvalues,changeHandler,name, style={width:'80%'}, hideLabel=true,  hasError, ...props}){
    let helperText = `Please select your ${label} `
  return(
    <>
    <TextField
    id={id}
    name={name}
    select
    style={style}
    defaultValue={defaultValue}
    value={value}
    onChange={changeHandler}
    SelectProps={{
      native: true,
    }}
    helperText={hideLabel? `Select ${label}`: helperText}
    variant="standard"
    required
  >
    {dropDownvalues.map((option) => (
      <option key={option.value} value={option.value} required>
        {option.label}
      </option>
    ))}
  </TextField>
  {props.meta}
  </>
  )
}


export  function TextInput({ type='text', inputPropsReadOnly=false , value, label , changeHandler, name='text Input', style,required=false }){
return(
    <TextField id="standard-basic" label={label} variant="standard" value={value} type={type}   name={name} style={{paddingRight:50,...style}} onChange={changeHandler} required={required}  InputProps={{
        readOnly: inputPropsReadOnly,
      }}
      />
)
}


export function AutoComplete({ varient ="standard", required, placeholder, label,name, renderValues, value, changeHandler}){
  console.log(value,"we are")
  return(
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        id="tags-standard"
        name={name}
        onChange={(event, value) => changeHandler(name,value)}
        options={renderValues}
        getOptionLabel={(option) => option["title"]? option.title:option}
        value={value}
        renderInput={(params,value) => (
          <TextField
          required={required}
            {...params}
            value={value}
            variant={varient}
            label={label}
            placeholder={placeholder}
          />
        )}
      />
      </Stack>
  )
}