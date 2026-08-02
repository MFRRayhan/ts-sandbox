type Database = {
  host: string;
  port: number;
  username: string;
  password: string;
};

type Features = {
  registration: boolean;
  darkMode: boolean;
};

type AppConfig = {
  appName: string;
  version: string; //"1.0.6"
  debug: string;
  port: number;
  database: Database;
  features: Features;
};
