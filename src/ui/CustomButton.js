import Button from '@mui/material/Button';

function CustomButton({ children, size='medium' ,style, type="submit"}){
    return (
        <Button variant="contained" size={size}  type={type} style={style}>{children}</Button>
    )
}


export default CustomButton