import Styles from '../../../public/css/style.module.css'
import { useForm } from 'react-hook-form';
import Chip from '@mui/material/Chip';

export default function CheckBox() {
  const { register, formState: { errors } } = useForm();
  const handleClick = () => {

  };
  return (
    <li>
      <label >
        <Chip label="Clickable" onClick={handleClick} >
        </Chip>
        <input type="checkbox" placeholder="SE" {...register("SE", { required: true })} />
      </label>
    </li>
  )
}