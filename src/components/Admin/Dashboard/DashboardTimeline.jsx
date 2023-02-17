import React, { useState } from "react";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import { Typography, Box, Divider, Stack, Button } from "@mui/material";

import { timeline } from "../../../data/adminDashboard";

const DashboardTimeline = () => {
  const [seeAll, setSeeAll] = useState(false);

  const visibleTimeline = !seeAll ? [...timeline].slice(0, 6) : [...timeline];

  function toggleSeeAll() {
    setSeeAll((prev) => {
      return !prev;
    });
  }

  return (
    <Box border={1} borderColor="lightGray" borderRadius={3}>
      <Typography variant="h6" paddingX={3} paddingY={2}>
        Activity Timeline
      </Typography>
      <Divider />
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {visibleTimeline.map((item) => (
          <TimelineItem key={item.id} sx={{ width: "100%" }}>
            <TimelineSeparator>
              <TimelineDot color={item.dotColor} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body1" fontWeight={600}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="gray">
                  {item.date}
                </Typography>
              </Stack>
              <Typography variant="body2" color="gray">
                {item.subTitle}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Divider />
      <Button
        onClick={toggleSeeAll}
        color="error"
        sx={{ marginX: "auto", width: "100%" }}
      >
        {seeAll ? "See Less Activity" : "See All Activity"}
      </Button>
    </Box>
  );
};

export default DashboardTimeline;
