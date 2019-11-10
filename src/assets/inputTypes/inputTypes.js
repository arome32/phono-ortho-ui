import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';



export const WhiteTextField  = withStyles({
  root: {
      '& label': {
          color: 'white',
      },
      '& label.Mui-focused': {
          color: 'white',
      },
      '& input': {      
          color: 'white',
      },
      '& label.Mui': {
          color: 'white',
      },
      '& .MuiInput-underline:before': {
          borderBottomColor: 'white',
      },
      '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
      },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'lightBlue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

export const WhiteCheckBox  = withStyles({
  root: {
    color: 'white',
    '&$checked': {
      color: 'white',
    },
  },
})(Checkbox);
