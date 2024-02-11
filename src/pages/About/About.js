import React from "react";
import {
  Container,
  Typography,
  Grid,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import { height } from "@mui/system";

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        About Delicious Food
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        "We are engineers. It's not the framework that matters, it's the
        teamwork."
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">
                Our Company
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Delicious Food is a cost-efficient all-in-one food ordering
                system that empowers you to effortlessly manage your menu,
                process orders, and supercharge kitchen productivity. With a
                sleek admin interface for menu customization and a dedicated
                kitchen side for lightning-fast and systematic order
                fulfillment, elevate your business to new heights.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">
                Our Team
              </Typography>
              <Grid container spacing={2} justifyContent={"center"}>
                <Grid item xs={12} sm={6} md={4}>
                  <TeamMember
                    position="Our Scrum Master"
                    name="Hexiang"
                    description="React js & Node js developer"
                    adminNumber="P2223614"
                    contri="Developed login, menu, admin and helped with backend"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TeamMember
                    position="Our Backend Developer"
                    name="Xavier"
                    description="Node js developer"
                    adminNumber="P2204400"
                    contri="Developed backend and integrated Firebase"
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <TeamMember
                    position="Our Developer"
                    name="Hong Yi"
                    description="React js & Node js developer"
                    adminNumber="P2223979"
                    contri="Developed kitchen and Integrated Stripe"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TeamMember
                    position="Our Designer"
                    name="Darren"
                    description="Material Ui specialist"
                    adminNumber="P2223700"
                    contri="Designed the web app with Material Ui"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const TeamMember = ({ name, position, adminNumber, description, contri }) => {
  return (
    <Card sx={{ height: "230px", alignContent: "center" }}>
      <CardContent>
        <Typography variant="h6" align="center" paragraph>
          {position}
        </Typography>
        <Typography variant="body1" align="center">
          {name}
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Admin Number: {adminNumber}
        </Typography>
        <Typography variant="body1" align="center">
          {description}
        </Typography>
        <Typography variant="body1" align="center">
          {contri}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AboutPage;
