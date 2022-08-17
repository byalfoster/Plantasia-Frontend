import Card from "@mui/material/Card";
import SpaSharpIcon from "@mui/icons-material/SpaSharp";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function Profile() {
  return (
    <>
      <Card
        style={{ height: "100%" }}
        sx={{ bgcolor: "transparent", borderRadius: 2, boxShadow: 3 }}
      >
        <Box
          sx={{ p: 4, display: "flex", bgcolor: "#004d40", maxWidth: "450px" }}
        >
          <Avatar 
            variant="circular"
            src="https://avatars.githubusercontent.com/u/104470261?v=4"
            sx={{ width: "120px", height: "120px", borderRadius: "50%", marginRight:'30px' }}
          >
            <image></image>
          </Avatar>
          <Stack spacing={0.5}>
            <Typography
              sx={{ textAlign: "center", color: "white", fontSize: "20px" }}
              fontWeight={900}
            >
              <SpaSharpIcon
                sx={{
                  fontSize: "30px",
                  color: "white",
                  position: "relative",
                  bottom: "3px",
                }}
              />
              Albert Foster
            </Typography>
            <Typography variant="body2" color="white">
              Buenos Aires, Argentina
            </Typography>
            <Typography variant="body2" color="white">
              Byalfoster
            </Typography>
            <Stack spacing={2} direction="row">
              <Button size ="small"
                sx={{ color: "white", fontSize: "10px" }}
                variant="outlined"
              >
                Editar
              </Button>
              <Button size="small"
                sx={{ color: "white", fontSize: "10px", }}
                variant="outlined"
              >
                Cerrar Sesión
              </Button>
            </Stack>
          </Stack>
          <Divider />
        </Box>
      </Card>
    </>
  );
}
