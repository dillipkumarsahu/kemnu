import { TextField, Typography } from "@mui/material";


const InputField = ({ label, placeholder, size = 'small', type, value, onChnage }) => {

    return (
        <>
            {label && <Typography variant="body2" mb={0.5} fontSize={16} fontWeight={200}>{label}</Typography>}
            <TextField placeholder={placeholder} size={size} sx={{ width: '100%' }} type={type} value={value} onChnage={onChnage} />
        </>
    )
}
export default InputField;