
import Card from "@mui/material/Card";
import SpaSharpIcon from "@mui/icons-material/SpaSharp";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Profile()  {
    return(
<>
        <Card style={{ height: '100%'}}
        sx={{bgcolor: 'transparent'}}>        
        <Box sx={{ p: 4, display: 'flex', bgcolor:"#004d40", maxWidth:'450px'}}>
        <Avatar variant="circular" image="https://avatars.githubusercontent.com/u/104470261?v=4" sx={{ marginRight: 5, p:6 }} />
        <Stack spacing={0.5}>
          
          <Typography sx={{textAlign:'center', color:'white', fontSize:'20px'}} fontWeight={900}>
          <SpaSharpIcon sx={{
                  fontSize: "30px",
                  color: "white",
                  position: "relative",
                  bottom: "3px",
                            }}/>
          Albert Foster</Typography>
          <Typography variant="body2" color="white">
            Buenos Aires, Argentina
          </Typography>
          <Typography variant="body2" color="white">
            username
          </Typography>
        </Stack>
        <Divider/>
     </Box>
    </Card> 
 </>
)
}