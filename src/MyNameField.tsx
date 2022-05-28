import { useRecordContext } from 'react-admin'
import { Link } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch';
import TextField from '@mui/material/TextField';
import { Title } from './style';

export const MyNameField = ({ source }: any) => {
   const record = useRecordContext()

   return record ? (
       <Title>
           {record[source]}
           {/* <LaunchIcon sx={{ width: '0.5em', height: '0.5em', paddingLeft: 2 }} /> */}
       </Title>
   ) : null
}