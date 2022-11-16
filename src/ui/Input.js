import { Stack, TextField, Autocomplete } from "@mui/material"


export function Dropdown({ id,label, value, dropDownvalues,changeHandler,name, style={width:'80%'}, hideLabel=true,  hasError, ...props}){
    let helperText = `Please select your ${label} `
  return(
    <>
    <TextField
    id={id}
    name={name}
    select
    style={style}
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


export  function TextInput({ type='text', inputPropsReadOnly=false , value, label , changeHandler, name='text Input', style, required=false }){
return(
    <TextField id="standard-basic" label={label} variant="standard" value={value} type={type}   name={name} style={{paddingRight:50,...style}} onChange={changeHandler} required={required}  InputProps={{
        readOnly: inputPropsReadOnly,
      }}
      />
)
}


export function AutoComplete({ varient ="standard", placeholder, label, renderValues, value}){
  return(
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={renderValues}
        getOptionLabel={(option) => option.title}
        defaultValue={value}
        renderInput={(params) => (
          <TextField
            {...params}
            variant={varient}
            label={label}
            placeholder={placeholder}
          />
        )}
      />
      </Stack>
  )
}