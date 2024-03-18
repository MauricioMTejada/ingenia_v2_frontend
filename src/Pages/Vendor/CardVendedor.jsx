import { Avatar, Grid, Rating, Typography } from "@mui/material"
import { useSelector } from "react-redux"


export const CardVendedor = () => {

    const instructor = useSelector((state)=> state.instructorDetail)

    return (
        <Grid border={0} style={{ padding: '30px', }}>
            <Typography variant="h2" align="left" marginBottom={5} > {instructor[0]?.name}  {instructor[0]?.lastname} </Typography>

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                // alignItems="flex-start"
                // marginTop={5}
                // maxHeight={300}
                // border={0}
                >

                <Grid item xs={0}
                    border={0}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent:"center", alignItems:"center"}}
                >
                    <Grid
                    marginBottom={2}
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}
                    >
                        <Avatar
                            sx={{ bgcolor: '#E53170',
                            width: 120,
                            height: 120,

                        }}
                        >

                            <Typography variant="h3">{instructor[0]?.name ? instructor[0].name[0] : 'nada'}</Typography>

                        </Avatar>
                    </Grid>
                    <Rating
                        name="half-rating"
                        size="large"
                        defaultValue={2.5}
                        precision={0.5} />
                </Grid>

                <Grid item xs={9} border={0} padding={3}>
                    <Typography variant="h5" align="left">
                        {instructor[0]?.description}
                    </Typography>
                    <Typography variant="body1" marginTop={5} align="left">
                        {instructor[0]?.studies}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
