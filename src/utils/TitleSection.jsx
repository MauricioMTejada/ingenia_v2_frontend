import { Typography } from "@mui/material";


export const TitleSection = ({ title }) => {
// export default function CategoriaTitulo() {
    return (
      <Typography
        variant="h5"
        color="primary"
        style={{
          textAlign: "left",
          padding: "4rem 0 2rem 0",
        }}
      >
        {title}
      </Typography>
    );
  }