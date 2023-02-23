import React from "react";

import { Card, CardContent, Typography, Stack, Chip } from "@mui/material";

import { RiseOutlined, FallOutlined } from "@ant-design/icons";

const StatsCard = ({ title, extra, count, percentage }) => {
  const color = Math.round(percentage) < 50 ? "warning" : "primary";
  const icon =
    Math.round(percentage) < 50 ? <FallOutlined /> : <RiseOutlined />;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {title}
        </Typography>

        <Stack sx={{ mb: 1.5, mt: 0.5 }} color="text.secondary" direction="row">
          <Typography variant="h6" fontWeight="bold" color="black">
            {count}
          </Typography>
          <Chip
            icon={icon}
            label={`${percentage} %`}
            color={color}
            sx={{ borderRadius: 1, px: 0.5, ml: 1 }}
          />
        </Stack>

        <Typography variant="caption" color="textSecondary">
          You made an extra&nbsp;
          <Typography
            component="span"
            variant="caption"
            sx={{ color: `${color || "primary"}.main` }}
          >
            {extra}
          </Typography>
          &nbsp;this year
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
