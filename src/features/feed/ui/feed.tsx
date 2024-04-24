import { ActivityFeedForm } from "../components/activity-feed-form";
import { ActivityFeeds } from "../components/activity-feeds";
import { ThemeProvider, createTheme } from "@mui/material";
import { FeedFeatureContextProvider } from "@contexts/FeedFeatureContext/feed-feature-context-provider";

declare module '@mui/material/styles' {
  interface Palette {
    rdbtn: Palette['primary'];
    rdbtnactive: Palette['primary'];
  }

  interface PaletteOptions {
    rdbtn?: PaletteOptions['primary'];
    rdbtnactive?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    rdbtn: true;
    rdbtnactive: true;
  }
}

const theme = createTheme({
  palette: {
    rdbtn: {
      main: '#fff',
    },
    rdbtnactive: {
      main: '#00c6ed',
    },
  },
});

const FeedFeature = () => {
  return (
    <ThemeProvider theme={theme}>
      <FeedFeatureContextProvider>
        <ActivityFeedForm />
        <ActivityFeeds />
      </FeedFeatureContextProvider>
    </ThemeProvider>
  );
}

export { FeedFeature };
