import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';
import React from 'react';
import './weatherCardContainer.css';

const WeatherCardContainer = ({
  children,
  onDelete,
}: {
  children: React.ReactNode;
  onDelete?: () => void;
}) => {
  return (
    <Box mx={'4px'} my={'16px'}>
      <Card>
        <CardContent>{children}</CardContent>
        <CardActions>
          {onDelete && (
            <Button color="secondary" onClick={onDelete}>
              <Typography className="weatherCardContainer-body">
                Delete
              </Typography>
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default WeatherCardContainer;
